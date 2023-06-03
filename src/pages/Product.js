import React, { useState, useEffect } from 'react';
import DonutForm from '../components/DonutForm';
import DonutList from '../components/DonutList';
import './Product.css';

const Product = () => {
  const [produkList, setProdukList] = useState([]);
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [gambar, setGambar] = useState('');
  const [editingProdukId, setEditingProdukId] = useState('');
  const [formError, setFormError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const storedProdukList = localStorage.getItem('produkList');
    if (storedProdukList) {
      setProdukList(JSON.parse(storedProdukList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('produkList', JSON.stringify(produkList));
  }, [produkList]);

  const addProduk = () => {
    if (!nama || !harga || !gambar) {
      setFormError('Semua kolom harus diisi!!');
      return;
    }

    // Validasi harga dengan format Rp
    if (!harga.match(/^\d+$/)) {
      setFormError('Harga produk hanya boleh berisi angka!!');
      return;
    }

    const formattedHarga = parseInt(harga).toLocaleString('id-ID');

    const newProduk = {
      id: Math.random().toString(36).substr(2, 9),
      nama,
      harga: `Rp ${formattedHarga}`,
      gambar,
    };

    setProdukList([...produkList, newProduk]);
    setNama('');
    setHarga('');
    setGambar('');
    setFormError('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const updateProduk = () => {
    if (!nama || !harga || !gambar) {
      setFormError('Semua kolom harus diisi!!');
      return;
    }

    const cleanedHarga = harga.replace(/\./g, '');

    if (!cleanedHarga.match(/^\d+$/)) {
      setFormError('Harga produk hanya boleh berisi angka!!');
      return;
    }

    const formattedHarga = parseInt(cleanedHarga).toLocaleString('id-ID');
    const updatedProdukList = produkList.map((produk) => {
      if (produk.id === editingProdukId) {
        return { ...produk, nama, harga: `Rp ${formattedHarga}`, gambar };
      }
      return produk;
    });

    setProdukList(updatedProdukList);
    setNama('');
    setHarga('');
    setGambar('');
    setEditingProdukId('');
    setFormError('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const editProduk = (id) => {
    const produkToEdit = produkList.find((produk) => produk.id === id);
    if (produkToEdit) {
      setNama(produkToEdit.nama);
      setHarga(produkToEdit.harga.replace('Rp ', ''));
      setGambar(produkToEdit.gambar);
      setEditingProdukId(id);
      setFormError('');
    }
  };

  const deleteProduk = (id) => {
    const updatedProdukList = produkList.filter((produk) => produk.id !== id);
    setProdukList(updatedProdukList);
    setFormError('');
  };

  return (
    <div>
      <h1>Daftar Produk</h1>
      <div className="success-alert" style={{ display: showSuccess ? 'block' : 'none' }}>
        <span className="checkmark">&#10003;</span>
        <span className="alert-text">Upload Success</span>
      </div>
      <div className="form-container">
        {<DonutForm
                nama={nama}
                harga={harga}
                gambar={gambar}
                setNama={setNama}
                setHarga={setHarga}
                setGambar={setGambar}
                formError={formError}
                addProduk={addProduk}
                updateProduk={updateProduk}
                editingProdukId={editingProdukId}
            />}
      </div>
      <div className="list-container">
        {<DonutList
                produkList={produkList}
                editProduk={editProduk}
                deleteProduk={deleteProduk}
            />}
      </div>
    </div>
  );
};

export default Product;