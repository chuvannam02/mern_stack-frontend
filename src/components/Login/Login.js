import { useHistory } from "react-router-dom";
import React from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";
import Footer from "../Footer/Footer";
const Login = () => {
  const notify1 = () =>
    toast.error("Login failed!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const notify2 = () =>
    toast.error("Please check your email and password again!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const msg = useSelector((state) => state.auth.login?.mss);
  // Tránh reload lại trang khi ấn nút submit (continue)
  const onSubmit = (data) => {
    const newUser = {
      email: data.email,
      password: data.password,
    };
    if (newUser) {
      loginUser(newUser, dispatch, history);
      // if (msg === false) {
      //   notify1();
      //   notify2();
      // }
    }
  };
  const handleForget = (e) => {
    e.preventDefault();
    history.push("/forget_password");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };
  return (
    <>
      <div className="login">
        <div className="App">
          <h3 className="title">Đăng nhập</h3>
          <form>
            <div className="form-control">
              <label>Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-z0-9._%+-]+@gmail.com$/i,
                    message: "Vui lòng nhập đúng định dạng email như sau: abc@gmail.com !",
                  },
                })}
                placeholder="Enter your email"
                type="text"
                name="email"
                autoComplete="on"
                id="email"
                aria-invalid={errors.email ? "true" : "false"}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
              {errors.email?.type === "required" && (
                <p style={{ color: "red" }} role="alert">
                  Vui lòng điền vào phần email!
                </p>
              )}
            </div>

            <div className="form-control">
              <label>Mật khẩu</label>
              <input
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="on"
              />

              {errors.password?.type === "required" && (
                <p style={{ color: "red" }} role="alert">
                  Vui lòng điền vào phần mật khẩu!
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  Mật khẩu của bạn không được phép dưới 6 ký tự
                </p>
              )}
            </div>
            <div className="forget_password">
              <button type="submit" onClick={handleSubmit(onSubmit)}>
                Login
              </button>
              <p onClick={handleForget}>Quên mật khẩu?</p>
            </div>
          </form>
          <div className="login_account">
            <p onClick={handleRegister}>Nếu bạn chưa có tài khoản. Hãy ấn vào đây để đăng ký!</p>
          </div>
          <div>
            {msg === false ? <ToastContainer autoClose={3000} /> : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
