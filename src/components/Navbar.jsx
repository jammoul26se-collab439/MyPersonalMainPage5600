import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar({ muted , setMuted}) {
    const [open , setOpen] = useState(false);
    const [showLanguages , setShowLanguages] = useState(false);
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
        <button className = {muted? "sound-btn muted" : "sound-btn unmuted"} onClick={() => {  playClick(); setMuted(!muted); } } >Sound : {muted? "Muted" :"Not Muted"}</button>
       <div className="language-container">
        <button className="language-btn" onClick={() => {
            playClick();
            setShowLanguages(!showLanguages);
        }}>Languages</button>
        {showLanguages && (<div className="language-menu">
            <button>English</button>
            <button>Français</button>
            <button>Español</button>
            <button>Русский</button>
            <button>اللغة العربية</button>
            </div>
            )}
       </div>
    </div>
    </>
 );
}

export default Navbar;