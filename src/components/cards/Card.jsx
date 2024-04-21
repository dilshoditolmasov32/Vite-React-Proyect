import "./Card.css";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import next from "../../images/nect-icon.svg";

const Card = () => {
  const cardInfo = [
    {
      id: 1,
      image: user1,
      title: "Why you have to digitalize in 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      btnlink: "Learn More",
    },
    {
      id: 2,
      image: user2,
      title: "Our internal process and longerm vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      btnlink: "Learn More",
    },
    {
      id: 3,
      image: user3,
      title: "Helping the next generation of leaders",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      btnlink: "Learn More",
    },
  ];

  const data = cardInfo?.map((value) => (
    <div className="card" key={value.id}>
      <div className="card-image">
        <img src={value.image} alt="users" />{" "}
      </div>
      <div className="card-about">
        <h4 className="card-title">{value.title} </h4>
        <p className="card-desc">{value.text}</p>
        <button className="card-btn">
          {value.btnlink} <img src={next} alt="icon" />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="card-page">
      <div className="container">
        <h2>Latest Blog & News</h2>
        <div className="cards">{data}</div>
      </div>
    </div>
  );
};

export default Card;
