const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="/">
              <img src="/images/logo/logo.png" alt="logo" />
            </a>
          </div>
          <ul className="menu">
            <li className="mx-4">
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li className="mx-4">
              <a href="/about-us">About Us</a>
            </li>
            <li className="mx-4">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
