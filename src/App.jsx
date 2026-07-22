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
  return(
    <BrowserRouter>
    <audio ref={musicRef} loop preload="auto">
      <source src="/mainmusic.mpeg" type="audio/mpeg" />
      </audio>
    <Navbar muted={muted} setMuted={setMuted} language={language} setLanguage={setLanguage} />
    <div className ="page-content">
    <Routes>
      <Route path = "/" element={<Home language={language}/>}/>
      <Route path = "/games" element={<Games language={language}/>} />
      <Route path = "/books" element={<Books language={language}/>} />
      <Route path = "/articles" element = {<Articles language={language} />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;