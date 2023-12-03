const Banner = () => {
  return (
    <section className="banner-section">
      <div
        className="banner-bg bg_img bg-fixed"
        data-background="/images/banner/banner01.jpg"
      />
      <div className="container">
        <div className="banner-content">
          <h1 className="title cd-headline clip">
            <span className="d-block">book your tickets</span>
            <span className="color-theme cd-words-wrapper p-0 m-0">
              <b className="is-visible">For Movie Review</b>
              <b>Production Guidence</b>
            </span>
          </h1>
          <small>
            We are the best in person movie reviewing company that helps you
            make informed decisions about the movies you make. Our goal is to
            help you create the best possible movies, and we’re committed to
            providing you with the support and guidance you need to achieve
            that. We have listed some movies below however if you have your own
            movie that you need us to aasist you on, you are free to bring it!
          </small>
          <a href="/checkout?m=custom" className="mt-20 custom-button">
            Request Your Own Movie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
