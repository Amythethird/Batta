import React from "react";
import "../../styles/style.css";

function Footer() {
  return (
    <footer className="footer pdt-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="columns is-multiline">
              <div className="column is-half">
                <h3 className="title is-3 has-text-white mgb-1">Allgemeines</h3>
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

              <div className="column is-half">
                <h3 className="title is-3 has-text-white mgb-1">Shops</h3>
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

              <div className="column is-half">
                <h3 className="title is-3 has-text-white mgb-1">Rechtliches</h3>
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

              <div className="column is-half">
                <h3 className="title is-3 has-text-white mgb-1">
                  In eigener Sache
                </h3>
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
          </div>

          <div className="column is-5 is-offset-1 content">
            <h3 className="title is-3 has-text-white">Newsletter erhalten</h3>
            <div className="is-flex pdb-05">
              <input
                className="input mgr-05"
                id="newsletter"
                type="text"
                placeholder="E-Mail Adresse*"
              ></input>
              <button className="button is-secondary">Abonieren</button>
            </div>
            <p className="">
              *Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Donec sed odio dui. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros.
            </p>
          </div>
        </div>

        <hr />

        <div className="content">
          <div className="columns">
            <div className="column has-text-left">
              <p>Copyright © Batta. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
