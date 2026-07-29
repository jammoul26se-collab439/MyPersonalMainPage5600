import { Link } from "react-router-dom";
import { useState} from "react";
import "../styles/Navbar.css";
import { playClick } from "../util/playClick";
function Navbar({ muted , setMuted , language , setLanguage , playMusic}) {
    const [open , setOpen] = useState(false);
    const [showLanguages , setShowLanguages] = useState(false);
    const [ showAbout , setShowAbout ] = useState(false);
    const [showDonate , setShowDonate] = useState(false);
    const [showPayModes , setShowPayModes] = useState(false);
    const [payMode , setPayMode] = useState("");
    const sidebarText = {
    en: {
        sound: "Sound", muted: "Muted", notMuted: "Not Muted", languages: "Languages" , options: "Options" , about: "About" , news: "News" , buyCoffee : "Buy Me a Coffee" , selectPay: "Select Pay Mode" , close : "Close" , goTo: "Go to" , aboutTitle: "About", ownerTitle: "Owner & Programmer of the Site", musicTitle: "Music Owner"
},
    fr: {
        sound: "Son", muted: "Muet", notMuted: "Activé", languages: "Langues" , options : "Options" , about: "À propos" , news: "Actualités" , buyCoffee: "Offrez-moi un café", selectPay: "Choisir un mode de paiement", close: "Fermer" , goTo: "Aller à" , aboutTitle: "À propos", ownerTitle: "Propriétaire et programmeur du site", musicTitle: "Propriétaire de la musique"
    },  

    

    es: {
        sound: "Sonido", muted: "Silenciado", notMuted: "Activado", languages: "Idiomas" , options: "Opciones" , about: "Acerca de" , news: "Noticias" , buyCoffee: "Invítame a un café", selectPay: "Seleccionar método de pago", close: "Cerrar" , goTo: "Ir a" , aboutTitle: "Acerca de", ownerTitle: "Propietario y programador del sitio", musicTitle: "Propietario de la música"
 },
    ru: {
        sound: "Звук", muted: "Выключен", notMuted: "Включен", languages: "Языки" , options: "Настройки" , about: "О сайте" , news: "Новости" , buyCoffee: "Купить мне кофе", selectPay: "Выберите способ оплаты", close: "Закрыть" , goTo: "Перейти на" , aboutTitle: "О сайте", ownerTitle: "Владелец и разработчик сайта", musicTitle: "Автор музыки"
    },

    ar: {
        sound: "الصوت", muted: "مكتوم", notMuted: "غير مكتوم", languages: "اللغات" , options: "الإعدادات" , about: "حول الموقع" , news: "الأخبار" , buyCoffee: "ادعمني بفنجان قهوة", selectPay: "اختر وسيلة الدفع", close: "إغلاق" , goTo: "الانتقال إلى" , aboutTitle: "حول الموقع", ownerTitle: "مالك ومبرمج الموقع", musicTitle: "صاحب الموسيقى"
    } 
};
    const navText = {
    en: {
        home: "Home", games: "Games", books: "Business", articles: "Articles" , news: "News"

    },
    fr: {
        home: "Accueil", games: "Jeux", books: "Entreprise", articles: "Articles" , news: "Actualités"

    },
    es: {
        home: "Inicio", games: "Juegos", books: "Negocio", articles: "Artículos" , news: "Noticias"

    },
    ru: { home: "Главная", games: "Игры", books: "Бизнес", articles: "Статьи" , news: "Новости"

    },
    ar: {
        home: "الرئيسية", games: "الألعاب", books: "الأعمال", articles: "المقالات" , news: "الأخبار"
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
        <button className = "close-btn" onClick={() => { playMusic();  playClick(); setShowLanguages(false); setOpen(false); setPayMode();}}>✕</button>
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
        <button className="news-btn" onClick={ () => {playMusic(); playClick(); setShowLanguages(false); window.location.href="/News.html"}}>{sidebarText[language].news}</button>     
       </div>     
       <div className = "language-container">
        <button className="about-btn" onClick={ () => {  playMusic(); playClick(); setShowLanguages(false); setShowAbout(true);  }}> {sidebarText[language].about} </button>
    </div>
    <div className = "language-container">
        <button className="coffee-btn" onClick={() => {
            playMusic(); playClick(); setShowLanguages(false); setShowDonate(!showDonate);
        }}>{sidebarText[language].buyCoffee} </button>
    {
      showDonate && (
    <div className="about-overlay">
        <div className="about-modal">
            <h2>{sidebarText[language].buyCoffee} </h2>
            <div className="pay-select-container">
                <button
                    className="pay-select-btn"
                    onClick={() => {
                        playMusic();
                        playClick();
                        setShowPayModes(!showPayModes);
                    }}
                >
                    {sidebarText[language].selectPay}
                </button>
                {showPayModes && (
                    <div className="pay-menu">
                        <button onClick={() => {
                            playMusic();
                            playClick();
                            setPayMode("Whish Money");
                            setShowPayModes(false);
                        }}>
                            Whish Money
                        </button>
                        <button onClick={() => {
                            playMusic();
                            playClick();
                            setPayMode("BoB finance");
                            setShowPayModes(false);
                        }}>
                            BoB finance
                        </button>
                        <button onClick={() => {
                            playMusic();
                            playClick();
                            setPayMode("OMT Pay");
                            setShowPayModes(false);
                        }}>
                            OMT Pay
                        </button>
                    </div>
                )}
            </div>
            {payMode !== "" && (
                <>
                    <button className="go-pay-btn" onClick={() => {
                        playMusic();
                        playClick();
                        if(payMode === "Whish Money")
                            window.open("https://whish.money/" , "_blank");
                        else if(payMode === "BoB finance") 
                            window.open("https://bob-finance.com/" , "_blank");
                        else if(payMode === "OMT Pay")
                            window.open("https://www.omt.com.lb/" , "_blank");
                    }}> {`${sidebarText[language].goTo} ${payMode} Page`} </button>
                    <p className="phone-number">
                        My Phone Number:
                        <br />
                        +961 76 125 354
                    </p>
                </>
            )}
            <button
                className="close-about-btn"
                onClick={() => {
                    playMusic(); playClick(); setShowDonate(false); setShowPayModes(false); setPayMode("");
                }}
            >
                {sidebarText[language].close}
            </button>
        </div>
    </div>
)} 

</div>
    {
        showAbout && ( <div className="about-overlay"> <div className="about-modal">
                          <h2>{sidebarText[language].aboutTitle}</h2>
                          <p> <strong>{sidebarText[language].ownerTitle}</strong><br /> Jawad Jammoul :) </p>
                          <p> <strong>{sidebarText[language].musicTitle}</strong><br />
                           <a href="https://youtu.be/_ZKliUdu4T0?si=Z-L72HqcNE99SGS8" target="_blank" rel="noreferrer">Riyandi Kusuma</a> </p>
                           <button className="close-about-btn" onClick={ () => { playMusic(); playClick(); setShowAbout(false); }}>{sidebarText[language].close}</button>
                           </div> 
                              </div>
                          )}
                          </div>
    </>
 );
}
export default Navbar;