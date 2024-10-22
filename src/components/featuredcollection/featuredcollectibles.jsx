import React from 'react';
import './featuredcollectibles.css';

function FeaturedCollectibles() {
  const collectibles = [
    {
      name: 'Zoro Mindsweep G',
      price: '$169',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/BCpQOfUu4wwvEqUcs8FXk5NvWtoBvzhokk5xnNUJefuy9iQnA.jpg',
      alt: 'Zoro Mindsweep G watch'
    },
    {
      name: 'Romeleu Authentic',
      price: '$167',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/NjA6Rh1ZzcKpFFSehAujJDrrI1uFpzH2YxePaInusQ32eiQnA.jpg',
      alt: 'Romeleu Authentic watch'
    },
    {
      name: 'Sierra Large Dial',
      price: '$166',
      imgSrc: 'https://storage.googleapis.com/a1aa/image/JVwuenBSo80TQqIzdNJ2rF8GjTq6Le1dfnF4e1GfbZ0fuXE6E.jpg',
      alt: 'Sierra Large Dial watch'
    }
  ];

  return (
    <div className="collectibles">
      {collectibles.map((item, index) => (
        <div key={index} className="collectible-item">
          <img src={item.imgSrc} alt={item.alt} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default FeaturedCollectibles;