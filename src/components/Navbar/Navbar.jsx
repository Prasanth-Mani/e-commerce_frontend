import React, { useContext, useState } from 'react'
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';  // Import the CSS file

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'relative',
            zIndex: 10
        },
        logo: {
            width: '150px',
            height: 'auto',
            cursor: 'pointer'
        },
        navbarMenu: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0
        },
        navbarMenuLink: {
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            padding: '5px 10px',
            borderRadius: '5px'
        },
        activeLink: {
            color: '#2975f0',
            backgroundColor: 'rgba(255,99,71,0.1)'
        },
        navbarRight: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        },
        cartIconContainer: {
            position: 'relative'
        },
        cartIcon: {
            width: '25px',
            cursor: 'pointer'
        },
        cartDot: {
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            width: '12px',
            height: '12px',
            backgroundColor: '#2975f0',
            borderRadius: '50%',
            display: 'none'
        },
        activeCartDot: {
            display: 'block'
        },
        signInButton: {
            backgroundColor: '#2975f0',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        navbarProfile: {
            position: 'relative',
            cursor: 'pointer'
        },
        profileIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #2975f0',
            transition: 'transform 0.2s ease'
        },
        profileIconActive: {
            transform: 'scale(1.1)'
        },
        profileDropdown: {
            position: 'absolute',
            right: 0,
            top: '120%',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            width: '250px',
            padding: '15px',
            zIndex: 20,
            opacity: 0,
            visibility: 'hidden',
            transform: 'translateY(-10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s'
        },
        profileDropdownVisible: {
            opacity: 1,
            visibility: 'visible',
            transform: 'translateY(0)'
        },
        dropdownItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '12px',
            borderRadius: '8px',
            transition: 'background-color 0.2s ease',
            cursor: 'pointer'
        },
        dropdownItemHover: {
            backgroundColor: 'rgba(255,99,71,0.1)'
        }
    };

    return (
        <div style={styles.navbar}>
            <Link to="/">
                <img 
                    src={assets.logo} 
                    style={styles.logo} 
                    alt="Logo" 
                />
            </Link>

            <ul style={styles.navbarMenu}>
                <Link 
                    to="/" 
                    onClick={() => setMenu("home")}
                    style={{
                        ...styles.navbarMenuLink,
                        ...(menu === "home" ? styles.activeLink : {})
                    }}
                >
                    Home
                </Link>
                <a 
                    href="#explore-menu" 
                    className="navbar-menu-item-hidden"
                    onClick={() => setMenu("menu")}
                    style={{
                        ...styles.navbarMenuLink,
                        ...(menu === "menu" ? styles.activeLink : {})
                    }}
                >
                    Products
                </a>
              
                <a 
                    href="#footer" 
                    className="navbar-menu-item-hidden"
                    onClick={() => setMenu("contact")}
                    style={{
                        ...styles.navbarMenuLink,
                        ...(menu === "contact" ? styles.activeLink : {})
                    }}
                >
                    Contact
                </a>
            </ul>

            <div style={styles.navbarRight}>
                <div style={styles.cartIconContainer}>
                    <Link to="/cart">
                        <img 
                            src={assets.basket_icon} 
                            style={styles.cartIcon} 
                            alt="Cart" 
                        />
                    </Link>
                    <div 
                        style={{
                            ...styles.cartDot,
                            ...(getTotalCartAmount() !== 0 ? styles.activeCartDot : {})
                        }}
                    ></div>
                </div>

                {!token ? (
                    <button 
                        onClick={() => setShowLogin(true)}
                        style={styles.signInButton}
                    >
                        sign in
                    </button>
                ) : (
                    <div style={styles.navbarProfile}>
                        <img 
                            src={assets.profile_icon} 
                            alt="Profile" 
                            style={{
                                ...styles.profileIcon,
                                ...(showProfileDropdown ? styles.profileIconActive : {})
                            }}
                            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        />
                        <div 
                            style={{
                                ...styles.profileDropdown,
                                ...(showProfileDropdown ? styles.profileDropdownVisible : {})
                            }}
                        >
                            <div 
                                style={{
                                    ...styles.dropdownItem,
                                    ':hover': styles.dropdownItemHover
                                }}
                                onClick={() => {
                                    navigate("/myorders");
                                    setShowProfileDropdown(false);
                                }}
                            >
                                <img src={assets.bag_icon} alt="Orders" style={{width: '24px'}} />
                                <p style={{margin: 0}}>My Orders</p>
                            </div>
                            <div 
                                style={{
                                    ...styles.dropdownItem,
                                    ':hover': styles.dropdownItemHover,
                                    marginTop: '10px'
                                }}
                                onClick={() => {
                                    logout();
                                    setShowProfileDropdown(false);
                                }}
                            >
                                <img src={assets.logout_icon} alt="Logout" style={{width: '24px'}} />
                                <p style={{margin: 0}}>Logout</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar