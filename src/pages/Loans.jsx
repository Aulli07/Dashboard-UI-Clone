import BalanceSection from "../components/Balance"

const Loans = ({loanBalances, loanDetails, loanTotal}) => {
  return (
    <div className="accounts-container">
      <BalanceSection balances={loanBalances} />

      <div className="loan-overview">
          <div className="loan-overview-text">
            <p>Active Loan Overview</p>
          </div>
          <div className="loan-overview-box">
            <div className="loan-overview-items">
              <span>SL No</span>
              <span>Loan Name</span>
              <span>Left to repay</span>
              <span>Duration</span>
              <span>Interest rate</span>
              <span>Installment</span>
              <span>Repay</span>
            </div>
            <span className="trending-stock-borderline"></span>
            <div className="loan-detail-container">
              {loanDetails.map((loan, index) => (
                <div className="loan-detail-box">
                  <span>{loan.id}</span>
                  <span>${loan.amount}</span>
                  <span>${loan.repay}</span>
                  <span>{loan.duration}</span>
                  <span>{loan.interest}</span>
                  <span>{loan.installment}</span>
                  <span className="loan-repay-button">Repay</span>
                </div>
              ))}
              <div className="loan-detail-box total-details">
                <span>Total</span>
                <span>${loanTotal.totalAmount}</span>
                <span>${loanTotal.totalRepay}</span>
                <span></span>
                <span></span>
                <span>${loanTotal.totalInstallment}/month</span>
              </div>
            </div>
            {/* <div className="loan-detail-container">
              <div className="loan-detail-box">
                <span>01.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>02.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>03.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>04.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>05.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>06.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>07.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box">
                <span>O8.</span>
                <span>$100,000</span>
                <span>$40,500</span>
                <span>8 months</span>
                <span>12%</span>
                <span>$2000/month</span>
                <span className="loan-repay-button">Repay</span>
              </div>
              <div className="loan-detail-box total-details">
                <span>Total</span>
                <span>$125,000</span>
                <span>$750,000</span>
                <span></span>
                <span></span>
                <span>$50,000/month</span>
              </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Loans;