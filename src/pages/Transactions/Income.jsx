const Income = ({incomeTransactions}) => {
  return (
    <>
      {incomeTransactions.map((transaction, index) => (
        <div className="transaction-content" key={index}>
          <span className="transaction-description">
            <img src={transaction.arrow()}></img>
            <span className="full-text">{transaction.description}</span>
            {/* <span className="short-text">{transaction.description.slice(0, 8)}</span> */}
          </span>
          <span className="transaction-id">
            <span className="full-text">{"#" + transaction.id}</span>
            {/* <span className="short-text">{transaction.id.slice(-3)}</span> */}
          </span>
          <span className="transaction-type">
            <span className="full-text">{transaction.type}</span>
            {/* <span className="short-text">{transaction.type.slice(0, 3)}</span> */}
          </span>
          <span className="transaction-card">
            <span className="full-text">{transaction.card}</span>
            {/* <span className="short-text">{transaction.card.slice(-4)}</span> */}
          </span>
          <span className="transaction-date">
            <span className="full-text">{transaction.date.slice(0, 6) + ", " +  transaction.time}</span>
            {/* <span className="short-text">{transaction.date.slice(0, 3)}</span> */}
          </span>
          <span style={{color: transaction.color()}} className="transaction-amount">{transaction.cost}</span>
          <span className="transaction-receipt">
            <span className="full-text">Download</span>
            {/* <span className="short-text">DL</span> */}
          </span>
        </div>
      ))}
    </>
  )
}

export default Income;