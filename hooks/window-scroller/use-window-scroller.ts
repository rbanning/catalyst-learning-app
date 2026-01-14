import { useCallback, useEffect, useState } from "react";

export function useWindowScroller() {
  const [ position, setPosition ] = useState({x: 0, y: 0});

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const scrollTo = useCallback((selector: string) => {
    const ctrl = document.querySelector(selector);
    if (ctrl) {
      window.scrollTo({ top: ctrl.clientTop, left: ctrl.clientLeft, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return { position, scrollTo, scrollToTop  }
}