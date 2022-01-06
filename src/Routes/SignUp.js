import "../Css/SignIn.css";
import SignUp_Image from "../Assets/SignUp_Image.svg";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const url = "http://127.0.0.1:3333/auth/register";

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  function signUp(data) {
    const body = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };

    Axios.post(url, body).then((res) => {
      history.push('/Home')
    });

  }

  return (
    <div className="page-content">
      <div className="form-v7-content">
        <div className="form-left">
          <p className="text-1">Sign Up</p>
          <img src={SignUp_Image} alt="form" />
          <p className="text-2">Privaci policy & Term of service</p>
        </div>
        <form
          className="form-detail"
          onSubmit={handleSubmit((data) => signUp(data))}
        >
          <div className="form-row">
            <label for="username">USERNAME</label>
            <input
              {...register("userName")}
              type="text"
              className="input-text"
              required
            />
          </div>
          <div className="form-row">
            <label for="your_email">E-MAIL</label>
            <input
              {...register("email")}
              type="text"
              name="email"
              className="input-text"
              required
              pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            />
          </div>
          <div className="form-row">
            <label for="password">PASSWORD</label>
            <input
              {...register("password")}
              type="password"
              name="password"
              className="input-text"
              required
            />
          </div>
          <div className="form-row">
            <label for="comfirm_password">CONFIRM PASSWORD</label>
            <input
              type="password"
              name="comfirm_password"
              id="comfirm_password"
              className="input-text"
              required
            />
          </div>
          <div className="form-row-last">
            
              <input
                type="submit"
                name="register"
                className="register"
                value="Register"
              ></input>
           

            <p>
              Or<Link to="/">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
