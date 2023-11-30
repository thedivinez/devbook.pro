const TourSection = () => {
  return (
    <section className="tour-section padding-top padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tour-content">
              <div className="section-header-3 left-style">
                <span className="cate">take a look at our tour</span>
                <h2 className="title">Guarantees you can trust.</h2>
                <p className="ml-0">
                  Because more peace of mind means more love for the event.
                </p>
              </div>
              <ul className="list-tour">
                <li>
                  <div className="thumb">
                    <img src="/images/tour/icon01.png" alt="tour" />
                  </div>
                  <div className="content">
                    <h5 className="title">Get In Guarantee</h5>
                    <p>Your money back guarantee if you cant attent.</p>
                  </div>
                </li>
                <li>
                  <div className="thumb">
                    <img src="/images/tour/icon02.png" alt="tour" />
                  </div>
                  <div className="content">
                    <h5 className="title">price match guarantee</h5>
                    <p>
                      The best prices are here. You get the best value for your
                      mmoney
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="tour-thumb">
              <img src="/images/tour/tour.png" alt="tour" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
