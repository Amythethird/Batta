import React, { useState, MouseEvent } from "react";
//import { useNavigate } from 'react-router-dom';
import "../styles/style.css";
import user from "../testdata/user.json";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  function handleSubmit(event: MouseEvent) {
    event.preventDefault();
  }

  const userMail: any = user.filter((e) => e.mail === email);
  const userPasswort = user.filter((e) => e.passwort === password);

  console.log(userMail + userPasswort);

  return (
    <section className="section is-medium">
      <div className="container login">
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <button
              className="button is-half is-primary is-medium"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="field is-grouped">
              <div className="control">
                <input className="input" type="text" placeholder="Name"></input>
              </div>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Vorname"
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password wiederholen"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <button className="button is-half is-primary is-medium">
              Registrieren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
