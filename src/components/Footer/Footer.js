import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.scss";
const Footer = () => {
  const notify = () =>
    toast.success("Subcribe Successfully!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  return (
    <div className="footer">
      <div className="footer_cmp">
        <Container>
          <footer>
            <Row>
              <Col>
                <div className="footer_categories">
                  <h1>Phân loại</h1>
                  <ul>
                    <li>
                      <a href="/">Laptop</a>
                    </li>
                    <li>
                      <a href="/">Phone</a>
                    </li>
                    <li>
                      <a href="/">Headphone</a>
                    </li>
                    <li>
                      <a href="/">Phụ kiện</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="footer_help">
                  <Row>
                    <h1>Trợ giúp</h1>
                  </Row>
                  <ul>
                    <Row>
                      <li>Theo dõi đơn hàng</li>
                    </Row>
                    <Row>
                      <li>Trả hàng</li>
                    </Row>
                    <Row>
                      <li>Vận chuyển</li>
                    </Row>
                    <Row>
                      <li>FAQs</li>
                    </Row>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="footer_getintouch">
                  <Row>
                    <h1>Liên lạc</h1>
                  </Row>
                  <ul>
                    <Row>
                      <p>
                        "Nếu có bất kỳ thắc mắc, câu hỏi nào. Vui lòng đến địa
                        chỉ của cửa hàng tại đại học Kinh tế quốc dân, hoặc gọi
                        điện cho chúng tôi qua đường dây nóng 19001001"
                      </p>
                    </Row>
                    <Row>
                      <Col>
                        <li className="footer_Icons">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </li>
                      </Col>
                      <Col>
                        <li className="footer_Icons">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                          </svg>
                        </li>
                      </Col>
                      <Col>
                        <li className="footer_Icons">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path>
                          </svg>
                        </li>
                      </Col>
                    </Row>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="footer_news">
                  <h1>Thông tin mới nhất về các mặt hàng</h1>
                  <ul>
                    <li>
                      <div>
                        <input type="text" placeholder="email@example.com" />
                      </div>
                    </li>
                    <li>
                      <button className="footer_btn" onClick={notify}>
                        Đăng ký nhận thông tin
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <hr style={{ color: "white" }} />
            <Row xs="auto" className="justify-content-md-center">
              <div className="creditsIcons">
                <ul>
                  <Col>
                    <li>
                      <img
                        src="https://i.imgur.com/AHCoUZO.png"
                        className="img1"
                        alt=""
                      />
                    </li>
                  </Col>
                  <Col>
                    <li>
                      <img
                        src="https://i.imgur.com/JZRipBg.png"
                        className="img2"
                        alt=""
                      />
                    </li>
                  </Col>
                  <Col>
                    <li>
                      <img
                        src="https://i.imgur.com/l8OAGyo.png"
                        className="img3"
                        alt=""
                      />
                    </li>
                  </Col>
                  <Col>
                    <li>
                      <img
                        src="https://i.imgur.com/IDHC2iv.png"
                        className="img4"
                        alt=""
                      />
                    </li>
                  </Col>
                </ul>
              </div>
            </Row>
            <Row>
              <div className="footer_paragraph">
                <Row xs="auto" className="justify-content-md-center">
                  <p className="para_item">
                    "Bản quyền năm 2022 || Mẫu website được tạo bởi đại học Kinh
                    tế quốc dân
                  </p>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                  <Col>
                    <a className="para_item" href="/">
                      Chu Nam
                    </a>
                  </Col>
                  <Col>
                    <a className="para_item" href="/">
                      KHMT
                    </a>
                  </Col>
                  <Col>
                    <a className="para_item" href="/">
                      NEU
                    </a>
                  </Col>
                </Row>
              </div>
            </Row>
          </footer>
        </Container>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Footer;
