import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CaseInfo.css'; 
function CaseInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  //const userData = location.state?.userData || {}; // Get user data or set empty object




  const [userData, setUserData] = React.useState(location.state?.userData || {});

  const handleInputChange = (field, value) => {
     setUserData(prevState => ({
      ...prevState,
    [field]: value
     }));
  };


  return (
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
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="container">
        <div className="header">
          <div className="text">User Information</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" value={userData.name || ''} onChange={(e) => handleInputChange('name', e.target.value)} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" value={userData.email || ''} onChange={(e) => handleInputChange('email', e.target.value)} />
          </div>

          <div className="input-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" value={userData.phone || ''} onChange={(e) => handleInputChange('phone', e.target.value)} />
          </div>
          <div className='submit-container'>
             <button className='sub-btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseInfo;
