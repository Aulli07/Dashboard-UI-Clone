import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

import { useState } from "react";


const App = () => {
  const [headerText, setHeaderText] = useState("Overview");

  const headerInfo = {
    imageUrl: "/icons/header-image.jpg",
  };


  const cardInfo = [
    {
      id: 1,
      price: "$4500",
      cardChipIcon: "/icons/chip_card_icon.png",
      holderName: "Eddy Cusuma",
      duration: "12/22",
      cardNumber: "3778 **** **** 1234",
      cardMasterIcon: "/icons/mastercard_icon.png",
      styles: {
        marginTop: 0,
        borderTop: 0,
        background: "#1814F3",
        cardDataBackground: "#3c39f4",
        spanColor: "#B1B1B1",
        mainColor: "white",
      },
    },
    {
      id: 2,
      price: "$2,600",
      cardChipIcon: "/icons/chip_card_2_icon.png",
      holderName: "Areola Benson",
      duration: "09/26",
      cardNumber: "3700 *** **** 5637",
      cardMasterIcon: "/icons/mastercard_2_icon.png",
      styles: {
        marginTop: "0px",
        background: "white",
        cardDataBackground: "white",
        spanColor: "#B1B1B1",
        mainColor: "black",
        borderTop: "1px groove #B1B1B1",
      },
    },
  ];

  function createTransaction(
    image,
    description,
    date,
    cost,
    background,
    id,
    type,
    card,
    time
  ) {
    this.image = image;
    this.description = description;
    this.date = date;
    this.cost = cost;
    this.color = () => {
      if (cost.startsWith("-")) {
        return "tomato";
      } else {
        return "#26b52fff";
      }
    };
    this.background = background;
    this.id = id;
    this.type = type;
    this.card = card;
    this.time = time;
    this.arrow = () => {
      if (cost.startsWith("+")) {
        return "/icons/top_arrow_pic.png";
      } else {
        return "/icons/bottom_arrow_pic.png";
      }
    }
  }

  const transactionInfo = [];
  transactionInfo.push(
    new createTransaction(
      "/icons/card_transaction_icon.png",
      "Deposit with my Card",
      "28 January 2021",
      "-$850",
      "rgb(243, 239, 209)",
      "12548796",
      "Shopping",
      "1234 ****",
      "12:30AM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/paypal_transaction_icon.png",
      "Deposit Paypal",
      "25 January 2021",
      "+$2500",
      "rgba(169, 190, 239, 1)",
      "12548246",
      "Transfer",
      "1234 ****",
      "10:00AM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/person_payment_icon.png",
      "Candace Wilson",
      "20 January 2021",
      "-$400",
      "rgba(197, 251, 244, 1)",
      "12542196",
      "Transfer",
      "1234 ****",
      "12:00PM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/person_payment_icon.png",
      "Spotify Subscription",
      "28 January 2021",
      "-$2500",
      "rgb(243, 239, 209)",
      "12548396",
      "Shopping",
      "1234 ****",
      "12:30AM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/paypal_transaction_icon.png",
      "Freepik Sales",
      "27 January 2021",
      "+$750",
      "rgb(243, 239, 209)",
      "12548300",
      "Transfer",
      "1234 ****",
      "1:50PM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/person_payment_icon.png",
      "Cristiano Ronaldo",
      "15 January 2021",
      "+$7500",
      "rgb(243, 239, 209)",
      "12548777",
      "Transfer",
      "1234 ****",
      "07:07AM"
    )
  );
  transactionInfo.push(
    new createTransaction(
      "/icons/card_transaction_icon.png",
      "Mobile Service",
      "22 January 2021",
      "-$150",
      "rgb(243, 239, 209)",
      "12548326",
      "Service",
      "1234 ****",
      "08:30PM"
    )
  );


  function createActivityData(date, deposit, withdraw) {
    this.date = date;
    this.deposit = deposit;
    this.withdraw = withdraw;
  }

  const weeklyActivityData = [];
  weeklyActivityData.push(new createActivityData("Sat", 500, 250));
  weeklyActivityData.push(new createActivityData("Sun", 350, 120));
  weeklyActivityData.push(new createActivityData("Mon", 320, 280));
  weeklyActivityData.push(new createActivityData("Tue", 480, 370));
  weeklyActivityData.push(new createActivityData("Wed", 150, 230));
  weeklyActivityData.push(new createActivityData("Thur", 400, 230));
  weeklyActivityData.push(new createActivityData("Fri", 420, 340));


  function createBoxExpense(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  const boxExpenseData = [];
  boxExpenseData.push(new createBoxExpense("Entertainment", 30));
  boxExpenseData.push(new createBoxExpense("Investment", 20));
  boxExpenseData.push(new createBoxExpense("Education", 35));
  boxExpenseData.push(new createBoxExpense("Others", 15));


  function Personnels(name, picture, job) {
    this.name = name;
    this.picture = picture;
    this.job = job;
  }

  const PERSONNELS = [];
  PERSONNELS.push(new Personnels("Livia Bator", "./icons/ceo_pic.png", "CEO"));
  PERSONNELS.push(
    new Personnels("Randy Press", "./icons/director_pic.png", "Director")
  );
  PERSONNELS.push(
    new Personnels("Workman", "./icons/designer_pic.png", "Designer")
  );
  PERSONNELS.push(
    new Personnels("David Reid", "./icons/ceo_pic.png", "Blogger")
  );
  PERSONNELS.push(
    new Personnels("Robert Guzman", "./icons/director_pic.png", "Programmer")
  );
  PERSONNELS.push(
    new Personnels("Olivia Rodrigo", "./icons/ceo_pic.png", "Typist")
  );
  PERSONNELS.push(
    new Personnels("Cristiano Ronaldo", "./icons/_pic.png", "GOAT")
  );

  function Balances(month, value) {
    this.month = month;
    this.value = value;
  }

  const balanceTableData = [];
  balanceTableData.push(new Balances("Jul", 250));
  balanceTableData.push(new Balances("Aug", 400));
  balanceTableData.push(new Balances("Sep", 200));
  balanceTableData.push(new Balances("Oct", 600));
  balanceTableData.push(new Balances("Nov", 750));
  balanceTableData.push(new Balances("Dec", 400));
  balanceTableData.push(new Balances("Jan", 700));

  function Expenses(month, amount) {
    this.month = month;
    this.amount = amount;
  }

  const transactionExpenses = [];
  transactionExpenses.push(new Expenses("Aug", 10000));
  transactionExpenses.push(new Expenses("Sep", 13000));
  transactionExpenses.push(new Expenses("Oct", 10200));
  transactionExpenses.push(new Expenses("Nov", 5000));
  transactionExpenses.push(new Expenses("Dec", 12500));
  transactionExpenses.push(new Expenses("Jan", 9000));

  function createAccount(picture, name, amount, backgroundColor, classname="main-balance-icon") {
    this.picture = picture;
    this.name = name;
    this.amount = amount;
    this.backgroundColor = backgroundColor;
    this.classname = classname;
  }

  const accountBalances = [];
  accountBalances.push(new createAccount("./icons/money-tag_icon.png", "My Balance", "12,750", "#FFF5D9"));
  accountBalances.push(new createAccount("./icons/loan_solid_icon.png", "Income" , "5,600", "#E7EDFF"));
  accountBalances.push(new createAccount("./icons/account_expense_icon.png", "Expense", "3,460", "#ff82ac45"));
  accountBalances.push(new createAccount("./icons/saving_icon.png", "Total Saving", "7,920", "#DCFAF8"));

  function createAccountData(date, debit, credit) {
    this.date = date;
    this.debit = debit;
    this.credit = credit;
  }

  const accountsData = [];
  accountsData.push(new createAccountData("Sat", 500, 1000));
  accountsData.push(new createAccountData("Sun", 400, 750));
  accountsData.push(new createAccountData("Mon", 350, 500));
  accountsData.push(new createAccountData("Tue", 900, 450));
  accountsData.push(new createAccountData("Wed", 550, 900));
  accountsData.push(new createAccountData("Thur", 600, 350));
  accountsData.push(new createAccountData("Fri", 700, 900));


  function createInvoiceData(image, name, date, amount) {
    this.name = name;
    this.image = image;
    this.date = date;
    this.amount = amount
  }

  const invoicesData = [];
  invoicesData.push(new createInvoiceData("./icons/apple_3_icon.png", "Apple Store", "5h ago", "$450"));
  invoicesData.push(new createInvoiceData("./icons/apple_3_icon.png", "Micheal", "2 days ago", "$160"));
  invoicesData.push(new createInvoiceData("./icons/apple_3_icon.png", "Playstation", "5 days ago", "$1085"));
  invoicesData.push(new createInvoiceData("./icons/apple_3_icon.png", "William", "10 days ago", "$90"))
  invoicesData.push(new createInvoiceData("./icons/apple_3_icon.png", "David Chinedu", "12 days ago", "$200"));


  function createInvestment(picture, name, amount, classname) {
    this.picture = picture;
    this.name = name;
    this.amount = amount;
    this.classname = classname;
  }

  const investmentBalances = [];
  investmentBalances.push(new createInvestment("./icons/money_2_icon.png", "Total Invested Amount", "$150,000", "invested-amount-icon"));
  investmentBalances.push(new createInvestment("./icons/investment_icon.png", "Number of Investments" , "1,250", "no-investments-icon"));
  investmentBalances.push(new createInvestment("./icons/return_icon.png", "Rate of Return", "+5.80%", "rate-return-icon"));


  function createInvestmentData(year, amount) {
    this.year = year;
    this.amount = amount;
  }

  const investmentData = [];
  investmentData.push(new createInvestmentData(2016, 5000));
  investmentData.push(new createInvestmentData(2017, 25000));
  investmentData.push(new createInvestmentData(2018, 17000));
  investmentData.push(new createInvestmentData(2019, 38000));
  investmentData.push(new createInvestmentData(2020, 20000));
  investmentData.push(new createInvestmentData(2021, 30000));

  function createRevenueData(year, amount) {
    this.year = year;
    this.amount = amount;
  }

  const revenueData = [];
  revenueData.push(new createRevenueData(2016, 5000));
  revenueData.push(new createRevenueData(2017, 25000));
  revenueData.push(new createRevenueData(2018, 17000));
  revenueData.push(new createRevenueData(2019, 38000));
  revenueData.push(new createRevenueData(2020, 20000));
  revenueData.push(new createRevenueData(2021, 30000));


  function createInvestments(image, name, field, value, rate) {
    this.name = name;
    this.image = image;
    this.field = field;
    this.value = value;
    this.rate = rate;
  }

  const investments = [];
  investments.push(new createInvestments("./icons/apple_2_icon.png", "Apple Store", "E-commerce, Marketplace", "$54,000", "16%"));
  investments.push(new createInvestments("./icons/google_icon.png", "Samsung Mobile", "E-commerce, Marketplace", "$25,300", "-4%"));
  investments.push(new createInvestments("./icons/tesla_icon.png", "Tesla Motors", "Electric Vehicles", "$8,200", "+25%"));


  function createStock(number, name, price, rate) {
    this.name = name;
    this.number = number;
    this.price = price;
    this.rate = rate;
    this.color = () => {
      if (rate.startsWith("+")) {
        return "tomato";
      } else {
        return "#26b52fff";
      }
    }
  }

  const stockData = [];
  stockData.push(new createStock("01.", "Trivago", "$520", "+5%"));
  stockData.push(new createStock("02.", "Canon", "$480", "+10%"));
  stockData.push(new createStock("03.", "Uber Food", "$350", "-3%"));
  stockData.push(new createStock("04.", "Nokia", "$940", "+2%"));
  stockData.push(new createStock("05.", "Tiktok", "$670", "-12%"));


  function createCardList(image, type, bank, number, name, backgroundColor) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.number = number;
    this.bank = bank;
    this.backgroundColor = backgroundColor
  }

  const cardList = [];
  cardList.push(new createCardList("./icons/credit-card_icon3.png", "Secondary", "BRC Bank", "**** **** 4300", "Michel", "#E7EDFF"));
  cardList.push(new createCardList("./icons/credit-card_icon2.png", "Secondary", "DBL Bank", "**** **** 5600", "William", "#ff82ac45"));
  cardList.push(new createCardList("./icons/credit-card_icon3.png", "Secondary", "ARM Bank", "**** **** 7580", "Edward", "#FFF5D9"))


  function createCard(id, holdname) {
    this.id = id;
    this.holdname = holdname;
  }

  const cardAdditionList = [];
  cardAdditionList.push(new createCard(1, "Classic"));
  cardAdditionList.push(new createCard(2, "My Cards"));
  cardAdditionList.push(new createCard(3, "**** **** **** **** **** ****"));
  cardAdditionList.push(new createCard(4, 25000));


   function createSetting(image, name, description, backgroundColor) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.backgroundColor = backgroundColor
  }

  const cardSettingData = [];
  cardSettingData.push(new createSetting("./icons/block-card-icon.png", "Block Card", "Instantly block your card", "#FFF5D9"));
  cardSettingData.push(new createSetting("./icons/padlock-icon.png", "Change Pin Code", "Choose another pin code", "#E7EDFF"));
  cardSettingData.push(new createSetting("./icons/google-glass-icon.png", "Add to Google Pay", "Withdraw without any cost", "#ff82ac45"));
  cardSettingData.push(new createSetting("./icons/apple_icon.png", "Add to Apple Pay", "Withdraw without any card", "#DCFAF8"));
  cardSettingData.push(new createSetting("./icons/apple_icon.png", "Add to Apple Store", "Withdraw without any card", "#DCFAF8"));


  function createLoan(picture, name, amount) {
    this.picture = picture;
    this.name = name;
    this.amount = amount;
  }
  const loanBalances = [];
  loanBalances.push(new createLoan("./icons/loan_person_icon.png", "Personal Loans", "$50,000", "none"));
  loanBalances.push(new createLoan("./icons/corporate_icon_loan.png", "Corporate Loans" , "$100,000", "none"));
  loanBalances.push(new createLoan("./icons/business_loan_icon.png", "Business Loans", "$500,000", "none"));
  loanBalances.push(new createLoan("./icons/custom_loan_icon.png", "Custom Loans", "Choose Money", "none"));

  let totalLoanAmount = 0;
  let totalRepay = 0;
  let totalInstallment = 0
  
  function createLoanDetails(id, amount, repay, duration, interest, installment) {
    this.id = id;
    this.amount = amount;
    this.repay = repay;
    this.duration = duration;
    this.interest = interest;
    this.installment = installment;
    totalLoanAmount += amount;
    totalRepay += repay;
    totalInstallment += Number(installment.slice(1, 5));
  }

  const loanDetails = [];
  loanDetails.push(new createLoanDetails("01", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("02", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("03", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("04", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("05", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("06", 100000, 40500, "8 months", "12%", "$2000/month"))
  loanDetails.push(new createLoanDetails("07", 100000, 40500, "8 months", "12%", "$2000/month"))
  const loanTotal = {totalAmount: totalLoanAmount, totalRepay: totalRepay, totalInstallment: totalInstallment};


  const serviceBalances = [];
  serviceBalances.push(new createInvestment("./icons/life_insurance_icon.png", "Life Insurance", "Unlimited protection", "service-main"));
  serviceBalances.push(new createInvestment("./icons/shopping_icon.png", "Shopping" , "Buy. Think. Grow", "service-main"));
  serviceBalances.push(new createInvestment("./icons/safety_icon.png", "Safety", "We are your allies", "service-main"));


  function createService(image, name, description, note) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.note = note;
  }

  const services = [];
  services.push(new createService("./icons/apple_2_icon.png", "Business Loans", "It is a long established", "Many publishing"));
  services.push(new createService("./icons/apple_2_icon.png", "Checking Accounts", "It is a long established", "Many publishing"));
  services.push(new createService("./icons/apple_2_icon.png", "Savings Account", "It is a long established", "Many publishing"));
  services.push(new createService("./icons/apple_2_icon.png", "Debits and Credits", "It is a long established", "Many publishing"));
  services.push(new createService("./icons/apple_2_icon.png", "Life Insurance", "It is a long established", "Many publishing"));
  services.push(new createService("./icons/apple_2_icon.png", "Business Loans", "It is a long established", "Many publishing"));
  


  return (
    <div className="main-display">
      <Sidebar setHeaderText={setHeaderText} />
      <div className="main-dashboard">
        <Header
          headerText={headerText}
          transactions={transactionInfo}
          imageUrl={headerInfo.imageUrl}
        />

        <Body
          transactionInfo={transactionInfo}
          cardInfo={cardInfo}
          weeklyActivityData={weeklyActivityData}
          boxExpenseData={boxExpenseData}
          personnels={PERSONNELS}
          balanceTableData={balanceTableData}
          transactionExpenses={transactionExpenses}
          accountBalances={accountBalances}
          accountsData={accountsData}
          invoices={invoicesData}
          investmentBalances={investmentBalances}
          investmentData={investmentData}
          revenueData={revenueData}
          investments={investments}
          stockData={stockData}
          cardList={cardList}
          cardAdditionList={cardAdditionList}
          cardSettingData={cardSettingData}
          loanBalances={loanBalances}
          loanDetails={loanDetails}
          loanTotal = {loanTotal}
          serviceBalances={serviceBalances}
          services={services}
        />

        <div className="footer">
          Coded by <a href="">Alwell Chukwuka</a>. Find more at{" "}
          <a href="">www.github.aulli_chukwuka.com</a>
        </div>
      </div>
    </div>
  );
};

export default App;
