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
    // Hide initially
    if (cursor.current) {
      cursor.current.style.visibility = "hidden";
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor.current) {
        // Show and move the cursor
        cursor.current.style.top = y + "px";
        cursor.current.style.left = x + "px";
        cursor.current.style.visibility = "visible";
      }

      // Reset hide timer
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        if (cursor.current) {
          cursor.current.style.visibility = "hidden";
        }
      }, 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListner("touchmove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div style={{ scrollbarWidth:"none",msOverflowStyle: "none" }} className=" w-full overflow-auto">
      <div
        className="h-4 w-4 rounded-full bg-black border z-200 border-white fixed pointer-events-none transition-all duration-150 ease-out"
        ref={cursor}
      ></div>

      <Navbar />
      <Router />
    </div>
  );
};

export default App;
