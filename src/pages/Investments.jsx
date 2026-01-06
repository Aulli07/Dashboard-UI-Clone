import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import BalanceSection from "../components/Balance"

const Investments = ({investmentBalances, investmentData, revenueData, investments, stockData}) => {

  function InvestmentLineChart() {
    return (
      <div className="yearly-investment-box" style={{height: "322px"}}> 
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={investmentData}>
            <XAxis dataKey='year' axisLine={false} tickLine={false} tick={{fontSize: 13, fontFamily: "Inter-Medium", fill: "#718EBF"}} tickMargin={15}></XAxis>
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 13, fontFamily: "Inter-Medium", fill: "#718EBF"}} ticks={[0, 10000, 20000, 30000, 40000, 50000]} tickMargin={10}></YAxis>
            <CartesianGrid vertical={false} />
            <Line dataKey='amount' fill="#fff" stroke="gold" strokeWidth={3}></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  function RevenueLineChart() {
    return (
      <div className="monthly-revenue-box" style={{height: "322px"}}> 
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={revenueData}>
            <XAxis dataKey='year' axisLine={false} tickLine={false} tick={{fontSize: 13, fontFamily: "Inter-Medium", fill: "#718EBF"}} tickMargin={15}></XAxis>
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 13, fontFamily: "Inter-Medium", fill: "#718EBF"}} ticks={[0, 10000, 20000, 30000, 40000, 50000]} tickMargin={10}></YAxis>
            <CartesianGrid vertical={false} />
            <Line dataKey='amount' type="monotone" stroke="lightgreen" strokeWidth={3}></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="investments-container">
      <BalanceSection balances={investmentBalances} />
      <div className="investment-and-revenue">
        <div className="yearly-investment">
          <div className="yearly-investment-text">
            <p>Yearly Total Investment</p>
          </div>
          <InvestmentLineChart />
        </div>
        <div className="monthly-revenue">
          <div className="monthly-revenue-text">
            <p>Monthly Revenue</p>
          </div>
          <RevenueLineChart />
        </div>
      </div>
      <div className="investment-and-stock">
        <div className="my-investment">
          <div className="my-investment-text">
            <p>My Investment</p>
          </div>
          <div className="my-investment-box">
            {investments.map((investment, index) => (
              <div className="investment" key={index}>
                <img src={investment.image}></img>
                <div className="investment-name">
                  <p>{investment.name}</p>
                  <span>{investment.field}</span>
                </div>
                <div className="investment-cost">
                  <p>{investment.value}</p>
                  <span>Envestment Value</span>
                </div>
                <div className="investment-rate">
                  <p>{investment.rate}</p>
                  <span>Return Value</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="trending-stock">
          <div className="trending-stock-text">
            <p>Trending Stock</p>
          </div>
          <div className="trending-stock-box">
          <div className="trending-stock-items">
            <span>SL No</span>
            <span>Name</span>
            <span>Price</span>
            <span>Return</span>
          </div>
          <span className="trending-stock-borderline"></span>
          <div className="trending-stock-contents">
            {stockData.map((stock, index) => (
              <div className="stock" key={index}>
                <span>{stock.number}</span>
                <span>{stock.name}</span>
                <span>{stock.price}</span>
                <span style={{color: stock.color()}}>{stock.rate}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Investments