"use strict";
import { createPortal } from "react-dom";
import { useState } from "react";


function Insights() {
  return (
    <div>hey</div>
  )
}
// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return createPortal(
//     <div
//       style={{
//         position: "fixed",
//         top: "10px",
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "8px",
//         }}
//       >
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>,
//     document.body
//   );
// }

// function Practice() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2>Modal Content</h2>
//         <p>This content is rendered outside the App component!</p>
//       </Modal>
//     </div>
//   );
// }
// let margin = 20;
// function handleClick() {
//   alert("Typing")
// }

// return (
//   <input type="text" style={{margin: (margin < 20) ? "15px" : "25px"}} placeholder="Enter a value" onClick={handleClick} />
// )

// function ProfileContainer(props) {
//   const { name, course, school } = props.profile;

//   return (
//     <div className="personal-info">
//       <p className="personal-info-text">Personal Info</p>
//       <div className="personal-info-card">
//         <p>Name: {name}</p>
//         <p>Course of Study: {course}</p>
//         <p className="grid-col-span">School: {school}</p>
//       </div>
//     </div>
//   )
// }

// function Practice() {
//   const profileDetails = [
//     {name: "Alwell", course: "Software Engineering", school: "School of Computing"},
//     {name: "Olly", course: "Medicine", school: "School of Basic Medical Sciences"}
//   ];

//   return (
//     <>
//       {profileDetails.map((profile) => <ProfileContainer profile={profile} />)}
//     </>
//   )

// }

// Create a “Team Members” page showing multiple <ProfileCard /> components via props.

// Build a <Quote /> component that displays quote text and author using props.

// "use strict"

// function Practice() {
//   let name = "Alwell";
//   let course = "Software Engineering";
//   let school = "School of Computing";

//   return (
//     <div className="personal-info">
//       <p className="personal-info-text">Personal Info</p>
//       <div className="personal-info-card">
//         <p>Name: {name}</p>
//         <p>Course of Study: {course}</p>
//         <p className="grid-col-span">School: {school}</p>
//       </div>
//     </div>
//   )
// }

// "use Strict";
// import { useState } from "react";

// function Practice() {
//   let errand = <span>text</span>;

//   return (
//     <>
//       <div>Daddy:</div>
//       <Son>
//         <div>
//           <p>Now way</p>
//           <span>Hello, Son</span>
//         </div>
//       </Son>
//     </>
//   )
// }

// function Son(props) {
//   return(
//     <div style={{display: "flex", gap: "15px"}}>
//       <p>Son:</p>
//       {props.children}
//     </div>
//   )
// }
// function Practice() {
//   const myStyles = {
//     "margin": "20px",
//     "borderRadius": "10px",
//     "padding": "10px 12px",
//     "outline": "none",
//     "border": "1px solid grey",
//     "fontSize": "15px",
//     "display": "block"

//   }

//   const names = ['alwell', 'Toyin', 'Bola', 'Koyin'];
//   const [ ans, setAns ] = useState("");

//   let getName = () => {
//     let answer = prompt("What is your name ", '');
//     return answer;
//   }

//   let checkIfRegistered = (name) => {
//     if (names.includes(name)) {
//       return name;
//     }
//   }

//   let handleLogin = () => {
//     let name = getName();
//     let registeredName = checkIfRegistered(name);

//     if (registeredName) {
//       setAns(`You are registered, ${name}`);
//     } else {
//       setAns(`You are not registered, ${name}`);
//     }
//   }

//   return (
//     <>
//       <button onClick={handleLogin}>Login</button>
//       <p>{ans}</p>
//     </>
//   )
// }

// function getPow(x, n){
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let valueX = prompt("x?", '');
// let valueN = prompt("n?", '');

// if (valueN <= 0) {
//   alert(`Power ${valueN} is not supported,
//     please enter an integer number greater than zero`);
// } else {
//   alert( getPow(valueX, valueN) );
// }

// }

//   function ListGroup(props) {
//     let cities = ['Tokyo', 'Berlin', 'Ohio'];

//     // if (cities.length == 0) {
//     //   return <p>No item found</p>
//     // }
//     return (
//       <>
//         {/* {(cities.length == 0) ? "No Item found" : null} */}
//         {(cities.length == 0) && "No Item found"}
//         {cities.map((city, index) =>
//            <p key={city}
//               onClick={(event) => console.log(event)}>
//
//             This is {city}. It is from { props.continent[index] }   with a {props.status} status</p>)}
//       </>
//     )
//   }

//   return (
//     <>
//       <ListGroup continent={["Asia", "Europe", "North America"]} status="top" />
//       {names.map(name => <p key={name}>{name}</p>)}
//       <button onClick={ans = showPromptQuestion}>Login</button>

//       {/* <p>{(showPromptQuestion in names) ? "Registered" : "Not registered"}</p> */}
//     </>
//   )

// }

// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// function InputBar({ setInputText, enterFunction }) {
//   return (
//     <input type="text" placeholder="Search for something" onChange={(e) => setInputText(e.target.value)} onKeyDown={enterFunction}/>
//   )
// }

// function DisplayInputText({ finalText }) {
//   return (
//     <span>{finalText}</span>
//   )
// }

// function SearchBar() {
//   const [ inputText, setInputText ] = useState("");
//   const [ finalText, setFinalText] = useState("")

//   let handleEnter = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       setFinalText(inputText);
//     }
//   }

//   return (
//     <>
//       <img src="/icons/search-icon.png" className="search-icon" alt="search" />

//       <InputBar setInputText={setInputText} enterFunction={handleEnter}/>

//       <DisplayInputText finalText={finalText} />
//     </>
//   )
// }
export default Insights;
