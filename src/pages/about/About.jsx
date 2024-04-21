// import Hero from "../../components/hero/Hero";
import Static from "../../static/Static";
import hero2 from "../../images/hero2.svg";
import "./About.css";

const About = () => {
  const aboutData = [
    {
      id: 1,
      count: 15,
      title: "Awards received",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 2,
      count: 500,
      title: "Clients served",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 3,
      count: 34,
      title: "Employees",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 4,
      count: 134,
      title: "Custom solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
  ];

  const data = aboutData?.map((element) => (
    <div className="article" key={element.id}>
      <div className="count">{element.count}+</div>
      <div className="title">{element.title}</div>
      <p className="desc">{element.text}</p>
    </div>
  ));

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-section">
          <Static
            title={
              "We value human, organizational, and operational intelligence, not just artificial"
            }
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
            }
            btn={"Work With Us"}
            img={hero2}
          />
          <div className="lang-switcher">
            <h2>
              The energy of a start-up combined with 30 years of experience
            </h2>
            <p className="text_item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>

          <div className="article__about">{data}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
