import React from "react";

interface voucher {
  boughtAt: Date;
  expiringDate: Date;
  couponID: string;
  currentValue: number;
  value: number;
  shopName: string;
  shopImage: string;
  qrCode: string;
}

function Voucher(props: voucher) {
  const boughtDate = new Date(props.boughtAt).toLocaleDateString();
  return (
    <div className="column is-3">
      <a href="#">
        <div className="card voucher-card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                /* eslint-disable-next-line no-undef */
                src={`${process.env.REACT_APP_STRAPI}${props.shopImage}`}
                alt="Placeholder image"
              />

              <span className="voucher-value">{props.currentValue + "€"}</span>
              <h2>{props.shopName}</h2>
            </figure>
          </div>

          <div className="card-content">
            <div className="content">
              <p>Erhalten: {boughtDate}</p>
              <div className="code has-text-centered">
                <img src={props.qrCode} alt="qrCode" />
                <span className="code-id">ID {props.couponID}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Voucher;
