import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrolltop">
      {visible && (
        <a href="#" className="scroll-block">
          <FaChevronUp />
        </a>
      )}
    </div>
  );
}

export default ScrollTop;
