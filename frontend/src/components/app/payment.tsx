import React from "react";
import "../../styles/style.css";



function Payment() {
  return (
    <section className="section mt-space-large payment">
       
      <div className="columns">
        <div className=" column is-3 box has-background-primary-transparent">
          <h2 className="is-size-4">Gutschein Höhe: 50€</h2>
          <h2 className="is-size-4">Green Benefits</h2>
            <div className="benefits is-flex is-flex-direction-column mt-5">
              <div className="is-flex is-align-content-center">
              <span className="tag is-rounded background_dark mb-5 mr-2">10€ - 20€</span>
              <p>Wir pflanzen in deinem Namen einen Baum</p>
              </div>
              <div className="is-flex is-align-content-center">
              <span className="tag is-rounded background_dark mb-5 mr-2">50€</span>
              <p>5€ Spende an das Tierheim Köln-Dellbrück</p>
              </div>
              <div className="line"></div>
              <div className="is-flex is-align-content-center">
              <span className="tag bg_light is-rounded  mb-5 mr-2">100€</span>
              <p>10€ des Gutscheinwerts kommt der Aufwertung der Wasserqualität des Rheins zugute</p>
              </div>
            </div>

        </div>
        <div className="column  is-two-thirds buy_voucher">
          <h2 className="is-size-4">Gutschein Höhe festlegen</h2>
          <button className="button mr-2 ">20€</button>
          <button className="button mr-2 ">50€</button>
          <button className="button mr-2 ">100€</button>
          <button className="button mr-2 disabled">0</button>

        </div>
      </div>
    </section>
  );
}

export default Payment;
