import useWindowWidth from "../hooks/useWindowWidth.js"

// import { useEffect, useState } from "react";

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
  
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
  
//   return width;
// }



function BalanceSection({balances}) {
  const { width } = useWindowWidth();
  let visibleBalances = width > 950 ? balances.length : (balances.length-1);

  return (
    <div className="investments-section">
      {balances.slice(0, visibleBalances).map((balance, index) => (
        <div className="main-balance" key={index}>
          <img className={balance.classname} style={{backgroundColor: balance.backgroundColor}} src={balance.picture}></img> 
          <div className="main-balance-details">
            <span>{balance.name}</span>
            <p>{balance.amount}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BalanceSection;