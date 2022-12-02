import React from "react";
import "./Home.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assets/images/picture1.jpg";
import pic2 from "../../assets/images/picture2.jpg";
import pic3 from "../../assets/images/picture3.jpg";
import pic4 from "../../assets/images/picture4.jpg";
import pic5 from "../../assets/images/picture5.png";
import pic6 from "../../assets/images/picture6.jpg";
import pic7 from "../../assets/images/picture7.png";
import Items from "../Items/Items";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import { FiShoppingCart } from "react-icons/fi";
import Ontop from "../Ontop/Ontop";
const Home = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.carts?.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="home">
        <div className="carousel">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            <Carousel.Item>
              <img className="d-block w-100" src={pic1} alt="First slide" />
              {/* 
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic5} alt="fifth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic6} alt="sixth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic7} alt="seventh slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="home_product">
          <div className="home__container">
            <div className="home__row">
              <Items
                id={5}
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />

              <Items
                id={6}
                title="The Lean Startup: How Constant Innovation Create Radically Successful Businesses Paperback"
                price={29}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg"
              />

              <Items
                id={7}
                title="Samsung LC49RG90SSUXEN 49 Curve Led Gaming Monitor"
                price={199}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />

              <Items
                id={8}
                title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Siver (4th Generation)"
                price={598}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />

              <Items
                id={9}
                title="Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk"
                price={229}
                image="https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg"
                rating={4}
              />

              <Items
                id={10}
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual QHD 5120 x 1440"
                price={1094}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
            </div>
          </div>
          <div className="shopping-cart" onClick={() => history.push("/cart")}>
            <FiShoppingCart id="cartIcon" style={{ width: "15px" }} />
            <p>{getTotalQuantity() || 0}</p>
          </div>
        </div>
        <Ontop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
