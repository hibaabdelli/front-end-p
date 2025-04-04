import "./home2.css";
import bgImage from "./assets/home2.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar"; 
import DataShow from "./DataShow"; // Import the DataShow component
import CaseInfo from "./CaseInfo"; // Import the new page component

function Home2() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={
                    <div className="home" style={{ 
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover", 
                        backgroundPosition: "center",
                        height: "100vh", 
                        width: "100%" 
                    }}>
                        <div className="search-bar-container">
                            <SearchBar />
                            <DataShow />
                        </div>
                    </div>
                }/>
                <Route path="/CaseInfo" element={<CaseInfo />} />
            </Routes>
        </Router>
    );
}

export default Home2;
