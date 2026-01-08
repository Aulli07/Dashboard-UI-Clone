import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return {
    isBrowser: width > 950,
    isTablet: width > 800 && width <= 950,
    isMobile: width <= 800
  };
}