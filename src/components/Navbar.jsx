import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar() {
    const [open , setOpen] = useState(false);
 return(
    <>
     <nav>
        <div className = "nav-left">
          <button className = "menu-btn" onClick={() => { playClick(); setOpen(true); }}> ≡ </button>
          <h2>It's Javad</h2>
        </div>
        <ul>
            <li><Link to="/" onClick={playClick}>Home</Link></li>
            <li><Link to="/games" onClick={playClick}>Games</Link></li>
            <li><Link to="/books" onClick={playClick}>Books</Link></li>
            <li><Link to="/articles" onClick={playClick}>Articles</Link></li>
        </ul>
    </nav>
    <div className = { open ? "sidebar active" : "sidebar"}>
        <button className = "close-btn" onClick={() => { playClick(); setOpen(false)}}>✕</button>
    </div>
    </>
 );
}

export default Navbar;