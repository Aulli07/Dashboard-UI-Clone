import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function InputBar({ setInputText }) {
  return (
    <input type="text" placeholder="Search for something" onChange={(e) => setInputText(e.target.value)} />
  )
}

function DisplayList({ transactions, emptySearch }) {
  // if (transactions.length === 0) {
  //   return <h2 style={{fontSize: "20px"}}>{emptySearch}</h2>
  // }
  return (
    <div className="search-list-section">
      {(transactions.length === 0) ? <p style={{fontSize: "18px", fontFamily:"Inter-Medium"}}>{emptySearch}</p> : null}
      {transactions.map((transaction, index) => (
        <div className="header-transaction" key={index}>
          <img src={transaction.image}></img>
          <span>{transaction.description}</span>
        </div>
      ))}
    </div>
  )
}

function filterTransactions(transactions, input) {
  let foundTransactions = [];
  input = input.toLowerCase();

  foundTransactions = transactions.filter(transaction => containsAllTransactions(input, transaction.description))

  return foundTransactions
}

function containsAllTransactions(input, description) {
  input = input.toLowerCase();
  description = description.toLowerCase();

  return [...input].every(letter => description.includes(letter))
}

function SearchBar({ transactions }) {
  const [inputText, setInputText] = useState("");
  const foundTransactions = filterTransactions(transactions, inputText)
// 
  // let handleEnter = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
      
  //     const current = e.target.value;
  //     setInputText(current);
  //   }
  // }

  return (
    <div className="full-section">
      <div style={{position: "relative"}}className="search-section">
        <img src="/icons/search-icon.png" className="search-icon" alt="search" />

        <InputBar setInputText={setInputText} />
      </div>

      {(inputText !== "") ? <DisplayList transactions={foundTransactions} emptySearch={`No matches for "${inputText}"`} /> : false} 
      
    </div>
  )
}

const Header = ({ headerText, transactions, imageUrl }) => {
  return (
    <div className="main-header">
      <div className="header-text">
        <p>{headerText}</p>
      </div>
      <div className="header-side-content">
        <SearchBar transactions={transactions} />
        
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