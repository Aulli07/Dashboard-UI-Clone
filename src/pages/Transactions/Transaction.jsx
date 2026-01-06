import {
  ResponsiveContainer,
  YAxis,
  Cell,
  XAxis,
  Bar,
  BarChart,
  Pie,
  PieChart,
} from "recharts";
import Card from "../../components/Card";
import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

function TransactionExpensesChart({ transactionExpenses }) {
  return (
    <div className="transaction-expense-box" style={{ height: "14.5rem" }}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={transactionExpenses} barGap={15}>
          <XAxis
            dataKey="month"
            tickMargin={5}
            tick={{ fontSize: "0.85rem", fontFamily: "Inter-Medium", fill: "#718EBF" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="amount"
            radius={[10, 10, 10, 10]}
            fill="#d6dadfdb"
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ...existing code...

const COLORS = ["red", "rgba(24, 51, 142, 1)", "#f09d22ff"];

function TransactionPieChart({ transactionInfo = [] }) {
  // Group transactions by type and count
  const typeCounts = transactionInfo.reduce((acc, t) => {
    const type = t.type || "unknown";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // Convert to array for pie chart
  const pieData = Object.entries(typeCounts).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="0.75rem"
        fontWeight="700"
        fontFamily="Inter-Bold, sans-serif"
      >
        <tspan x={x} dy="-0.4em" textAnchor="middle">
          {name}
        </tspan>
        <tspan x={x} dy="1.3em" textAnchor="middle">{`${(percent * 100).toFixed(
          0
        )}%`}</tspan>
      </text>
    );
  };

  return (
    <div className="transaction-pie">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            label={renderCustomLabel}
            labelLine={false}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function TransactionSummary({ transactionInfo = [] }) {
  const toNumber = (v) => Number(v) || 0;
  const totalIncome = transactionInfo.reduce(
    (s, t) => s + (t.cost.startsWith("+") ? toNumber(t.cost.slice(2)) : 0),
    0
  );
  const totalExpenses = transactionInfo.reduce(
    (s, t) => s + (t.cost.startsWith("-") ? toNumber(t.cost.slice(2)) : 0),
    0
  );
  const netFlow = totalIncome - totalExpenses;
  const fmt = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const noOfTransactions = transactionInfo.length;
  const sumOfTransactions = transactionInfo.reduce((a, b) => a + toNumber(b.cost.slice(2)), 0);
  let transactionCost = transactionInfo.map(t => t.cost.slice(2))
  const highestTransaction = Math.max(...transactionCost)

  return (
    <div className="transaction-summary">
      <div className="summary-card">
        <p>Number of Transactions</p>
        <h2 style={{ color: "black" }}>{noOfTransactions + 267}</h2>
      </div>

      <div className="summary-card">
        <p>Total Transactions done</p>
        <h2 style={{ color: "purple" }}>{fmt(sumOfTransactions)}</h2>
      </div>

      <div className="summary-card">
        <p>Highest Transaction</p>
        <h2 style={{ color: "blue" }}>{fmt(highestTransaction)}</h2>
      </div>

      <div className="summary-card">
        <p>Total Income</p>
        <h2 style={{ color: "green" }}>{fmt(totalIncome)}</h2>
      </div>

      <div className="summary-card">
        <p>Total Expenses</p>
        <h2 style={{ color: "#ef4444" }}>{fmt(totalExpenses)}</h2>
      </div>

      <div className="summary-card">
        <p>Net Flow</p>
        <h2
          style={{
            color: netFlow >= 0 ? "#16a34a" : "#ef4444",
          }}
        >
          {fmt(netFlow)}
        </h2>
      </div>
    </div>
  );
}

const Transaction = ({
  cards,
  transactionExpenses,
  transactionInfo,
  setTransactionNo,
}) => {
  const links = [
    { label: "All Transactions", to: "/transactions/alltransactions" },
    { label: "Income", to: "/transactions/income" },
    { label: "Expenses", to: "/transactions/expenses" },
  ];

  return (
    <div className="main-transaction">
      <div className="main-dash-content">
        <div className="card">
          <div className="main-card-text">
            <p>My Cards</p>
          </div>
          <Card card={cards.find((item) => item.id == 1)} />
        </div>
        <div className="card">
          <div className="main-card-text other-card-text">
            <NavLink
              to="/creditcards"
              className={({ isActive }) =>
                isActive ? "sub-link active" : "sub-link"
              }
            >
              <p>+ Add Card</p>
            </NavLink>
          </div>
          <Card card={cards.find((item) => item.id == 2)} />
        </div>
        <div className="expenses">
          <div className="transaction-text">
            <p>My Expenses</p>
          </div>
          <TransactionExpensesChart transactionExpenses={transactionExpenses} />
        </div>
      </div>
      <div className="transaction-history">
        <div className="transaction-history-text">
          <p>Recent Transactions</p>
        </div>
        <Navigation links={links} />
        {/* <div className="transaction-types">
          <div className="main-transaction-types">
            <p className="all-transactions">
              <NavLink
                to="/transactions/alltransactions"
                className={({ isActive }) =>
                  isActive ? "sub-link active" : "sub-link"
                }
              >
                All Transactions
              </NavLink>
            </p>
            <p className="income-transaction-type">
              <NavLink
                to="/transactions/income"
                className={({ isActive }) =>
                  isActive ? "sub-link active" : "sub-link"
                }
              >
                Income
              </NavLink>
            </p>
            <p className="expense-transaction-type">
              <NavLink
                to="/transactions/expenses"
                className={({ isActive }) =>
                  isActive ? "sub-link active" : "sub-link"
                }
              >
                Expenses
              </NavLink>
            </p>
          </div>
          <span className="transaction-borderline"></span>
          <span className="transaction-mainline"></span>
        </div> */}
        <div className="transaction-history-box">
          <div className="transaction-history-items">
            <span className="title-description">Description</span>
            <span className="title-id">Transaction ID</span>
            <span className="title-type">Type</span>
            <span className="title-card">Card</span>
            <span className="title-date">Date</span>
            <span className="title-amount">Amount</span>
            <span className="title-receipt">Receipt</span>
          </div>
          <span className="history-borderline"></span>
          <div className="transaction-history-contents">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="transaction-numbering">
        <div className="numbering-previous">
          <img src="/icons/back_arrow_pic.png"></img>
          <span>Previous</span>
        </div>
        <div className="numbers">
          <span onClick={() => setTransactionNo(0)} className="numbering-1">
            1
          </span>
          <span onClick={() => setTransactionNo(5)} className="numbering-2">
            2
          </span>
          <span onClick={() => setTransactionNo(10)} className="numbering-3">
            3
          </span>
          <span onClick={() => setTransactionNo(15)} className="numbering-4">
            4
          </span>
        </div>
        <div className="numbering-next">
          <img src="/icons/forward_pic.png"></img>
          <span>Next</span>
        </div>
      </div>
      <div className="transaction-insights">
        <div className="transaction-insights-text">
          <p>Transaction Insights</p>
        </div>
        <div className="transaction-insights-box">
          <TransactionSummary transactionInfo={transactionInfo} />
          <div className="transaction-pie-container">
            <TransactionPieChart transactionInfo={transactionInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
