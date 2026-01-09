import Card from "../components/Card";

const CreditCards = ({cards, cardList, cardAdditionList, cardSettingData}) => {

  function AddCard({searchBox}) {
    return (
      <input className="add-card-input" placeholder={searchBox.holdname} type="text"></input>
    )
  }

  return (
    <div className="credit-cards-container">
      <div className="main-dash-content credit-cards">
        <div className="main-card-text">
          <p>My Cards</p>
        </div>
        <div className="cards-section">
          <Card card={cards.find((item) => item.id == 1)} />
          <Card card={cards.find((item) => item.id == 2)} />
          <Card card={cards.find((item) => item.id == 1)} />
        </div>
        <div className="card-expense-and-list-section">
          <div className="card-expense-statistics">
            <div className="card-expense-statistics-text">
              <p>Card Expense Statistics</p>
            </div>
            <div className="card-expense-statistics-box">
              <img src="./icons/card_expense_icon.png"></img>
              <div className="card-expense-content">
                <div className="dbl-bank">
                  <span></span>
                  <p>DBL Bank</p>
                </div>
                <div className="brc-bank">
                  <span></span>
                  <p>BRC Bank</p>
                </div>
                <div className="arm-bank">
                  <span></span>
                  <p>DBL Bank</p>
                </div>
                <div className="mcp-bank">
                  <span></span>
                  <p>DBL Bank</p>
                </div>
              </div>
            </div>
          </div>
          <div className="last-transaction card-list">
            <div className="last-transaction-text card-list-text">
              <p>Card List</p>
            </div>
            <div className="last-transaction-box card-list-box">
              {cardList.map((card, index) => (
                <div className="card-list-items" key={index}>
                  <div className="card-list-icon">
                    <img style={{backgroundColor: card.backgroundColor}} src={card.image}></img>
                  </div>
                  <div className="last-transaction-details card-list-details">
                    <span className="last-transaction-description card-list-text">Card Type</span>
                    <span className="last-transaction-date card-list-name">{card.type}</span>
                  </div>
                  <div className="last-transaction-details card-list-details">
                    <span className="last-transaction-description card-list-text">Bank</span>
                    <span className="last-transaction-date card-list-name">{card.bank}</span>
                  </div>
                  <div className="last-transaction-details card-list-details">
                    <span className="last-transaction-description card-list-text">Card Number</span>
                    <span className="last-transaction-date card-list-name">{card.number}</span>
                  </div>
                  <div className="last-transaction-details card-list-details">
                    <span className="last-transaction-description card-list-text">Namain Card</span>
                    <span className="last-transaction-date card-list-name">{card.name}</span>
                  </div>
                  <span className="last-transaction-description card-list-view">View Details</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="add-card-and-setting">
          <div className="add-card">
            <div className="add-card-text">
              <p>Add New Card</p>
            </div>
            <div className="add-card-box">
              <div className="add-card-description">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, beatae ex maiores explicabo, aspernatur hic, in incidunt corporis amet omnis nobis unde sint atque possimus odio dolor repudiandae? Voluptatum, quidem.</span>
              </div>

              <div className="add-card-form">
                <div className="add-card-form-info">
                  <label>Card Type</label>
                  <AddCard searchBox={cardAdditionList.find((item) => item.id == 1)} />
                </div>
                <div className="add-card-form-info">
                  <label>Name On Card</label>
                  <AddCard searchBox={cardAdditionList.find((item) => item.id == 2)} />
                </div>
                <div className="add-card-form-info">
                  <label>Card Number</label>
                  <AddCard searchBox={cardAdditionList.find((item) => item.id == 3)} />
                </div>
                <div className="add-card-form-info">
                  <label>Expiration Date</label>
                  <AddCard searchBox={cardAdditionList.find((item) => item.id == 4)} />
                </div>
              </div>
              <div className="add-button">
                <span>Add Card</span>
              </div>
            </div>
          </div>

          <div className="card-setting">
            <div className="card-setting-text">
              <p>Card Setting</p>
            </div>
            <div className="card-setting-box">
              {cardSettingData.map((setting) => (
                <div className="card-setting-item">
                  <div className="card-setting-icon" style={{backgroundColor: setting.backgroundColor}}>
                    <img src={setting.image}></img>
                  </div>
                  <div className="card-setting-details">
                    <span className="last-transaction-description card-setting-name">{setting.name}</span>
                    <span className="last-transaction-date card-setting-description">{setting.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
