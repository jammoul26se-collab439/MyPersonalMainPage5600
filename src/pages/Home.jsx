import "../styles/Home.css";
import { playClick } from "../util/playClick";

function Home() {
    return(
      <div className="about">
         <div className="about"> 
   <h2 className="section-title">About Javad</h2>
   <pre className="game-description">Hi , I'm Jawad Jammoul
        I'm a Computer Science student from lebanon with a passion for Web Development and programming
        I enjoy building real-world projects , learning new technologies , imporving my skills ,
        and sharing my knowledge with others</pre>
   <hr />
   <h2 className = "section-title">Follow Me!</h2>
   <div className="social-links">
     <a href="https://youtube.com/@itsjawad-j4x?si=9R0ggTnSpcKa9gGI" onClick={ (e) => {
      e.preventDefault();
      playClick();
      setTimeout(() => {
        window.location.href="https://youtube.com/@itsjawad-j4x?si=9R0ggTnSpcKa9gGI";
      }, 150);
      }}>YouTube</a> 
     <a href="https://www.facebook.com/share/1UhfgXzhps/" onClick={playClick}>Facebook</a> 
     <a href="https://www.instagram.com/itsjavad5320?igsh=MXB5cnhmemRyZGZzYQ==" onClick={playClick}>Instagram</a> 
     <a href = "https://www.tiktok.com/@itsjavad135286?_r=1&_t=ZS-98CDjISN7Qa" onClick={playClick}>TikTok</a> 
     <a href = "https://whatsapp.com/channel/0029VbD8tq4B4hdYQMrKZ83G" onClick={playClick}>WhatsApp Channel</a>
     </div>
   </div>
      </div>
  
   
    );
}
export default Home;