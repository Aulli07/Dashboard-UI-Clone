import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import Transaction from "../pages/Transactions/Transaction";
import AllTransactions from "../pages/Transactions/AllTransactions";
import Expenses from "../pages/Transactions/Expenses";
import Income from "../pages/Transactions/Income";

import Accounts from "../pages/Accounts";
import Investments from "../pages/Investments";
import CreditCards from "../pages/CreditCards";
import Loans from "../pages/Loans";
import Services from "../pages/Services";

import Setting from "../pages/Setting/Setting";
import Profile from "../pages/Setting/Profile";
import Preferences from "../pages/Setting/Preferences";
import Security from "../pages/Setting/Security";

import Insights from "../pages/Insights";

const Body = ({
  transactionInfo,
  cardInfo,
  weeklyActivityData,
  boxExpenseData,
  personnels,
  balanceTableData,
  transactionExpenses,
  accountBalances,
  accountsData,
  invoices,
  investmentBalances,
  investmentData,
  revenueData,
  investments,
  stockData,
  cardList,
  cardAdditionList,
  cardSettingData,
  loanBalances,
  loanDetails,
  loanTotal,
  serviceBalances,
  services
}) => {
  const incomeTransactions = [];
  const expensesTransactions = [];
  const [transactionNo, setTransactionNo] = useState(0);

  let transactions = transactionInfo.slice(
    transactionNo,
    transactionNo + 5 || transactionNo.length - 1
  );

  transactionInfo.map((transaction) => {
    if (transaction.cost.startsWith("+")) {
      incomeTransactions.push(transaction);
    } else {
      expensesTransactions.push(transaction);
    }
  });

  return (
    <main className="main-body">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              cards={cardInfo}
              recentTransactions={transactionInfo.slice(0, 3)}
              weeklyActivityData={weeklyActivityData}
              boxExpenseData={boxExpenseData}
              personnels={personnels.slice(0, 3)}
              balanceTableData={balanceTableData}
            />
          }
        />
        <Route
          path="/transactions"
          element={
            <Transaction
              transactionInfo={transactionInfo}
              cards={cardInfo}
              transactionExpenses={transactionExpenses}
              setTransactionNo={setTransactionNo}
            />
          }
        >
          <Route index element={<Navigate to="alltransactions" replace />} />
          <Route
            path="alltransactions"
            element={<AllTransactions transactionInfo={transactions} />}
          />
          <Route
            path="income"
            element={<Income incomeTransactions={incomeTransactions} />}
          />
          <Route
            path="expenses"
            element={<Expenses expensesTransactions={expensesTransactions} />}
          />
        </Route>
        <Route
          path="/accounts"
          element={
            <Accounts
              accountBalances={accountBalances}
              transactions={transactionInfo.slice(0, 3)}
              cards={cardInfo}
              accountsData={accountsData}
              invoices={invoices}
            />
          }
        />
        <Route
          path="/investments"
          element={
            <Investments
              investmentBalances={investmentBalances}
              investmentData={investmentData}
              revenueData={revenueData}
              investments={investments}
              stockData={stockData}
            />
          }
        />
        <Route path="/creditcards" element={<CreditCards cards={cardInfo} cardList={cardList} cardAdditionList={cardAdditionList} cardSettingData={cardSettingData}/>} />
        <Route path="/loans" element={<Loans loanBalances={loanBalances} loanDetails={loanDetails} loanTotal={loanTotal}/>} />
        <Route path="/services" element={<Services serviceBalances={serviceBalances} services={services} />} />
        <Route path="/setting" element={<Setting />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </main>
  );
};

export default Body;
