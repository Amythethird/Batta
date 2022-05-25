import React from 'react';
import "../../styles/style.css"


function Footer() {
  return (
    <footer className="footer">
    <div className="content has-border pb-5">
      <div className='columns'>
          <div className='column has-text-left'>

            <div className='links mb-5'>
            <p>Allgemeines</p>
                <ul>
                    <li>
                        <a>Über uns</a>
                    </li>
                    <li>
                        <a>Nachhaltigkeitskonzept</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                </ul>
            </div>

            <div className='links'>
            <p>Shops</p>
                <ul>
                    <li>
                        <a>Gutscheine</a>
                    </li>
                    <li>
                        <a>In der Nähe</a>
                    </li>
                    <li>
                        <a>Partner werden</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className='column has-text-left'>
          <div className='links mb-5'>
            <p>Rechtliches</p>
                <ul>
                    <li>
                        <a>Impressum</a>
                    </li>
                    <li>
                        <a>Datenschutz</a>
                    </li>
                    <li>
                        <a>AGB</a>
                    </li>
                </ul>
            </div>

            <div className='links'>
            <p>In eigener Sache</p>
                <ul>
                    <li>
                        <a>Kontakt</a>
                    </li>
                    <li>
                        <a>Presse</a>
                    </li>
                    <li>
                        <a>Karriere</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className='column'>
              <p>Newsletter erhalten</p>
              <div className='is-flex'>
              <input className="input is-normal mr-2" type="text" placeholder="Large input"></input>
              <button className="button is-half">Go green!</button>
              </div>
              <p className='pt-2'>*Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
      </div>
    </div>
    <div className="content">
      <div className='columns'>
          <div className='column has-text-left'>
            <p>Copyright © GlobalRitter. All Rights Reserved.</p>
          </div>
          <div className='column has-text-left'>
          </div>

      </div>
    </div>
  </footer>
  );
}

export default Footer;
