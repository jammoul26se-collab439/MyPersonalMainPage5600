import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar({ muted , setMuted , language , setLanguage , playMusic}) {
    const [open , setOpen] = useState(false);
    const [showLanguages , setShowLanguages] = useState(false);
    const [ showAbout , setShowAbout ] = useState(false);
    const sidebarText = {
    en: {
        sound: "Sound", muted: "Muted", notMuted: "Not Muted", languages: "Languages" , options: "Options" , about: "About"
    },

    fr: {
        sound: "Son", muted: "Muet", notMuted: "Activé", languages: "Langues" , options : "Options" , about: "À propos"

    },

    es: {
        sound: "Sonido", muted: "Silenciado", notMuted: "Activado", languages: "Idiomas" , options: "Opciones" , about: "Acerca de"

    },

    ru: {
        sound: "Звук", muted: "Выключен", notMuted: "Включен", languages: "Языки" , options: "Настройки" , about: "О сайте"


    },

    ar: {
        sound: "الصوت", muted: "مكتوم", notMuted: "غير مكتوم", languages: "اللغات" , options: "الإعدادات" , about: "حول الموقع"
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
            <li><Link to="/" onClick={() => {playMusic(); playClick(); setShowLanguages(false); setOpen(false); }}>{navText[language].home}</Link></li>
            <li><Link to="/games" onClick={() => {playMusic(); playClick(); setShowLanguages(false); setOpen(false); }}>{navText[language].games}</Link></li>
            <li><Link to="/books" onClick={() => {playMusic(); playClick(); setShowLanguages(false); setOpen(false); }}>{navText[language].books}</Link></li>
            <li><Link to="/articles" onClick={() => {playMusic(); playClick(); setShowLanguages(false); setOpen(false); }}>{navText[language].articles}</Link></li>
        </ul>
    </nav>
    <div className = { open ? "sidebar active" : "sidebar"}>
        <button className = "close-btn" onClick={() => { playMusic();  playClick(); setShowLanguages(false); setOpen(false);}}>✕</button>
        <h3 className = "sidebar-title">{sidebarText[language].options}</h3>
        <div className="language-container">
             <button className = {muted? "sound-btn muted" : "sound-btn unmuted"} onClick={() => {playMusic(); playClick(); setShowLanguages(false);  setMuted(!muted); } } >{sidebarText[language].sound} : {muted? sidebarText[language].muted : sidebarText[language].notMuted}</button>
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
       <div className = "language-container">
        <button className="about-btn" onClick={ () => {  playMusic(); playClick(); setShowLanguages(false); setShowAbout(true);  }}> {sidebarText[language].about} </button>
    </div>
    {
        showAbout && ( <div className="about-overlay"> <div className="about-modal">
                          <h2>About</h2>
                          <p> <strong>Owner & Programmer of the Site:</strong><br /> Jawad Jammoul :) </p>
                          <p> <strong>Music Owner:</strong><br />
                           <a href="https://youtu.be/_ZKliUdu4T0?si=Z-L72HqcNE99SGS8" target="_blank" rel="noreferrer">Riyandi Kusuma</a> </p>
                           <button className="close-about-btn" onClick={ () => { playMusic(); playClick(); setShowAbout(false); }}> Close </button>
                           </div> 
                              </div>
                          )}
                          </div>
    </>
 );
}

export default Navbar;