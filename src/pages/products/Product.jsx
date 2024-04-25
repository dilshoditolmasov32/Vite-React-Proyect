import "./Product.css";
import { useState, useEffect } from "react";
import axios from "../../api";
import {} from "module";
import { Link } from "react-router-dom";
import hero5 from "../../images/hero5.svg";
import Static from "../../static/Static";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  let products = data?.slice(0, 16).map((el) => (
    <div className="product" key={el.id}>
      <Link className="product__image" to={`/single`}>
        <img src={el.images[0]} alt="" />
      </Link>
      <div className="product__name">{el.title}</div>
      <p className="product__desc">{el.description}</p>
      <div className="product__price">Narxi: {el.price}$</div>
      <div className="product__more__about">
        <div className="rating">{el.rating} </div>
        <div className="product__count">{el.stock}ta</div>
      </div>

      <div className="product__brand">Brandi: {el.brand}</div>
    </div>
  ));
  return (
    <>
      <Static
        title={"Our internal process and longerm vision"}
        img={hero5}
        text={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the"
        }
        btn={"Read More"}
      />

      <div className="products-page">
        <div className="container">
          <h2>All Products</h2>
          <div className="products">{products}</div>
        </div>
      </div>
    </>
  );
}

export default Product;
