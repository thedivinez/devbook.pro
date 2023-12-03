const About = () => {
  return (
    <section className="about-section padding-top padding-bottom">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="event-about-content">
              <div className="section-header-3 left-style m-0">
                <span className="cate">we are Devbook </span>
                <h2 className="title">Get to know us</h2>
                <p>
                  We are a team of experienced movie production professionals
                  who are passionate about sharing our insights and opinions
                  that cover a wide range of genres, from action and adventure
                  to romance and drama. Our goal is to provide you with honest
                  and insightful reviews that will help you make informed
                  decisions about the movies you make. Our team is made up of
                  writers, editors, and movie critics who have years of
                  experience in the industry. We understand the challenges that
                  movie production professionals face when it comes to reviewing
                  films, and we’re here to help.
                </p>
                <p>
                  Whether you’re a director, producer, screenwriter, or any
                  other type of movie production professional, we’ve got you
                  covered. Our reviews are tailored to your needs and provide
                  you with the information you need to make informed decisions
                  about the movies you make.
                </p>
                <p>
                  In addition to our reviews, we also offer a range of services
                  to help you make better movies. Our team of experts can
                  provide you with feedback on your scripts, help you with
                  casting decisions, and provide you with advice on how to
                  improve your production values.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="about-thumb">
              <img src="/images/about/about01.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
