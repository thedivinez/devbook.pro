import { navItems } from "../lib/data";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
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
            {navItems.map((item) => (
              <li className="mx-4">
                <a
                  href={item.link}
                  className={location.pathname === item.link && "active"}
                >
                  {item.title}
                </a>
              </li>
            ))}
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
