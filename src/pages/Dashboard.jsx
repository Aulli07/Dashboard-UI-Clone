import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import { createPortal } from "react-dom";
import useWindowWidth from "../hooks/useWindowWidth.js";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { useState } from "react";



function DashboardTransactions({ recentTransactions }) {
  const { isBrowser, isMobile } = useWindowWidth();

  const formatTransactionDescription = (description) => {
    if (!isMobile) return description;
    if (!description) return description;

    const normalized = String(description).trim().toLowerCase();
    if (
      normalized === "deposit into my card" ||
      normalized === "deposit with my card" ||
      normalized === "deposit to my card"
    ) {
      return "Card Deposit";
    }

    return description;
  };
  
  return (
    <>
      {recentTransactions.map((transaction, index) => (
        <div className="dash-transaction" key={index}>
          <div className="dash-transaction-main">
            <img
              src={transaction.image}
              style={{
                background: transaction.background,
              }}
              className="dash-transaction-image"
            ></img>
            <div className="dash-transaction-details">
              <p className="dash-transaction-description">
                {formatTransactionDescription(transaction.description)}
              </p>
              <span className="dash-transaction-date">{(isMobile) ? transaction.date.slice(0, 6) : transaction.date}</span>
            </div>
          </div>
          <span
            className="dash-transaction-cost"
            style={{ color: transaction.color() }}
          >
            {transaction.cost}
          </span>
        </div>
      ))}
    </>
  );
}

function DashboardBarChart({weeklyActivityData}) {
  const { isBrowser } = useWindowWidth();

  return (
    <div style={{ height: "13rem", marginTop: "0.75rem" }}>
      <ResponsiveContainer width={"95%"} height={"100%"}>
        <BarChart
          data={(isBrowser) ? weeklyActivityData : weeklyActivityData.slice(0, 5)}
          barGap="5%"
        >
          <XAxis
            dataKey="date"
            tick={{
              fill: "#718EBF",
              fontSize: "0.88rem",
              fontFamily: "Inter-Medium",
              fontWeight: 500,
            }} // text color & size
            tickMargin={10}
            axisLine={false} // line under the axis
            tickLine={false} // small tick marks
          />

          <YAxis
            tick={{
              fill: "#718EBF",
              fontSize: "0.85rem",
              fontFamily: "Inter-Medium",
              fontWeight: 500,
            }} // text color & size
            tickMargin={10}
            axisLine={false} // line under the axis
            tickLine={false} // small tick marks
            ticks={[0, 100, 200, 300, 400, 500]}
            width="2rem"
          />
          <CartesianGrid vertical={false} strokeOpacity={0.6} />
          <Bar
            dataKey="deposit"
            fill="#1814F3"
            radius={[20, 20, 20, 20]}
            barSize="3%"
          ></Bar>
          <Bar
            dataKey="withdraw"
            fill="lightgreen"
            radius={[20, 20, 20, 20]}
            barSize="3%"
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>  
  )
}

function DashboardPieChart({boxExpenseData}) {
  const COLORS = ["#1814F3", "#22C55E", "#FACC15"];

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
    value,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 1.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#ffffff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="0.85rem"
        fontFamily="Inter-Medium"
        fontWeight={500}
      >
        <tspan x={x} dy="-0.3em">{name}</tspan>   {/* First line */}
        <tspan x={x} dy="1.2em">₦{value}</tspan>  {/* Second line */}
      </text>
      // make something cool here
      
    );
  };

  return (
    <div className="expense-box">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            data={boxExpenseData}
            dataKey="percent"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            label={renderCustomLabel}
            labelLine={false}
          >
            {boxExpenseData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
                stroke="#fff"
                strokeWidth={5}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

const DashboardPersonnels = ({personnels}) => {
  return (
    <>
      {personnels.map((personnel) => (
        <div className="personnel">
          <img src={personnel.picture}></img>
          <p>
            {(personnel.name == "Livia Bator") ? <b>{personnel.name}</b> :  personnel.name}
          </p>
          <span>{personnel.job}</span>
        </div>
        )
      )}
      <div className="personnel-bar">
        <img src="./icons/back_arrow_pic.png"></img>
      </div>
    </>
  )
}

function PersonnelTransferSearch({setInitialAmount, initialAmount}) {
  return (
    <input type="text" value={initialAmount} placeholder="525.50" onChange={(e) => setInitialAmount(e.target.value)}></input>
  )
}

function PersonnelTransferClick({initialAmount, setFinalAmount, finalAmount, setInitialAmount}) {
  const [ showAmount, setShowAmount ] = useState(false);

  return (
    <div className="transfer-send" onClick={(e) => {
      setFinalAmount(initialAmount);
      setShowAmount(true);
    }}>
      Send<img className="icon-image" src="./icons/send_icon.png"></img>
      {showAmount && <ShowAmount amount={finalAmount} setInitialAmount={setInitialAmount}/>}
    </div>
  )
}

function PersonnelTransfer() {
  const [ initialAmount, setInitialAmount ] = useState("");
  const [ finalAmount, setFinalAmount ] = useState("")

  return (
    <div className="transfer-payment">
      <div className="transfer-payment-text">
        <p>Write Amount</p>
      </div>
      <div className="transfer-input">
        <PersonnelTransferSearch setInitialAmount={setInitialAmount} initialAmount={initialAmount}/>

        <PersonnelTransferClick initialAmount={initialAmount} finalAmount={finalAmount} setFinalAmount={setFinalAmount} setInitialAmount={setInitialAmount}/>

      </div>
    </div>
  ) 
}

function Modal({ children, isClose, isOpen, setInitialAmount }) {
  if (!isOpen) return null

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {children}
        <button onClick={() => {
          setInitialAmount("");
          isClose();
        }}>Close Me</button>
      </div>
    </div>,
    document.body
  );
}

function ShowAmount({ amount, setInitialAmount }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} isClose={() => setIsOpen(false)} setInitialAmount={setInitialAmount}>
      <h2>Your Transfer is Successful</h2>
      <p>You paid in the sum of {amount}!</p>
    </Modal>
  );
}

