import useWindowWidth from "../hooks/useWindowWidth";

function Card({ card }) {
  let {
    price,
    cardChipIcon,
    holderName,
    duration,
    cardNumber,
    cardMasterIcon,
    styles,
  } = card;

  let {
    background,
    cardDataBackground,
    spanColor,
    mainColor,
    marginTop,
    borderTop,
  } = styles;

  let spanProperty = { color: spanColor };
  let mainProperty = { color: mainColor };

  const { isTablet, isBrowser } = useWindowWidth();
  if (isBrowser || isTablet) {
    cardNumber = cardNumber;
  } else {
    cardNumber = cardNumber.slice(4);
  }

  if (!isBrowser) {
    holderName =
      holderName.split(" ")[0] + " " + holderName.split(" ")[1][0] + ".";
  }

  return (
    <div className="main-card-box" style={{ backgroundColor: background }}>
      <div className="first-section">
        <div className="balance">
          <span style={spanProperty}>Balance</span>
          <p style={mainProperty}>{price}</p>
        </div>
        <img className="card-chip" src={cardChipIcon} alt="Card chip" />
      </div>
      <div className="second-section">
        <div className="holder">
          <span style={spanProperty}>HOLDER</span>
          <p className="full-name" style={mainProperty}>
            {holderName}
          </p>
        </div>
        <div className="duration">
          <span style={spanProperty}>VALID THRU</span>
          <p style={mainProperty}>{duration}</p>
        </div>
      </div>
      <div
        className="third-section"
        style={{
          backgroundColor: cardDataBackground,
          borderTop: borderTop,
          marginTop: marginTop,
        }}
      >
        <p className="card-number" style={mainProperty}>
          {cardNumber}
        </p>
        <img
          src={cardMasterIcon}
          className="card-master-image"
          alt="Mastercard"
        />
      </div>
    </div>
  );
}

export default Card;
