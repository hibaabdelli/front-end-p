
import React from 'react';
import { FaSearch } from "react-icons/fa";
import './searchBar.css'; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";


function SearchBar (){
    const navigate = useNavigate(); // Initialize navigation function

    const handleAddClick = () => {
        navigate("/CaseInfo"); // Change "/new-page" to your target route
    };



    return ( 
        <div className="search-container">
            <div className='input-wrapper'>
                <FaSearch className='search-icon'/>
                <input placeholder='Type to search...'/>
            </div>
            <button className='Add-button' onClick={handleAddClick} >+</button>
        </div>
    );
}

export default SearchBar;