import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Navigation({ links }) {
  const location = useLocation();
  const navRefs = useRef([]);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0
  })

  useEffect(() => {
    const activeIndex = navRefs.current.findIndex((el) => el?.querySelector(".active"));
    const activeEl = navRefs.current[activeIndex];
    if (activeEl) {
      setIndicator({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth
      })
    }
  }, [location])


  return (
    <div style={{marginTop: "10px"}}>
      <div className="settings-navigation-section">
        <div className="navigations" style={{position: "relative"}}>
          {links.map((link, index) => (
            <span
              key={link.to}
              ref={(el) => (navRefs.current[index] = el)}
              style={{ paddingBottom: "10px", width: "max-content"}}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "sub-link active" : "sub-link"
                }
              >
                {link.label}
              </NavLink>
            </span>
          ))}

          <span
            className="navigations-mainline"
            style={{
              position: "absolute",
              bottom: 0,
              height: "3px",
              background: "#007bff",
              transition: "left 0.3s ease, width 0.3s ease",
              left: indicator.left,
              width: indicator.width,
            }}
          />
        </div>
      </div> 
      <p className="navigations-borderline"></p>
    </div>
  )
}

export default Navigation;