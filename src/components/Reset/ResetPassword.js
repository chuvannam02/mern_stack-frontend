import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../../redux/apiRequest";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const notify = () =>
    toast.success("Reset Password Successfully!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(token);
  const onSubmit = (data) => {
    const User_pass = {
      password: data.password,
    };
     const User_token = {
      "token": token,
    };
    if (User_pass && User_token) {
      resetPassword(User_pass, dispatch, history, User_token);
      notify();
    }
  };
  return (
    <div>
      <div className="reset">
        <h3 className="title">Nhập mật khẩu mới của bạn tại đây</h3>
        <form>
          <div className="form-control">
            <label>Mật khẩu</label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
            />

            {errors.password?.type === "required" && (
              <p style={{ color: "red" }} role="alert">
                Vui lòng điền vào phần mật khẩu
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p style={{ color: "red" }} role="alert">
                Mật khẩu phải từ 6 ký tự trở lên
              </p>
            )}
          </div>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </form>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
};

export default ResetPassword;
