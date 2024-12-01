


import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import './Header.css'; 
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

const Header = () => {
  const [carouselState, setCarouselState] = useState('');
  const carouselRef = useRef(null);
  const listRef = useRef(null);

  const toys = [
    {
      id: 1,
      img: img1,
      title: 'TOY SLIDER',
      topic: 'Lego Set',
      shortDesc: 'A complete Lego set for building your dream city. Includes vehicles, buildings, and characters.',
      detailTitle: 'Lego City Set',
      detailDesc: 'A complete set with blocks, vehicles, and mini-figures. Encourage creativity and fun for hours of playtime.',
      specs: [
        { label: 'Age Range', value: '6+' },
        { label: 'Pieces', value: '500+ pieces' },
        { label: 'Material', value: 'Plastic' },
        { label: 'Theme', value: 'City' }
      ]
    },
    {
      id: 2,
      img: img2,
      title: 'DRESS SLIDER',
      topic: 'T-Shirts',
      shortDesc: 'A stunning evening gown with elegant design and premium fabric. Perfect for formal occasions.',
      detailTitle: 'Designer Evening Gown',
      detailDesc: 'Made with luxurious material, this gown features intricate embroidery and a flattering fit.',
      specs: [
        { label: 'Size', value: 'S, M, L, XL' },
        { label: 'Material', value: 'Satin, Lace' },
        { label: 'Color Options', value: 'Red, Black, Blue' },
        { label: 'Care', value: 'Dry Clean Only' }
      ]
    },
    {
      id: 3,
      img: img3,
      title: 'LAPTOP SLIDER',
      topic: 'Gaming Laptop',
      shortDesc: 'A high-performance gaming laptop with cutting-edge specs for immersive gaming.',
      detailTitle: 'Pro Gaming Laptop',
      detailDesc: 'Equipped with the latest graphics card, powerful processor, and RGB keyboard for gaming enthusiasts.',
      specs: [
        { label: 'Processor', value: 'Intel i7 12th Gen' },
        { label: 'Graphics', value: 'NVIDIA RTX 3070' },
        { label: 'RAM', value: '16GB' },
        { label: 'Storage', value: '1TB SSD' }
      ]
    },
    {
      id: 4,
      img: img4,
      title: 'BAGS SLIDER',
      topic: 'Travel Backpack',
      shortDesc: 'A durable and spacious backpack for all your travel needs. Stylish and functional design.',
      detailTitle: 'Premium Travel Backpack',
      detailDesc: 'Made with waterproof material and features multiple compartments for easy organization.',
      specs: [
        { label: 'Capacity', value: '40L' },
        { label: 'Material', value: 'Nylon, Waterproof' },
        { label: 'Color Options', value: 'Black, Grey, Blue' },
        { label: 'Weight', value: '0.8 kg' }
      ]
    }
    
  ];

  const showSlider = (type) => {
    const listElement = listRef.current;
    const items = listElement.querySelectorAll('.item');

    if (type === 'next') {
      listElement.appendChild(items[0]);
      setCarouselState('next');
    } else {
      listElement.prepend(items[items.length - 1]);
      setCarouselState('prev');
    }
  };

  const handleSeeMore = () => {
    setCarouselState('showDetail');
  };

  const handleBack = () => {
    setCarouselState('');
  };

  return (
    <div className={`carousel ${carouselState}`} ref={carouselRef}>
     
      
      <div className="list" ref={listRef}>
        {toys.map((toy) => (
          <div key={toy.id} className="item">
            <img src={toy.img} alt={`Toy ${toy.id}`} />
            <div className="introduce">
              <div className="title">{toy.title}</div>
              <div className="topic">{toy.topic}</div>
              <div className="des">{toy.shortDesc}</div>
              <button className="seeMore" onClick={handleSeeMore}>
           
              </button>
            </div>
            <div className="detail">
              <div className="title">{toy.detailTitle}</div>
              <div className="des">{toy.detailDesc}</div>
              <div className="specifications">
                {toy.specs.map((spec, index) => (
                  <div key={index}>
                    <p>{spec.label}</p>
                    <p>{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>
          <ChevronLeft />
        </button>
        <button id="next" onClick={() => showSlider('next')}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Header;