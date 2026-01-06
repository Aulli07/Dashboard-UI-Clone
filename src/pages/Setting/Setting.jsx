import { Outlet} from "react-router-dom";
import Navigation from "../../components/Navigation";

const Setting = () => {
  const links = [
    { label: "Edit Profile", to: "/setting/profile" },
    { label: "Preferences", to: "/setting/preferences" },
    { label: "Security", to: "/setting/security" },
  ];

  return (
    <div className="settings-container">
      <div className="settings-main-section">
        <Navigation links={links} location={location}/>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Setting;


// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { useRef, useState, useEffect } from "react";

// const Setting = () => {
//   const location = useLocation();
//   const navRefs = useRef([]);
//   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

//   const links = [
//     { label: "Edit Profile", to: "/setting/profile" },
//     { label: "Preferences", to: "/setting/preferences" },
//     { label: "Security", to: "/setting/security" },
//   ];

//   // Move underline when route changes
//   useEffect(() => {
//     const activeIndex = navRefs.current.findIndex(
//       (el) => el?.querySelector(".active")
//     );

//     const activeEl = navRefs.current[activeIndex];
//     if (activeEl) {
//       setIndicator({
//         left: activeEl.offsetLeft,
//         width: activeEl.offsetWidth,
//       });
//     }
//   }, [location]);

//   return (
//     <div className="settings-container">
//       <div className="settings-main-section">
//         <div className="settings-navigation-section">
//           <div className="navigations" style={{ position: "relative" }}>
//             {links.map((link, index) => (
//               <span
//                 key={link.to}
//                 ref={(el) => (navRefs.current[index] = el)}
//                 style={{ paddingBottom: "10px" }}
//               >
//                 <NavLink
//                   to={link.to}
//                   className={({ isActive }) =>
//                     isActive ? "sub-link active" : "sub-link"
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               </span>
//             ))}

//             {/* Sliding underline */}
//             <span
//               className="navigations-borderline"
//               style={{
//                 position: "absolute",



// import { NavLink, Outlet } from "react-router-dom";

// const Setting = () => {
//   return (
//     <div className="settings-container">
//       <div className="settings-main-section">
//         <div className="settings-navigation-section">
//           <div className="navigations">
//             <span className="nav-active">
//               <NavLink
//                 to="/setting/profile"
//                 className={({ isActive }) =>
//                   isActive ? "sub-link active" : "sub-link"
//                 }
//               >
//                 Edit Profile
//               </NavLink>
//             </span>
//             <span>
//               <NavLink
//                 to="/setting/preferences"
//                 className={({ isActive }) =>
//                   isActive ? "sub-link active nav-active" : "sub-link"
//                 }
//               >
//                 Preferences
//               </NavLink>
//             </span>
//             <span>
//               <NavLink
//                 to="/setting/security"
//                 className={({ isActive }) =>
//                   isActive ? "sub-link active nav-active" : "sub-link"
//                 }
//               >
//                 Security
//               </NavLink>
//             </span>
//           </div>
//           <div className="navigations-borderline"></div>
//           <div
//             className="navigations-mainline"
//             style={{
//               left: indicatorStyle.left,
//               width: indicatorStyle.width,
//             }}
//           ></div>
//         </div>
//         <div>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;
