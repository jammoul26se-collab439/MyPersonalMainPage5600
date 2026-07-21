import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar({ muted , setMuted}) {
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
        <button className = {muted? "sound-btn muted" : "sound-btn unmuted"} onClick={() => setMuted(!muted)}>Sound : {muted? "Muted" :"Not Muted"}</button>
        <button className = "language-btn" onClick={playClick}>Languages</button>
    </div>
    </>
 );
}

export default Navbar;