import React, { useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Products near you</h2>

            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                price={item.price} 
                                description={item.description} 
                                image={item.image}
                                category={item.category}
                                stock={item.stock}
                                tags={item.tags}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <br/><br/>
        </div>
    );
};

export default FoodDisplay;