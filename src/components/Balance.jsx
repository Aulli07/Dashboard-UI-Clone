import useWindowWidth from "../hooks/useWindowWidth.js"


function BalanceSection({balances}) {
  // const { isBrowser, isMobile } = useWindowWidth();
  // let visibleBalances;
  // if (balances.length === 3) {
  //   visibleBalances = balances.length;
  //   visibleBalances = isMobile ? (balances.length-1) : balances.length;
  // } else {
  //   visibleBalances = isBrowser ? balances.length : (balances.length-1);
  // }

  return (
    <div className="investments-section">
      {balances.slice(0, (balances.length)).map((balance, index) => (
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