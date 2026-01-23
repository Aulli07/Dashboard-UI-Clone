import { NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { createPortal } from "react-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import SearchBar from "./SearchBar";


// function InputBar({ setInputText }) {
//   return (
//     <input type="text" placeholder="Search for something" onChange={(e) => setInputText(e.target.value)} />
//   )
// }

// function DisplayList({ transactions, emptySearch }) {
//   // if (transactions.length === 0) {
//   //   return <h2 style={{fontSize: "20px"}}>{emptySearch}</h2>
//   // }
//   return (
//     <div className="search-list-section">
//       {(transactions.length === 0) ? <p style={{fontSize: "18px", fontFamily:"Inter-Medium"}}>{emptySearch}</p> : null}
//       {transactions.map((transaction, index) => (
//         <div className="header-transaction" key={index}>
//           <img src={transaction.image}></img>
//           <span>{transaction.description}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// function filterTransactions(transactions, input) {
//   let foundTransactions = [];
//   input = input.toLowerCase();

//   foundTransactions = transactions.filter(transaction => containsAllTransactions(input, transaction.description))

//   return foundTransactions
// }

// function containsAllTransactions(input, description) {
//   input = input.toLowerCase();
//   description = description.toLowerCase();

//   return [...input].every(letter => description.includes(letter))
// }

// export function SearchBar({ transactions }) {
//   const [inputText, setInputText] = useState("");
//   const foundTransactions = filterTransactions(transactions, inputText)
// // 
//   // let handleEnter = (e) => {
//   //   if (e.key === "Enter") {
//   //     e.preventDefault();
      
//   //     const current = e.target.value;
//   //     setInputText(current);
//   //   }
//   // }

//   return (
//     <div className="full-section">
//       <div style={{position: "relative"}} className="search-section">
//         <img src="/icons/search-icon.png" className="search-icon" alt="search" />

//         <InputBar setInputText={setInputText} />
//       </div>

//       {(inputText !== "") ? <DisplayList transactions={foundTransactions} emptySearch={`No matches for "${inputText}"`} /> : false} 
      
//     </div>
//   )
// }

function SideSlide({ isOpen, onClose, anchorRef, setHeaderText }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} anchorRef={anchorRef}>
      <Sidebar setHeaderText={setHeaderText}/>
    </Modal>
  )
}

function Modal({ isOpen, onClose, anchorRef, children }) {
  const [top, setTop] = useState(0);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const update = () => {
      const rect = anchorRef?.current?.getBoundingClientRect?.();
      if (!rect) return;
      setTop(rect.bottom + 8);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [isOpen, anchorRef]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="side-slide-modal" onClick={() => onClose?.()}>
      <aside
        className="side-slide"
        style={{ top: `${top}px`, left: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </aside>
    </div>,
    document.body
  );
}

const Header = ({ headerText, transactions, imageUrl, setHeaderText }) => {

  const [isSlide, setSlide] = useState(false);
  const menuButtonRef = useRef(null);

  const { isNormal } = useWindowWidth();

  return (
    <div className="main-header">
      <div className="menu-bar">
        <img
          ref={menuButtonRef}
          src="/icons/menu-bar.png"
          className="header-content-bar"
          alt="content_alt"
          onClick={() => setSlide((open) => !open)}
        />
        <SideSlide
          isOpen={isSlide}
          onClose={() => setSlide(false)}
          anchorRef={menuButtonRef}
          setHeaderText={setHeaderText}
        />
      </div>
      <div className="header-text">
        <p>{headerText}</p>
      </div>
      <div className="header-side-content">
        {!isNormal && <SearchBar transactions={transactions} />}
        
        <div className="header-settings">
          <NavLink to="/setting" className={({isActive}) => (isActive ? "sub-link active" : "sub-link")}><img src="/icons/settings_icon.png" alt="settings" /></NavLink>


        </div>
        <div className="header-notification">
          <NavLink to="/setting/preferences" className={({isActive}) => (isActive ? "sub-link active" : "sub-link")}><img src="/icons/notification_icon.png" /></NavLink>
        </div>
        <NavLink to="/setting/profile" className={({isActive}) => (isActive ? "sub-link active" : "sub-link")}><img src={imageUrl} className="header-image" /></NavLink>
        
      </div>
    </div>
  )
}


export default Header;