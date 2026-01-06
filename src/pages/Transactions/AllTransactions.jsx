// import { useWindowWidth } from "../hooks/useWindowWidth"

const AllTransactions = ({ transactionInfo }) => {
  // const width = useWindowWidth();
  // let visibleTransactionTitles = width > 950 ? transactionInfo.length : (balances.length-3);

  return (
    <>
      {transactionInfo.map((transaction, index) => (
        <div className="transaction-content" key={index}>
          <div className="transaction-description">
            <img src={transaction.arrow()}></img>
            <span className="full-text">{transaction.description}</span>
          </div>
          <span className="transaction-id">
            <span className="full-text">{"#" + transaction.id}</span>
          </span>
          <span className="transaction-type">
            <span className="full-text">{transaction.type}</span>
          </span>
          <span className="transaction-card">
            <span className="full-text">{transaction.card}</span>
          </span>
          <span className="transaction-date">
            <span className="full-text">{transaction.date.slice(0, 6) + ", " +  transaction.time}</span>
          </span>
          <span style={{color: transaction.color()}} className="transaction-amount">{transaction.cost}</span>
          <span className="transaction-receipt">
            <span className="full-text">Download</span>
          </span>
        </div>
      ))}
    </>
  );
};

export default AllTransactions;
