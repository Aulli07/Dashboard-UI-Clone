import BalanceSection from "../components/Balance";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Accounts = ({accountBalances, transactions, cards, accountsData, invoices}) => {

  function AccountBarChart({accountsData}) {
    return (
      <div style={{ height: "315px", marginTop: "30px" }}>
        <ResponsiveContainer width={"95%"} height={"100%"}>
          <BarChart
            data={accountsData}
            barGap={10}
          >
            <XAxis
              dataKey="date"
              tick={{
                fill: "#718EBF",
                fontSize: 13,
                fontFamily: "Inter-Medium",
                fontWeight: 500,
              }} // text color & size
              tickMargin={10}
              axisLine={false} // line under the axis
              tickLine={false} // small tick marks
            />
            <Bar
              dataKey="debit"
              fill="#1814F3"
              radius={[7, 7, 5, 5]}
              barSize={30}
            ></Bar>
            <Bar
              dataKey="credit"
              fill="#e1561bdb"
              radius={[5, 5, 5, 5]}
              barSize={30}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>  
    )
  }

  return (
    <div className="accounts-container">
      <BalanceSection balances={accountBalances} />

      <div className="transaction-and-card">
        <div className="last-transaction">
          <div className="last-transaction-text">
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive ? "sub-link active" : "sub-link"
              }
            >
              <p>Last Transaction</p>
            </NavLink>
          </div>
          <div className="last-transaction-box">
            {transactions.map((transaction, index) => (
              <div className="last-transaction-items" key={index}>
                <img src={transaction.image} style={{backgroundColor: transaction.background}}></img>
                <div className="last-transaction-details">
                  <span className="last-transaction-description">{transaction.description}</span>
                  <span className="last-transaction-date">{transaction.date.slice(0, 6) + ", " +  transaction.time}</span>
                </div>
                <span className="last-transaction-type">{transaction.type}</span>
                <span className="last-transaction-card">{transaction.card}</span>
                <span className="last-transaction-status">Completed</span>
                <span style={{ color: transaction.color() }}  className="last-transaction-amount spotify-transaction-amount">{transaction.cost}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="main-card-text account-card-header">
            <p>My Card</p>
            <NavLink
              to="/creditcards"
              className={({ isActive }) =>
                isActive ? "sub-link active" : "sub-link"
              }
            >
              <span>See All</span>
            </NavLink>
          </div>
          <Card card={cards.find((item) => item.id == 1)} />
        </div>
      </div>
      <div className="overview-and-invoices">
        <div className="overview">
          <div className="overview-text">
            <p>Debit & Credit Overview</p>
          </div>
          <div className="overview-box">
            <div className="overview-description">
              <span className="overview-description-text"><b>$7,560</b> Debited & <b>$5,420</b> Credited In this Week</span>
              <div className="overview-indicators">
                <div className="debit-indicator">
                  <span></span>
                  <p>Debit</p>
                </div>
                <div className="credit-indicator">
                  <span></span>
                  <p>Credit</p>
                </div>
              </div>
            </div>
            <AccountBarChart accountsData={accountsData} />
          </div>
        </div>
        <div className="invoices">
          <div className="invoices-text">
            <p>Invoices Sent</p>
          </div>
          <div className="invoices-box">
            {invoices.map((invoice, index) => (
              <div className="invoice" key={index}>
                <div className="invoice-details">
                  <img src={invoice.image}></img>
                  <div class="invoice-description">
                    <p>{invoice.name}</p>
                    <span>{invoice.date}</span>
                  </div>
                </div>
                <span className="invoice-amount">{invoice.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accounts