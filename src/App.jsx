import Router from "./components/Router";
import Navbar from "./components/Navbar";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const cursor = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const cursorEl = cursor.current;
    if (!cursorEl) return;

    // Raw coords updated synchronously on every event
    let rawX = -100;
    let rawY = -100;
    let rafId = null;
    let visible = false;

    const show = () => {
      if (!visible) {
        cursorEl.style.opacity = "1";
        visible = true;
      }
    };

    const hide = () => {
      if (visible) {
        cursorEl.style.opacity = "0";
        visible = false;
      }
    };

    // rAF loop — runs every frame, applies the latest coords
    const loop = () => {
      const size = 16; // matches h-4 w-4 (1rem = 16px)
      cursorEl.style.transform = `translate3d(${rawX - size / 2}px, ${rawY - size / 2}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onMouseMove = (e) => {
      rawX = e.clientX;
      rawY = e.clientY;
      show();
    };

    const onTouchStart = (e) => {
      // Use changedTouches[0] — most accurate on start
      rawX = e.changedTouches[0].clientX;
      rawY = e.changedTouches[0].clientY;
      show();
    };

    const onTouchMove = (e) => {
      rawX = e.touches[0].clientX;
      rawY = e.touches[0].clientY;
    };

    const onTouchEnd = () => hide();
    const onMouseLeave = () => hide();
    const onMouseEnter = () => show();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchcancel", onTouchEnd);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <div
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className="w-full overflow-auto"
    >
      <div
        ref={cursor}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black border border-white pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 ease-in-out opacity-0"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      <Navbar />
      <Router />
    </div>
  );
};

export default App;