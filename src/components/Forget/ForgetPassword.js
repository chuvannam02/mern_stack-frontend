import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { forgetPassword } from "../../redux/apiRequest";
const Dashboard = () => {
    const notify = () =>
    toast.success("Send link reset password to your email successfully!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit= (data)=> {
    const User_forget = {
      email: data.email,
    };
    if (User_forget) {
        forgetPassword(User_forget,dispatch);
        notify();
    }
  }
  return (
    <div className="forget">
      <h3 className="title">Forget Password</h3>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-z0-9._%+-]+@gmail.com$/i,
                message: "Please enter format email: abc@gmail.com !",
              },
            })}
            placeholder="Enter your email"
            type="text"
            name="email"
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          {errors.email?.type === "required" && (
            <p style={{ color: "red" }} role="alert">
              Email is required
            </p>
          )}
          </div>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
        <ToastContainer autoClose={3000}/>
    </div>
  );
};

export default Dashboard;
