import Static from "../../static/Static";
import hero5 from "../../images/hero5.svg";
import "./Blog.css";

const Blog = () => {
  return (
    <Static
      title={"Our internal process and longerm vision"}
      img={hero5}
      text={
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the"
      }
      btn={"Read More"}
    />
  );
};

export default Blog;
