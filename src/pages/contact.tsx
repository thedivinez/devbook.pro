import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mesasage has been send", { position: "bottom-left" });
  };
  return (
    <div>
      <section
        className="main-page-header speaker-banner bg_img"
        data-background="/images/banner/banner07.jpg"
      >
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">contact us</h2>
            <ul className="breadcrumb">
              <li>
                <a href="/"> Home </a>
              </li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section padding-top padding-bottom">
        <div className="contact-container">
          <div
            className="bg-thumb bg_img"
            data-background="/images/contact/contact.jpg"
          ></div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7 col-lg-6 col-xl-5">
                <div className="section-header-3 left-style">
                  <span className="cate">contact us</span>
                  <h2 className="title">get in touch</h2>
                  <p>
                    We’d love to talk about how we can work together. Send us a
                    message below and we’ll respond as soon as possible.
                  </p>
                </div>
                <form
                  className="contact-form"
                  id="contact_form_submit"
                  onSubmit={onSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Subject"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter Your Message"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="padding-top padding-bottom contact-info">
                  <div className="info-area">
                    <div className="info-item">
                      <div className="info-thumb">
                        <img
                          src="/images/contact/contact01.png"
                          alt="contact"
                        />
                      </div>
                      <div className="info-content">
                        <h6 className="title">phone number</h6>
                        <a href="tel:2723456789">+27 234 567 89</a>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-thumb">
                        <img
                          src="/images/contact/contact02.png"
                          alt="contact"
                        />
                      </div>
                      <div className="info-content">
                        <h6 className="title">Email</h6>
                        <a href="mailto:info@devbook.pro">info@devbook.pro</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
