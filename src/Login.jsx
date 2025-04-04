
import user from './assets/user.png';
import password from './assets/password.png';
import './login.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom"; 

function Login (){
    const location = useLocation();  // Correct usage
    const navigate = useNavigate(); 
    const [action, setAction] = useState('Login');

    useEffect(() => {
        if (location.state?.action) {
            setAction(location.state.action);
        }
    }, [location.state]);

    return(
        <div style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            height: "100vh",
            width: "100vw",
            margin: "0",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(#F7A8C4,#E53888)",
            position: "fixed",
            top: "0",
            left: "0"
        }}>
            

           <div className="back-home-container">
                    <button className="back-home-btn" onClick={() => navigate("/")}> Back </button>
            </div>
        <div className='container'>

            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src= {user} alt=""/>
                    <input type = "text" placeholder='Name' />
                </div>
                <div className='input'>
                    <img src={password} alt=""/>
                    <input type = "password" placeholder='Password'/>
                </div>
            </div>
            <div className="forgot-password">Lost password? <span>Click Here!</span> </div>
            <div className='submit-container'>
                    {action === "Login" && (
                        <button 
                            className="submit"
                            onClick={() => { /* Handle Login click */ }}
                        >
                            Login
                        </button>
                    )}
                    {action === "Sign Up" && (
                        <button 
                            className="submit"
                            onClick={() => { /* Handle Sign Up click */ }}
                        >
                            Sign Up
                        </button>
                    )}
                </div>
        </div>
        
      </div>  
      
    );
}

export default Login;
