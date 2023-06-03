import React from 'react';
import './DonutForm.css';

const DonutForm = ({
  nama,
  harga,
  setNama,
  setHarga,
  setGambar,
  formError,
  addProduk,
  updateProduk,
  editingProdukId,
}) => {
  const handleGambarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setGambar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Nama Produk"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="text"
        placeholder="Harga Produk"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleGambarChange}
      />
      {editingProdukId ? (
        <button className="btn-update" onClick={updateProduk}>Update</button>
      ) : (
        <button className="btn-tambah" onClick={addProduk}>Tambah</button>
      )}
      {formError && <p>{formError}</p>}
    </div>
  );
};

export default DonutForm;
