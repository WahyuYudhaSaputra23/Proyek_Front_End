import React from 'react';
import './DonutList.css';

const DonutList = ({ produkList, editProduk, deleteProduk }) => {
  return (
    <div className="container2">
      <div className="item-container2">
      {produkList.map((produk) => (
        <div className="item2" key={produk.id}>         
          {produk.gambar && (
            <img src={produk.gambar} alt={produk.nama} height="100" />
          )}
          <h3>{produk.nama}</h3> 
          <p>{produk.harga}</p>
          <div>
            <button className="btn" onClick={() => editProduk(produk.id)}>Edit</button>
            <button className="btn1" onClick={() => deleteProduk(produk.id)}>Hapus</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DonutList;
