import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useEffect , useRef , useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Games from "./pages/Games";
import Books from "./pages/Books";
import Articles from "./pages/Articles"
import "./styles/App.css";
import { setClickMuted } from "./util/playClick";

function App() {
  const musicRef = useRef(null);
  const playMusic = () => {
    if(musicRef.current) {
      musicRef.current.play().catch( () => {});
    }
  };
  const [muted , setMuted] = useState(false);
  const [language , setLanguage] = useState("en");
  useEffect(() => {
  const startMusic = () => {
    if (musicRef.current) {
      musicRef.current.play().catch((err) => console.log(err));
    }
    window.removeEventListener("touchstart", startMusic);
    window.removeEventListener("pointerdown", startMusic);
    window.removeEventListener("click", startMusic);
    window.removeEventListener("keydown", startMusic);
  };
  window.addEventListener("touchstart", startMusic, { once: true });
  window.addEventListener("pointerdown", startMusic, { once: true });
  window.addEventListener("click", startMusic, { once: true });
  window.addEventListener("keydown", startMusic, { once: true });
  return () => {
    window.removeEventListener("touchstart", startMusic);
    window.removeEventListener("pointerdown", startMusic);
    window.removeEventListener("click", startMusic);
    window.removeEventListener("keydown", startMusic);
  };
}, []);
     useEffect( () => {
      if(musicRef.current) {
        musicRef.current.muted = muted;
      }
      setClickMuted(muted);
     } , [muted]);

    useEffect(() => {
      if(window.innerWidth<=768 && !localStorage.getItem("mobileAlertShown")) {
        alert(
          "For the best experience, the laptop version is recommended for better layout and controls.\n\nTap any button to start the music."
        );
        localStorage.setItem("mobileAlertShown" , "true");
      }
    } , []);
     return(
    <BrowserRouter>
    <audio ref={musicRef} loop preload="auto">
      <source src="/mainmusic.mpeg" type="audio/mpeg" />
      </audio>
    <Navbar muted={muted} setMuted={setMuted} language={language} setLanguage={setLanguage} playMusic={playMusic} />
    <div className ="page-content">
    <Routes>
      <Route path = "/" element={<Home language={language} playMusic={playMusic}/>}/>
      <Route path = "/games" element={<Games language={language} playMusic={playMusic}/>} />
      <Route path = "/books" element={<Books language={language} playMusic={playMusic}/>} />
      <Route path = "/articles" element = {<Articles language={language} playMusic={playMusic}/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;