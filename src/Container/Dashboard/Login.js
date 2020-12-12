import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Login() {
    let history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const userFields = [
   
    {
      name: "email",
      label: "Email",
      required: true,
      placeholder: "Enter Your email",
      type: "email",
    },
   
    {
      name: "password",
      label: "Password",
      required: true,
      placeholder: "Password",
      type: "password",
    },
  ];
  const handleChangeUser = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  const handleSubmit = (evt) => {
    console.log(state);
    setState({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    history.push("/user/login");

    axios

      .post(
        "http://111.93.169.90:4011/loginProfile",

        {
          //   email: email,
          //  password: password,
          type: 2,
        }
      )
      .then((response) => {
        console.log(response);
        //if(response.data.message==="Login successful"){
        // router.push({
        //   pathname: '/Profile',

        // })
        //}
      })

      .catch((error) => {
        console.log(error);
      });

    evt.preventDefault();
  };

  return (
    <>
      <div className="wrapper">
        <div className="section1">
          <h3 className="card_header"> Login TO BLOGGING WEBSITE</h3>

          <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
            {userFields.map((field) => (
              <div row key={field.name} style={{ marginTop: "15px" }}>
                <label className="offset-sm-2">
                  {field.label}
                  {field.required ? "*" : ""}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="form-control col-sm-8 offset-sm-2"
                  onChange={handleChangeUser}
                  value={state[field.name]}
                />
              </div>
            ))}
            <div style={{ marginTop: "20px" }}>
              <input
                type="submit"
                id="btn2"
                className="col-sm-8 offset-sm-2"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

//export default withErrorHandler(Dashboard, axios);
