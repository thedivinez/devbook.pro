import { useState } from "react";

const CardPayments = () => {
  const [saveCard, setSaveCard] = useState(true);
  return (
    <form className="payment-card-form">
      <div className="form-group w-100">
        <label htmlFor="card1">Card Number</label>
        <input type="text" id="card1" />
        <div className="right-icon">
          <i className="flaticon-lock"></i>
        </div>
      </div>
      <div className="form-group w-100">
        <label htmlFor="card2"> Name Card</label>
        <input type="text" id="card2" />
      </div>
      <div className="form-group">
        <label htmlFor="card3">Expiration</label>
        <input type="text" id="card3" placeholder="MM/YY" />
      </div>
      <div className="form-group">
        <label htmlFor="card4">CVV</label>
        <input type="text" id="card4" placeholder="CVV" />
      </div>
      <div className="form-group check-group">
        <input
          id="card5"
          type="checkbox"
          checked={saveCard}
          onChange={() => setSaveCard(!saveCard)}
        />
        <label htmlFor="card5">
          <span className="title">QuickPay</span>
          <span className="info">
            Save this card information to my Devbook account and make faster
            payments.
          </span>
        </label>
      </div>
      <div className="form-group">
        <input type="submit" className="custom-button" value="make payment" />
      </div>
    </form>
  );
};

export default CardPayments;
