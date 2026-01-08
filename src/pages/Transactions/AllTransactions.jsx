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
            {"#" + transaction.id}
          </span>
          <span className="transaction-type">
            {transaction.type}
          </span>
          <span className="transaction-card">       {transaction.card}
          </span>
          <span className="transaction-date">       {transaction.date.slice(0, 6) + ", " +  transaction.time}  
          </span>
          <span style={{color: transaction.color()}} className="transaction-amount">{transaction.cost}</span>
          <span className="transaction-receipt">
              Download
          </span>
        </div>
      ))}
    </>
  );
};

export default AllTransactions;
