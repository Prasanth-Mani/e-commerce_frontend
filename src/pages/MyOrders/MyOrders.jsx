import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const MyOrders = () => {
  const { url, token } = useContext(StoreContext)
  const [data, setData] = useState([])

  const fetchOrders = async (req, res) => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data)
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '30px',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    orderContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '20px',
    },
    orderCard: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    orderCardHover: {
      ':hover': {
        transform: 'scale(1.03)',
      }
    },
    orderIcon: {
      width: '50px',
      height: '50px',
      marginBottom: '15px',
    },
    productImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    orderDetails: {
      marginBottom: '10px',
      color: '#555',
    },
    orderAmount: {
      fontWeight: 'bold',
      color: '#2ecc71',
      fontSize: '1.2rem',
    },
    addressDetails: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '10px',
    },
    productInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    productDetails: {
      marginLeft: '15px',
    },
    orderStatus: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
    },
    statusDot: {
      marginRight: '10px',
      fontSize: '1rem',
    },
    trackButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      marginTop: '15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    trackButtonHover: {
      ':hover': {
        backgroundColor: '#2980b9',
      }
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Orders</h2>
      <div style={styles.orderContainer}>
        {data.map((order, index) => (
          <div
            key={index}
            style={{
              ...styles.orderCard,
              ...styles.orderCardHover
            }}
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel Icon"
              style={styles.orderIcon}
            />
            
            {/* Order Date */}
            <p style={styles.orderDetails}>
              <strong>Order Date:</strong> {formatDate(order.date)}
            </p>

            {/* Shipping Address */}
            <div style={styles.addressDetails}>
              <strong>Shipping Address:</strong>
              <p>
                {order.address.firstName} {order.address.lastName}<br />
                {order.address.street}<br />
                {order.address.city}
              </p>
            </div>

            {/* Product Details */}
            {order.items.map((item, itemIndex) => (
              <div key={itemIndex} style={styles.productInfo}>
                <img 
                  src={url+"/images/"+item.image} 
                  alt={item.name} 
                  style={styles.productImage}
                />
                <div style={styles.productDetails}>
                  <p><strong>{item.name}</strong></p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: Rs.{item.price}.00</p>
                  <p>Category: {item.category}</p>
                  <p>Brand: {item.brand}</p>
                </div>
              </div>
            ))}

            <p style={styles.orderAmount}>Total Amount: Rs.{order.amount}.00</p>
            <p style={styles.orderDetails}>Items: {order.items.length}</p>
            
            <p style={styles.orderStatus}>
              <span style={styles.statusDot}>&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            
            <button
              style={{
                ...styles.trackButton,
                ...styles.trackButtonHover
              }}
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders