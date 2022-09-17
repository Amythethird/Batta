
import React from "react";

interface voucher{
  boughtAt : Date
  expiringDate : Date
  couponID: string
  currentValue: number
  value: number
  shopName: string
  shopImage: string
  qrCode: string
}

function Voucher(props : voucher) {
  const boughtDate =new Date(props.boughtAt).toLocaleDateString()
  return (
    <main>
        <div className="voucher mgr-1">
            <div className=" box">
                 <div className="box_header is-flex is-align-items-end"
                 style={
                    {  
                        backgroundImage: `url(${process.env.REACT_APP_STRAPI}${props.shopImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",                       
                    }}
                    
                 >
                <h1 className="is-size-3">{props.currentValue + "€"}</h1>
                  <h3 className="is-size-4 mb-2">{props.shopName}</h3>
                </div>
                <div className="box_content pd-1">
                <p>{boughtDate}</p>
                <div className="code">
                  <img src={props.qrCode} alt="qrCode"/>
                  <p >{props.couponID}</p>
                </div>
                </div>   
            </div>
        </div>
    </main>
  );
}

export default Voucher;
