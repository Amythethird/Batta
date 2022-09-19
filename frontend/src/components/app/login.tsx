import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../api-utils/login-utils";
import "../../styles/style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleSubmit() {
    login(email, password).then(() => {
      const postLoginRedirect = searchParams.get("postLoginRedirect");
      if (postLoginRedirect) {
        navigate(`/${postLoginRedirect}`);
      } else {
        navigate("/");
      }
    });
  }

  return (
    <section className="section login">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="columns">
              <div className="column is-5 is-offset-1">
                <div className="columns is-variable is-1 is-multiline basic-form">
                  <div className="column is-full">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="column is-full">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="column is-full">
                    <button
                      className="button is-primary"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="columns is-variable is-1 is-multiline basic-form">
                  <div className="column is-half">
                    <input
                      className="input"
                      type="text"
                      placeholder="Vorname"
                    disabled></input>
                  </div>
                  <div className="column is-half">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      disabled></input>
                  </div>
                  <div className="column is-full">
                    <input
                      className="input"
                      type="text"
                      placeholder="E-Mail"
                      disabled></input>
                  </div>
                  <div className="column is-full">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      disabled></input>
                  </div>
                  <div className="column is-full">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password wiederholen"
                      disabled></input>
                  </div>
                  <div className="column is-full mgt-1 mgb-1">
                    <label className="checkbox-label">
                      <input className="checkbox-input" type="checkbox" disabled />
                      Ich stimme den <a href="#">AGBs</a> zu.
                    </label>
                  </div>

                  <div className="column is-full">
                    <button className="button is-primary" disabled>Registrieren</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
