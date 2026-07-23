import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar({ muted , setMuted , language , setLanguage , playMusic}) {
    const [open , setOpen] = useState(false);
    const [showLanguages , setShowLanguages] = useState(false);
    const sidebarText = {
    en: {
        sound: "Sound", muted: "Muted", notMuted: "Not Muted", languages: "Languages"
    },

    fr: {
        sound: "Son", muted: "Muet", notMuted: "Activé", languages: "Langues"
    },

    es: {
        sound: "Sonido", muted: "Silenciado", notMuted: "Activado", languages: "Idiomas"
    },

    ru: {
        sound: "Звук", muted: "Выключен", notMuted: "Включен", languages: "Языки"
    },

    ar: {
        sound: "الصوت", muted: "مكتوم", notMuted: "غير مكتوم", languages: "اللغات"
    }
};
    const navText = {
    en: {
        home: "Home", games: "Games", books: "Books", articles: "Articles"
    },
    fr: {
        home: "Accueil", games: "Jeux", books: "Livres", articles: "Articles"
    },
    es: {
        home: "Inicio", games: "Juegos", books: "Libros", articles: "Artículos"
    },
    ru: { home: "Главная", games: "Игры", books: "Книги", articles: "Статьи"
    },
    ar: {
        home: "الرئيسية", games: "الألعاب", books: "الكتب", articles: "المقالات"
    }
};
 return(
    <>
     <nav>
        <div className = "nav-left">
          <button className="menu-btn" onPointerDown={() => { playMusic(); playClick(); }} onClick={() => { setOpen(true)}}> ≡ </button>
          <h2>It's Javad</h2>
        </div>
        <ul>
            <li><Link to="/" onClick={() => {playMusic(); playClick();}}>{navText[language].home}</Link></li>
            <li><Link to="/games" onClick={() => {playMusic(); playClick();}}>{navText[language].games}</Link></li>
            <li><Link to="/books" onClick={() => {playMusic(); playClick();}}>{navText[language].books}</Link></li>
            <li><Link to="/articles" onClick={() => {playMusic(); playClick();}}>{navText[language].articles}</Link></li>
        </ul>
    </nav>
    <div className = { open ? "sidebar active" : "sidebar"}>
        <button className = "close-btn" onClick={() => { playMusic();  playClick(); setOpen(false);}}>✕</button>
        <div className="language-container">
             <button className = {muted? "sound-btn muted" : "sound-btn unmuted"} onClick={() => {playMusic(); playClick(); setMuted(!muted); } } >{sidebarText[language].sound} : {muted? sidebarText[language].muted : sidebarText[language].notMuted}</button>
        </div>
       <div className="language-container">
        <button className="language-btn" onClick={() => {
            playMusic();
            playClick();
            setShowLanguages(!showLanguages);
        }}>{sidebarText[language].languages}</button>
        {showLanguages && (<div className="language-menu">
            <button onClick={() =>{playMusic(); playClick(); setLanguage("en"); setShowLanguages(false); }}>English</button>
            <button onClick={() =>{playMusic(); playClick(); setLanguage("fr"); setShowLanguages(false); }}>Français</button>
            <button onClick={() =>{playMusic(); playClick(); setLanguage("es"); setShowLanguages(false); }} >Español</button>
            <button onClick={() =>{playMusic(); playClick(); setLanguage("ru"); setShowLanguages(false); }}>Русский</button>
            <button onClick={() =>{playMusic(); playClick(); setLanguage("ar"); setShowLanguages(false); }}>اللغة العربية</button>
            </div>
            )}
       </div>
    </div>
    </>
 );
}

export default Navbar;