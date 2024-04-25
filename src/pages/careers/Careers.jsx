import Static from "../../static/Static";
import hero4 from "../../images/hero4.svg";
import "./Careers.css";
import Card from "../../components/cards/Card";

const Careers = () => {
  return (
    <div>
      <Static
        title={"We hired people who are very passionate about what they do"}
        text={
          "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw."
        }
        btn={"View Positions"}
        img={hero4}
      />

      <Card />
    </div>
  );
};

export default Careers;
