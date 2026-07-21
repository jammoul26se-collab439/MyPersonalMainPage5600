import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useEffect , useRef } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Games from "./pages/Games";
import Books from "./pages/Books";
import Articles from "./pages/Articles"
import "./styles/App.css";

function App() {
  const musicRef = useRef(null);
  useEffect( () => {
    const startMusic = () => {
      if(musicRef.current) {
        musicRef.current.play().catch( (error) => {
          console.log(error);
        });
      }
      document.removeEventListener("click" , startMusic);
      document.removeEventListener("touchstart" , startMusic);
      document.removeEventListener("keydown" , startMusic);
    }
      document.addEventListener("click" , startMusic);
      document.addEventListener("touchstart" , startMusic);
      document.addEventListener("keydown" , startMusic);
     }, []);
  return(
    <BrowserRouter>
    <audio ref={musicRef} loop preload="auto">
      <source src="/mainmusic.mpeg" type="audio/mpeg" />
      </audio>
    <Navbar />
    <div className ="page-content">
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/games" element={<Games />} />
      <Route path = "/books" element={<Books />} />
      <Route path = "/articles" element = {<Articles />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;