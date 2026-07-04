import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import AurrumSite from "./pages/AurrumSite";
import CursorOrb from "./components/site/CursorOrb";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      wheelMultiplier: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <CursorOrb />
      <div className="grain" aria-hidden />
      <AurrumSite />
    </div>
  );
}

export default App;
