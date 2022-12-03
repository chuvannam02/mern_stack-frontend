import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { getAllProducts } from "../redux/apiRequest";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Products.scss";
import { NavLink } from "react-router-dom";
import { GetAProduct } from "../redux/apiRequest";
import Footer from "../components/Footer/Footer";
const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.carts?.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const productsList = useSelector(
    (state) => state.products.products?.allProducts
  );
  useEffect(() => {
    getAllProducts(dispatch);
  }, []);
  return (
    <>
    {productsList ? (
     <div className="products">
        {productsList?.map((product, index) => {
          return (
            <div key={index}>
              <div className="card">
                <h4>{product.data.name}</h4>
                <img
                  src={product.data.images1}
                  alt="products"
                  className="images"
                />
                <h4 className="price">{product.data.price}</h4>
                <h5>Lượt Xem: {product.data.views}</h5>
                <button className="detail">
                  <NavLink to={"/products/all/" + product.data.id} exact>
                    Chi tiết
                  </NavLink>
                </button>
                <button className="add_to_cart">Thêm vào giỏ hàng</button>
              </div>
            </div>
          );
        })}
      </div>
     ) : (
       <div>Đang trong quá trình tải tài nguyên <div>
     )}
      <Footer />
    </>
  );
};

export default Products;
