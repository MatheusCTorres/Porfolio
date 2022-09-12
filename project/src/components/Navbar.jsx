import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReoderIcon from "@material-ui/icons/Reorder"

function Navbar() {

    const [expandNavBar, setExpandNavBar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavBar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavBar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavBar((prev) => !prev)}>
                    <ReoderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    );
}

export default Navbar