function BalanceAreaChart({balanceTableData}) {
  const { isBrowser } = useWindowWidth();
  return (
    <div className="balance-box" style={{height: "18rem"}}> 
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart data={(isBrowser) ? balanceTableData : balanceTableData.slice(0, 5)}>

          <XAxis dataKey='month' axisLine={false} tick={{fontSize: "0.85rem", fontFamily: "Inter-Medium", fill: "#718EBF"}} tickMargin={10}></XAxis>

          <YAxis axisLine={false} tick={{fontSize: "0.85rem", fontFamily: "Inter-Medium", fill: "#718EBF"}} ticks={[0, 200, 400, 600, 800]} tickMargin={10}></YAxis>

          <CartesianGrid strokeDasharray={3}/>

          <Area dataKey='value' type="monotone" fill="#adacf6ef" stroke="#1814F3" strokeWidth={3}></Area>

        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}


const Dashboard = ({
  cards,
  recentTransactions,
  weeklyActivityData,
  boxExpenseData,
  personnels,
  balanceTableData
}) => {

  const { isMobile } = useWindowWidth();

  const firstCard = cards.find((item) => item.id == 1);
  const secondCard = cards.find((item) => item.id == 2);

  return (
    <div className="dashboard-container">
      <div className="main-dash-content">
        <div className="card">
          <div className="main-card-text">
            <p>My Cards</p>
          </div>
        
          <Card card={firstCard} />
        </div>
        <div className="card">
          <div className="main-card-text other-card-text">
            <NavLink
              to="/creditcards"
              className={({ isActive }) =>
                isActive ? "sub-link active" : "sub-link"
              }
            >
              <p>See All</p>
            </NavLink>
          </div>
          <Card card={secondCard} />
          {/* <Card card={cards.find((item) => item.id == 2)} /> */}
        </div>
        <div className="recent-transaction">
          <div className="transaction-text">
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? "sub-link active" : "sub-link")}
            >
              <p>{isMobile ? "Recents" : "Recent Transactions"}</p>
            </NavLink>
          </div>
          <div className="transaction-box">
            <DashboardTransactions recentTransactions={recentTransactions} />
          </div>
        </div>
        <div className="weekly-activity grid-col-span-2">
          <div className="activity-text">
            <p>Weekly Activity</p>
          </div>
          <div className="activity-box">
            <div className="activity-indicator">
              <div className="indicator-deposit">
                <span></span>
                <p>Deposit</p>
              </div>
              <div className="indicator-withdraw">
                <span></span>
                <p>Withdraw</p>
              </div>
            </div>
            <DashboardBarChart weeklyActivityData={weeklyActivityData} />
          </div>
        </div>
        <div className="expense-statistics">
          <div className="expense-text">
            <p>Expense Statistics</p>
          </div>
          <div className="expense-box-container">
            <DashboardPieChart boxExpenseData={boxExpenseData} />
          </div>
        </div>
      </div>
      <div className="last-main-section">
        <div className="quick-transfer grid-col-span-small">
          <div className="quick-transfer-text">
            <p>Quick Transfer</p>
          </div>
          <div className="quick-transfer-box">
            <div className="personnels-row">
              <DashboardPersonnels personnels={personnels} />
            </div>
            <PersonnelTransfer />
          </div>
        </div>
        <div className="balance-history grid-col-span-big">
          <div className="balance-history-text">
            <p>Balance History</p>
          </div>
          <BalanceAreaChart balanceTableData={balanceTableData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
