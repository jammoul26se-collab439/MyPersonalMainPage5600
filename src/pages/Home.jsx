import "../styles/Home.css";
import { playClick } from "../util/playClick";

function Home({ language }) {
  const homeText = {
    en: {
        about: "About Javad",
        description: `Hi, I'm Jawad Jammoul.
I'm a Computer Science student from Lebanon with a passion for Web Development and programming.
I enjoy building real-world projects, learning new technologies, improving my skills, and sharing my knowledge with others.`,
        follow: "Follow Me!",
        youtube: "YouTube",
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        whatsapp: "WhatsApp Channel"
    },

    fr: {
        about: "À propos de Javad",
        description: `Bonjour, je suis Jawad Jammoul.
Je suis étudiant en informatique au Liban, passionné par le développement Web et la programmation.
J'aime créer des projets réels, apprendre de nouvelles technologies, améliorer mes compétences et partager mes connaissances.`,
        follow: "Suivez-moi !",
        youtube: "YouTube",
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        whatsapp: "Chaîne WhatsApp"
    },

    es: {
        about: "Sobre Javad",
        description: `Hola, soy Jawad Jammoul.
Soy estudiante de informática en el Líbano y me apasiona el desarrollo web y la programación.
Disfruto creando proyectos reales, aprendiendo nuevas tecnologías, mejorando mis habilidades y compartiendo mis conocimientos.`,
        follow: "¡Sígueme!",
        youtube: "YouTube",
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        whatsapp: "Canal de WhatsApp"
    },

    ru: {
        about: "О Джаваде",
        description: `Привет! Меня зовут Джавад Джаммуль.
Я студент факультета компьютерных наук из Ливана, увлекаюсь веб-разработкой и программированием.
Мне нравится создавать реальные проекты, изучать новые технологии, совершенствовать свои навыки и делиться знаниями.`,
        follow: "Подписывайтесь!",
        youtube: "YouTube",
        facebook: "Facebook",
        instagram: "Instagram",
        tiktok: "TikTok",
        whatsapp: "Канал WhatsApp"
    },

    ar: {
        about: "نبذة عن جواد",
        description: `مرحبًا، أنا جواد جمول.
أنا طالب علوم حاسوب من لبنان، شغوف بتطوير الويب والبرمجة.
أستمتع ببناء المشاريع الواقعية، وتعلّم التقنيات الجديدة، وتطوير مهاراتي، ومشاركة معرفتي مع الآخرين.`,
        follow: "تابعني!",
        youtube: "يوتيوب",
        facebook: "فيسبوك",
        instagram: "إنستغرام",
        tiktok: "تيك توك",
        whatsapp: "قناة واتساب"
    }
};
    return(
      <div className="about">
         <div className="about"> 
   <h2 className="section-title">{homeText[language].about}</h2>
   <pre className="game-description">{homeText[language].description}</pre>
   <hr />
   <h2 className = "section-title">{homeText[language].follow}</h2>
   <div className="social-links">
     <a href="https://youtube.com/@itsjawad-j4x?si=9R0ggTnSpcKa9gGI" onClick={ (e) => {
      e.preventDefault();
      playClick();
      setTimeout(() => {
        window.location.href="https://youtube.com/@itsjawad-j4x?si=9R0ggTnSpcKa9gGI";
      }, 150);
      }}>{homeText[language].youtube}</a> 
     <a href="https://www.facebook.com/share/1UhfgXzhps/" onClick={playClick}>{homeText[language].facebook}</a> 
     <a href="https://www.instagram.com/itsjavad5320?igsh=MXB5cnhmemRyZGZzYQ==" onClick={playClick}>{homeText[language].instagram}</a> 
     <a href = "https://www.tiktok.com/@itsjavad135286?_r=1&_t=ZS-98CDjISN7Qa" onClick={playClick}>{homeText[language].tiktok}</a> 
     <a href = "https://whatsapp.com/channel/0029VbD8tq4B4hdYQMrKZ83G" onClick={playClick}>{homeText[language].whatsapp}</a>
     </div>
   </div>
      </div>
  
   
    );
}
export default Home;