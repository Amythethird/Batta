import React from 'react';
import "../styles/style.css"
           
function Login() {
  return (
  <main>
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
                    <button className="button is-half">Go green!</button>
            </div>
            <div className='column'></div>
                <div className='column'>
                    <div className="field is-grouped">
                    <p className="control">
                    <input className="input" type="email" placeholder="Email"></input>
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                        </span>
                    </p>
                    <p className="control">
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
                        <input className="input" type="password" placeholder="Password"></input>
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <button className="button is-half">Go green!</button>

                </div>
            </div>
        </div>
  </main>

  );
}

export default Login;
