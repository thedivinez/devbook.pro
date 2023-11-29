import { useState } from "react";
import { movies } from "../lib/data";
import { useSearchParams } from "react-router-dom";

const CheckOut = () => {
  const [time, setTime] = useState("09:40");
  const [saveCard, setSaveCard] = useState(true);
  const [method, setMethod] = useState("card");
  const [queryParameters] = useSearchParams();
  const movie = movies.findLast(
    (movie) => movie.id === queryParameters.get("m")
  )!;

  const getDate = () => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <section
        className="details-banner hero-area bg_img seat-plan-banner"
        data-background="/images/banner/banner04.jpg"
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content style-two">
              <h3 className="title">{movie.title}</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="page-title bg-one">
        <div className="container">
          <div className="page-title-area">
            <div className="item md-order-1">
              <a href="/" className="custom-button back-button">
                <i className="flaticon-double-right-arrows-angles"></i>back
              </a>
            </div>
            <div className="item date-item">
              <span className="date">Session Start</span>
              <select
                className="select-bar"
                onChange={(e) => {
                  console.log("================");
                  setTime(e.target.value);
                }}
              >
                <option value="09:40">09:40</option>
                <option value="13:45">13:45</option>
                <option value="15:45">15:45</option>
                <option value="19:50">19:50</option>
              </select>
            </div>
            <div className="item">
              <h5 className="title">{movie.duration}</h5>
              <p>Session Duration</p>
            </div>
          </div>
        </div>
      </section>
      <div className="movie-facility padding-bottom padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-widget checkout-contact">
                <h5 className="title">Contact Details</h5>
                <form className="checkout-contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Last name" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone number " />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Email" />
                  </div>
                </form>
              </div>
              <div className="checkout-widget checkout-card mb-0">
                <h5 className="title">Payment Option</h5>
                <ul className="payment-option">
                  <li className={method === "card" ? "active" : ""}>
                    <button onClick={(_) => setMethod("card")}>
                      <img src="/images/payment/card.png" alt="payment" />
                      <span>Credit Card</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={method === "crypto" ? "active" : ""}
                      onClick={(_) => setMethod("crypto")}
                    >
                      <img src="/images/payment/paypal.png" alt="payment" />
                      <span>crypto</span>
                    </button>
                  </li>
                </ul>
                <h6 className="subtitle">Enter Your Card Details</h6>
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
                      onChange={() => {
                        setSaveCard(!saveCard);
                      }}
                    />
                    <label htmlFor="card5">
                      <span className="title">QuickPay</span>
                      <span className="info">
                        Save this card information to my Devbook account and
                        make faster payments.
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="custom-button"
                      value="make payment"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="booking-summery bg-one">
                <h4 className="title">booking summary</h4>
                <ul>
                  <li>
                    <h6 className="subtitle">
                      <span>Title</span>
                      <span className="subtitle">{movie?.title}</span>
                    </h6>
                    <div className="info">
                      <span>Date</span>
                      <span>{`${getDate()} ${time}`}</span>
                    </div>
                  </li>

                  <li>
                    <h6 className="subtitle mb-0">
                      <span>Tickets Price</span>
                      <span>${movie.price}</span>
                    </h6>
                  </li>
                </ul>
                <ul className="side-shape">
                  <li>
                    <h6 className="subtitle">
                      <span>food & bevarage</span>
                      <span>$0</span>
                    </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="info">
                      <span>price</span>
                      <span>$150</span>
                    </span>
                    <span className="info">
                      <span>vat</span>
                      <span>${movie.price * 0.15}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="proceed-area text-center">
                <h6 className="subtitle">
                  <span>Amount Payable</span>
                  <span>${movie.price * 0.15 + movie.price}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
