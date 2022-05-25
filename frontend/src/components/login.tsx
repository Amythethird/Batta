import React from 'react';
import "../styles/style.css"
           
function Login() {
  return (
    <section className='section is-medium'>
    <div className='container login'>
          <div className='columns'>
              <div className='column'>
              <div className="field">
                  <p className="control has-icons-left has-icons-right">
                      <input className="input" type="email" placeholder="Email"></input>
                      <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                      </span>
                  </p>
                  </div>
                  <div className="field">
                  <p className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password"></input>
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                  </p>
                  </div>
                  <button className="button is-half is-primary is-medium">Login</button>
          </div>
          <div className='column'></div>
              <div className='column'>
                  <div className="field is-grouped">
                  <p className="control">
                  <input className="input" type="text" placeholder="Name"></input>
                   
                  </p>
                  <p className="control">
                  <input className="input" type="text" placeholder="Vorname"></input>
                     
                  </p>
                  </div>
                  <div className="field">
                  <p className="control has-icons-left has-icons-right">
                      <input className="input" type="email" placeholder="Email"></input>
                      <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                      </span>
                  </p>
                  </div>
                  <div className="field">
                  <p className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password"></input>
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                  </p>
                  </div>
                  <div className="field">
                  <p className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password wiederholen"></input>
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                  </p>
                  </div>
                  <button className="button is-half is-primary is-medium">Registrieren</button>

              </div>
          </div>
      </div>
    </section>

  );
}

export default Login;
