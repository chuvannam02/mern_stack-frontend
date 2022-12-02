import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAProduct } from "../redux/apiRequest";
import "./ProductDetailed.scss";
import { addToCart } from "../redux/cartSlice";
import Lightbox from "react-image-lightbox";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
const ProductDetailed = () => {
  const aProduct = useSelector((state) => state.products.product?.Product);
  const id = useParams();
  const _id = id["id"];
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState(aProduct?.["0"].data.images1);
  const history = useHistory();
  const [add_view, setAdd_view] = useState(false);
  const handleAdd_view = (status) => {
    setAdd_view(status);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    GetAProduct(dispatch, _id);
    setIsLoading(true);
  }, [dispatch, _id]);

  //   Open Light box when click images
  const images = [
    aProduct?.[0].data.images1,
    aProduct?.[0].data.images2,
    aProduct?.[0].data.images3,
    aProduct?.[0].data.images4,
    aProduct?.[0].data.images5,
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const handleClickReviewImg = () => {
    let index = images.findIndex((item) => item === img);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  // quantity items
  const [quantity, setQuantity] = useState(1);
  const handleIncrementItem = () => {
    setQuantity((quantity) => Number(quantity) + 1);
  };
  const handleDecrementItem = () => {
    if (Number(quantity) >= 1) {
      setQuantity((quantity) => Number(quantity) - 1);
    }
  };
  const cart = useSelector((state) => state.carts?.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div className="app">
        {isLoading ? (
          <>
            <div>
              <div className="product_container">
                {aProduct?.map((product, id) => (
                  <div key={id} className="content_left">
                    <div className="current_img">
                      <img
                        src={img}
                        alt="Ảnh hiện tại"
                        width={300}
                        onClick={() => handleClickReviewImg()}
                      />
                    </div>
                    <div className="review_images">
                      <div className="review_images_small">
                        <img
                          src={product.data.images1}
                          alt="Ảnh hiện tại"
                          onClick={() => setImg(aProduct?.["0"].data.images1)}
                          className={
                            img === aProduct?.["0"].data.images1 ? "active" : ""
                          }
                        />
                      </div>
                      <div className="review_images_small">
                        <img
                          src={product.data.images2}
                          alt="Ảnh hiện tại"
                          onClick={() => setImg(aProduct["0"].data.images2)}
                          className={
                            img === aProduct?.["0"].data.images2 ? "active" : ""
                          }
                        />
                      </div>
                      <div className="review_images_small">
                        <img
                          src={product.data.images3}
                          alt="Ảnh hiện tại"
                          onClick={() => setImg(aProduct?.["0"].data.images3)}
                          className={
                            img === aProduct?.["0"].data.images3 ? "active" : ""
                          }
                        />
                      </div>
                      <div className="review_images_small">
                        <img
                          src={product.data.images4}
                          alt="Ảnh hiện tại"
                          onClick={() => setImg(aProduct?.["0"].data.images4)}
                          className={
                            img === aProduct?.["0"].data.images4 ? "active" : ""
                          }
                        />
                      </div>
                      <div className="review_images_small">
                        <img
                          src={product.data.images5}
                          alt="Ảnh hiện tại"
                          onClick={() => setImg(aProduct?.["0"].data.images5)}
                          className={
                            img === aProduct?.["0"].data.images5 ? "active" : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="content_right">
                  {aProduct?.map((item) => (
                    <div className="main_content" key={item._id}>
                      <div className="basic_info">
                        <div className="title">{item.data.name}</div>
                        <div className="price">{item.data.price}</div>
                        <div className="size">
                          <h4>Kích thước</h4>
                          <div className="size_item">
                            {item.data.size?.map((value, i) => (
                              <div key={i}>
                                {Object.values(value)?.map((vl, id) => (
                                  <div className="size_list_item" key={id}>
                                    <div>{vl}</div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="action">
                          <label>Số lượng</label>
                          <div className="input_quantity">
                            <button
                              className="disable"
                              onClick={handleDecrementItem}
                              disabled={quantity >= 1 ? false : true}
                            >
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                alt="remove-icon"
                                width="20"
                                height="20"
                              />
                            </button>
                            <input
                              type="text"
                              min={1}
                              className="quantity"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                            <button
                              className="add"
                              onClick={handleIncrementItem}
                            >
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                alt="add-icon"
                                width="20"
                                height="20"
                              />
                            </button>
                          </div>

                          <button
                            className="buy"
                            onClick={() =>
                              dispatch(
                                addToCart(
                                  aProduct.data.id,
                                  aProduct.data.title,
                                  aProduct.data.images1,
                                  aProduct.data.price
                                )
                              )
                            }
                          >
                            Chọn mua
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                  animationDuration={500}
                />
              )}
            </div>
          </>
        ) : (
          <p>Is Loading...</p>
        )}
        {aProduct?.map((item, i) => (
          <div key={i}>
            <div className="detail_info">
              <h4>Thông số sản phẩm</h4>
              <ul>
                <div className="list_detail_info">
                  <li>Thương Hiệu: {item.data.brand}</li>
                </div>
                <div className="list_detail_info">
                  <li>CPU: {item.data.cpu}</li>
                </div>
                <div className="list_detail_info">
                  <li>RAM: {item.data.ram}</li>
                </div>
                <div className="list_detail_info">
                  <li>Ổ Cứng: {item.data.disk}</li>
                </div>
                <div className="list_detail_info">
                  <li>VGA: {item.data.vga}</li>
                </div>
                <div className="list_detail_info">
                  <li>Màn Hình: {item.data.monitor}</li>
                </div>
                <div className="list_detail_info">
                  <li>Màu Sắc: {item.data.color}</li>
                </div>
              </ul>
              {add_view === true ? (
                <div className="additional_info">
                  <ul>
                    <div className="list_additional_info">
                      <li>Pin: {item.data.battery}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Âm Thanh: {item.data.audio}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Cổng Giao Tiếp: {item.data.communication_port}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Dung Lượng Tối Đa: {item.data.max}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Hệ Điều Hành: {item.data.operation}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Cân Nặng: {item.data.weight}</li>
                    </div>
                    <div className="list_additional_info">
                      <li>Webcam: {item.data.webcam}</li>
                    </div>
                  </ul>
                  <span className="hide" onClick={() => handleAdd_view(false)}>
                    Rút Gọn
                  </span>
                </div>
              ) : (
                <span className="show" onClick={() => handleAdd_view(true)}>
                  ... Xem Thêm
                </span>
              )}
            </div>
          </div>
        ))}
        <div className="shopping-cart" onClick={() => history.push("/cart")}>
          <FiShoppingCart id="cartIcon" style={{ width: "15px" }} />
          <p>{getTotalQuantity() || 0}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;
