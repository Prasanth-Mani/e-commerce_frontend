import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f9f9f9',
      color: '#333',
      padding: '40px 20px',
      boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
    },
    footerContentLeft: {
      flex: '1',
      marginRight: '20px',
      minWidth: '250px',
    },
    logo: {
      width: '150px',
      marginBottom: '15px',
    },
    description: {
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    socialIconHover: {
      ':hover': {
        transform: 'scale(1.1)',
      }
    },
    footerContentCenter: {
      flex: '1',
      minWidth: '200px',
    },
    footerContentRight: {
      flex: '1',
      minWidth: '250px',
    },
    footerHeading: {
      color: '#2c3e50',
      marginBottom: '15px',
      borderBottom: '2px solid #3498db',
      paddingBottom: '10px',
    },
    footerList: {
      listStyle: 'none',
      padding: '0',
    },
    footerListItem: {
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    footerListItemHover: {
      ':hover': {
        color: '#3498db',
      }
    },
    divider: {
      margin: '20px 0',
      border: 'none',
      borderTop: '1px solid #e0e0e0',
    },
    copyright: {
      textAlign: 'center',
      color: '#7f8c8d',
      fontSize: '0.9rem',
    }
  };

  return (
    <div style={styles.footer} id='footer'>
      <div style={styles.footerContent}>
        <div style={styles.footerContentLeft}>
          <img 
            src={assets.logo} 
            alt="Company Logo" 
            style={styles.logo} 
          />
          <p style={styles.description}>
            Discover an unparalleled shopping experience at our store. From premium products to unbeatable deals, we are your one-stop shop for all your needs. Shop with confidence and enjoy quality and convenience at every step.
          </p>
          <div style={styles.socialIcons}>
            <img 
              src={assets.facebook_icon} 
              alt="Facebook" 
              style={{
                ...styles.socialIcon,
                ...styles.socialIconHover
              }} 
            />
            <img 
              src={assets.twitter_icon} 
              alt="Twitter" 
              style={{
                ...styles.socialIcon,
                ...styles.socialIconHover
              }} 
            />
            <img 
              src={assets.linkedin_icon} 
              alt="LinkedIn" 
              style={{
                ...styles.socialIcon,
                ...styles.socialIconHover
              }} 
            />
          </div>
        </div>
        
        <div style={styles.footerContentCenter}>
          <h2 style={styles.footerHeading}>SHOP</h2>
          <ul style={styles.footerList}>
            {['Home', 'Categories', 'Deals', 'Customer Support'].map((item, index) => (
              <li 
                key={index} 
                style={{
                  ...styles.footerListItem,
                  ...styles.footerListItemHover
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={styles.footerContentRight}>
          <h2 style={styles.footerHeading}>CONTACT US</h2>
          <ul style={styles.footerList}>
            {[
              '+1 123 456 7890', 
              'support@ecommercesite.com', 
              '1234 Market Street, Suite 100', 
              'San Francisco, CA 94103'
            ].map((item, index) => (
              <li key={index} style={styles.footerListItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <hr style={styles.divider} />
      
      <p style={styles.copyright}>
        Copyright 2024 &copy; ShopEase.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;