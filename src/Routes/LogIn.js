import { Link, useHistory  } from "react-router-dom";
import LogIn_Image from "../Assets/LogIn_Image.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import "../Css/SignIn.css";
import React from "react";
import axios from "axios";

const LogIn = () => {
  
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(true);
  const [lawyer, setlawyer] = useState(null);
  const cookies = new Cookies();
  const history = useHistory();


  const api = axios.create({
    baseURL: `http://127.0.0.1:3333`,
  });

  function logIn(data) {
    const body = {
      userName: data.userName,
      password: data.password,
    };

    api
      .post("/auth/login", body)
      .then((res) => {
        cookies.set("loginToken", res.data.token);
        setlawyer(res.data);
        setloading(false);
		if (res.data.user.userName==="admin") {
			history.push('/dashboard_lawyers')
		}else{
			history.push('/home')
		}
	
      })
      .catch((err) => alert(err));
  }

  return (
    <div class="page-content">
      <div class="form-v7-content">
        <div class="form-left">
          <p class="text-1">Log In</p>
          <img src={LogIn_Image} alt="form" />
          <p class="text-2">Privaci policy & Term of service</p>
        </div>
        <form
          class="form-detail"
          action="#"
          method="post"
          id="myform"
          onSubmit={handleSubmit((data) => logIn(data))}
        >
          <div class="form-row">
            <label for="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              class="input-text"
              required
              {...register("userName")}
            />
          </div>

          <div class="form-row">
            <label for="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              class="input-text"
              required
              {...register("password")}
            />
          </div>

          <div class="form-row-last">
            <input type="submit" class="register" value="LogIn" />
            <p>
              Or
              <Link to="/signUp">
                <a href="/signUp" className="register1">Register</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
