import Router from "./components/Router";
import Navbar from "./components/Navbar";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const cursor = useRef(null);
  const timeoutId = useRef(null);
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({
      top : 0,
      left : 0, 
      behavior : "smooth"
    })
  
  }, [pathname])
  
  

  useEffect(() => {
  if (cursor.current) {
    cursor.current.style.visibility = "hidden";
  }

  const handlePointerMove = (e) => {
    if (!cursor.current) return;

    const x = e.clientX;
    const y = e.clientY;

    cursor.current.style.top = y + "px";
    cursor.current.style.left = x + "px";
    cursor.current.style.visibility = "visible";

    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      cursor.current.style.visibility = "hidden";
    }, 2000);
  };

  const handlePointerDown = () => {
    if (!cursor.current) return;
    cursor.current.style.transform = "translate(-50%, -50%) scale(3)";
  };

  const handlePointerUp = () => {
    if (!cursor.current) return;
    cursor.current.style.transform = "translate(-50%, -50%) scale(1)";
  };

  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerdown", handlePointerDown);
  document.addEventListener("pointerup", handlePointerUp);

  return () => {
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerdown", handlePointerDown);
    document.removeEventListener("pointerup", handlePointerUp);
    clearTimeout(timeoutId.current);
  };
}, []);

  return (
    <div style={{ scrollbarWidth:"none",msOverflowStyle: "none" }} className=" w-full overflow-auto">
      <div
  className="h-4 w-4 rounded-full bg-black border z-200 border-white fixed pointer-events-none transition-all duration-150 ease-out"
  style={{ transform: "translate(-50%, -50%) scale(1)" }}
  ref={cursor}
/>

      <Navbar />
      <Router />
    </div>
  );
};

export default App;
