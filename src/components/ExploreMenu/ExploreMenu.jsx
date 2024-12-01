import React from 'react';
import './ExploreMenu.css';

const menuList = [
  {
    menu_name: 'Electronics',
    menu_image: 'https://threedio-prod-var-cdn.icons8.com/yc/preview_sets/previews/SFwU6rlhDtdP89tH.webp',
  },
  {
    menu_name: 'Fashion',
    menu_image: 'https://threedio-prod-var-cdn.icons8.com/if/preview_sets/previews/D31kQVu2asisJyHJ.webp',
  },
  {
    menu_name: 'Home Appliances',
    menu_image: 'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    menu_name: 'Books',
    menu_image: 'https://threedio-prod-var-cdn.icons8.com/gz/preview_sets/previews/xPAub1GRR4-KElq3.webp',
  },
  {
    menu_name: 'Toys',
    menu_image: 'https://threedio-prod-var-cdn.icons8.com/ep/preview_sets/previews/meqqGuyfsX0Hrf43.webp',
  },
  {
    menu_name: 'Sports',
    menu_image: 'https://threedio-prod-var-cdn.icons8.com/hp/preview_sets/previews/BjhQa_hUisMqHTW3.webp',
  },
  {
    menu_name: 'Beauty',
    menu_image: 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Categories</h1>
        <p className="explore-menu-text">
          Discover products from various categories and find exactly what you're looking for.
        </p>
        <div className="explore-menu-list">
          {menuList.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
