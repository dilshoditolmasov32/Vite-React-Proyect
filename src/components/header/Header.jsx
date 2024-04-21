import "./Header.css";
import logo from "../../images/header-logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const navbarData = [
    { title: "About Us", url: "/about" },
    { title: "Careers", url: "/careers" },
    { title: "Services", url: "/services" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "https://t.me/dilshodbek_zafarovich" },
  ];

  const DATA = navbarData?.map((val, inx) => (
    <Link to={val.url} className="navbar-link" key={inx}>
      {val.title}
    </Link>
  ));

  return (
    <div className="header-page">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="header-logo" />
            </Link>
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
