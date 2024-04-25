import "./Header.css";
import logo from "../../images/header-logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navbarData = [
    { title: "About Us", url: "/about" },
    { title: "Careers", url: "/careers" },
    { title: "Services", url: "/services" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "https://t.me/dilshodbek_zafarovich" },
    { title: "Product", url: "/product" },
  ];

  const DATA = navbarData?.map((val, inx) => (
    <NavLink to={val.url} className="navbar-link" key={inx}>
      {val.title}
    </NavLink>
  ));

  return (
    <div className="header-page">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="header-logo" />
            </NavLink>
          </div>
          <div className="navbar-item">
            <div className="navbar">{DATA}</div>
            <a href="#" className="navbar-clone">
              Clone project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
