import BalanceSection from "../components/Balance";
import useWindowWidth from "../hooks/useWindowWidth";

const Services = ({serviceBalances, services}) => {

  const { isMobile } = useWindowWidth();

  const visibleServiceBalances = isMobile ? serviceBalances.slice(0, 2) : serviceBalances;

  return (
    <div className="accounts-container">
      <BalanceSection balances={visibleServiceBalances} />

      <div className="loan-overview">
        <div className="loan-overview-text">
          <p>Bank Services List</p>
        </div>
        <div className="service-box">
          {services.map((service, index) => (
              <div className="services" style={{backgroundColor: "white"}} key={index}>
                <img src={service.image}></img>
                <div className="service">
                  <p>{service.name}</p>
                  <span>{service.description}</span>
                </div>
                <div className="service">
                  <p>Lorem Ipsum</p>
                  <span>{service.note}</span>
                </div>
                <div className="service">
                  <p>Lorem Ipsum</p>
                  <span>{service.note}</span>
                </div>
                <div className="service">
                  <p>Lorem Ipsum</p>
                  <span>{service.note}</span>
                </div>
                <div className="service-button">
                  <span>View Details</span>
                </div>
              </div>
            ))}
          {/* <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Business Loans</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div> */}
          {/* <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Checking Accounts</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div>
          <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Savings Accounts</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div>
          <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Debits and Credits</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div>
          <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Life Insurance</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div>
          <div className="services">
            <img src="./icons/apple_2_icon.png"></img>
            <div className="service">
              <p>Business Loans</p>
              <span>It is a long established</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service">
              <p>Lorem Ipsum</p>
              <span>Many publishing</span>
            </div>
            <div className="service-button">
              <span>View Details</span>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default Services;