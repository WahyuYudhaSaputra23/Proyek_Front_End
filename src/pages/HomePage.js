import React from 'react';
import './HomePage.css';

const HomePage = () => {

  const products = [
    {
      id: 1,
      name: 'Paket Donat A',
      description: 'Donat adalah kue yang digoreng dengan bentuk cincin dan lubang di tengahnya. Donat memiliki rasa manis, tekstur lembut, dan sering ditaburi dengan gula atau glasir. Ada juga varian donat dengan isian seperti krim atau selai. Donat populer sebagai hidangan sarapan, camilan, atau kue penutup.',
      image: '/images/donat1.jpg',
    },
    {
      id: 2,
      name: 'Paket Doant B',
      description: 'Donat rasa greentea adalah sebuah kue lezat yang terbuat dari adonan yang digoreng dengan sempurna dan diberi perasa teh hijau. Donat ini memiliki tekstur yang lembut di dalam dan renyah di luar. Aroma teh hijau yang khas dan menyegarkan memenuhi setiap gigitan, memberikan pengalaman yang unik dan memikat bagi pecinta teh. Rasa manis yang lembut dan sedikit pahit dari teh hijau melengkapi kelezatan donat ini. Donat rasa greentea menjadi pilihan yang sempurna untuk memanjakan lidah Anda dengan citarasa yang segar dan menggugah selera.',
      image: '/images/donat2.jpg',
    },
    {
      id: 3,
      name: 'Paket Donat C',
      description: 'Donat rasa coklat adalah sebuah lezatnya camilan yang terdiri dari lingkaran lembut dan lembut yang dipanggang hingga keemasan sempurna. Donat ini terbuat dari adonan yang kaya akan rasa coklat yang lezat, memberikan sentuhan manis dan gurih pada setiap gigitannya. Permukaannya yang halus dan berkilau dengan taburan gula bubuk memberikan tampilan yang menggoda. Ketika Anda menggigitnya, donat ini melepaskan aroma coklat yang menggoda, dan ketika rasanya masuk ke mulut, Anda akan merasakan kelembutan tekstur yang disertai dengan kelezatan coklat yang kaya. Donat rasa coklat ini adalah pilihan yang sempurna untuk memanjakan lidah Anda dan memuaskan kerinduan Anda akan manisnya coklat.',
      image: '/images/donat3.jpg',
    },
  ];

  return (
    <div className="container1">
      <h2>Selamat Datang Di Toko Donat Kami</h2>
      <div className="product-list1">
        {products.map((product, index) => (
          <div key={product.id} className={`product ${index % 2 === 0 ? 'zigzag' : ''}`}>
            <div className="product-info1">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
            <div className="product-image1">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
