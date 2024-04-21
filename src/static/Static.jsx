import "./Static.css";

const Static = ({ title, text, img, btn }) => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-section">
          <div>
            <h1>{title}</h1>
            <p className="hero-text">{text}</p>
            <button className="hero-btn">{btn}</button>
          </div>
          <div>
            <img src={img} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
