import Static from "../../static/Static";
import "./Service.css";
import hero3 from "../../images/hero3.svg";
const Service = () => {
  return (
    <div className="service-page">
      <Static
        title={"We serve clients with ground breaking solutions"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        }
        img={hero3}
      />
    </div>
  );
};

export default Service;
