const Philosophy = () => {
  return (
    <div
      className="philosophy-section padding-top padding-bottom bg-one bg_img bg_quater_img"
      data-background="/images/about/about-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-3 bg-two">
            <div className="philosophy-content">
              <div className="section-header-3 left-style">
                <span className="cate">Take look at</span>
                <h2 className="title">Our philosophy</h2>
                <p className="ml-0">
                  We are the best in person movie reviewing company that helps
                  you make informed decisions about the movies you make. Our
                  goal is to help you create the best possible movies, and we’re
                  committed to providing you with the support and guidance you
                  need to achieve that
                </p>
              </div>
              <ul className="phisophy-list">
                <li>
                  <div className="thumb">
                    <img src="/images/philosophy/icon1.png" alt="philosophy" />
                  </div>
                  <h5 className="title">Honesty & Fairness</h5>
                </li>
                <li>
                  <div className="thumb">
                    <img src="/images/philosophy/icon2.png" alt="philosophy" />
                  </div>
                  <h5 className="title">Clarity & Transparency</h5>
                </li>
                <li>
                  <div className="thumb">
                    <img src="/images/philosophy/icon3.png" alt="philosophy" />
                  </div>
                  <h5 className="title">Focus on Customers</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
