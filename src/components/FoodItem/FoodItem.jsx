import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image, category, stock}) => {
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img 
                    src={url+"/images/"+image} 
                    className='food-item-img' 
                    alt={name} 
                />
                {stock > 0 ? (
                    !cartItems[id] ? (
                        <img 
                            className='add' 
                            onClick={()=>addToCart(id)} 
                            src={assets.add_icon_white} 
                            alt="Add to cart" 
                        />
                    ) : (
                        <div className='food-item-counter'>
                            <img 
                                onClick={()=>removeFromCart(id)} 
                                src={assets.remove_icon_red} 
                                alt="Remove from cart" 
                            />
                            <p>{cartItems[id]}</p>
                            <img 
                                onClick={()=>addToCart(id)} 
                                src={assets.add_icon_green} 
                                alt="Add more to cart" 
                            />
                        </div>
                    )
                ) : (
                    <div className='out-of-stock'>Out of Stock</div>
                )}
            </div>

            <div className="food-item-info">
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <div className="food-item-desc">{description}</div>
                <div className='food-item-category'>Category: {category}</div>
                <div className='food-item-stock'>Stock: {stock}</div>
                <div className='food-item-price'>Rs.{price}</div>
            </div>
        </div>
    )
}

export default FoodItem