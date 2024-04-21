import "./Hero.css";
import hero1 from "../../images/hero1.svg";
import logotip from "../../images/Hero-Logos.svg";
const Hero = () => {
  return (
    <div className="hero-page">
      <div className="container">
        <div className="hero-section">
          <div className="hero-about-text">
            <h1>Prosper with our bespoke solutions</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="hero-btns">
              <button className="btn-hero1">See our services</button>
              <button className="btn-hero2">See All Services </button>
            </div>
            <div className="hero_item">Worked with 100+ Companies</div>
            <p>
              <img src={logotip} alt="logotip" />
            </p>
          </div>

          <div>
            <img src={hero1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
