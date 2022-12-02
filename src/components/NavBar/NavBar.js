import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.scss";
import { logoutUser } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { logoutSuccess } from "../../redux/authSlice";
import { useState, useEffect } from "react";
const NavBar = () => {
  const isLogin = useSelector((state) => state.auth?.login.isLogin);
  let user = useSelector((state) => state.auth.login?.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const id = user?.user._id;
  let accessToken = user?.accessToken;
  let axiosJWT = createAxios(user, dispatch, logoutSuccess);
  // token,id,dispatch, history, axiosJWT
  const handleLogout = () => {
    console.log(accessToken);
    logoutUser(accessToken, id, dispatch, history);
    localStorage.setItem("token", "");
  };
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  useEffect(() => {
    console.log(accessToken);
  }, [accessToken]);
  return (
    <nav className={fix ? "navbar_fixed" : "navbar-container"}>
      <NavLink to="/" exact className="navbar-home">
        Trang chủ
      </NavLink>
      <NavLink exact to="/products/all" className="navbar-products">
        Sản phẩm
      </NavLink>

      {user && isLogin ? (
        <>
          <p className="navbar-user">
            Xin Chào, <span> {user.user.name} </span>
          </p>
          {user?.user.admin ? (
            <>
              <NavLink to="/users" className="navbar-users">
                Người dùng
              </NavLink>
              <NavLink to="/dashboard_admin" className="navbar-dashboard_admin">
                Quản Lý
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/account" className="navbar-account">
                Tài Khoản
              </NavLink>
              <NavLink to="/homepage" className="navbar-homepage">
                HomePage
              </NavLink>
            </>
          )}

          <div className="dropdown">
            <button className="dropbtn">Bảng điều khiển</button>
            <div className="dropdown-content">
              <NavLink
                to="/logout"
                className="navbar-logout"
                onClick={handleLogout}
              >
                Đăng xuất
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-login">
            Đăng nhập
          </NavLink>
          <NavLink to="/register" className="navbar-register">
            Đăng ký
          </NavLink>
          <NavLink to="/about" className="navbar-about">
            Về chúng tôi
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
