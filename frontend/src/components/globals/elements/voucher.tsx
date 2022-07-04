
import React from "react";


function Voucher() {
  return (
    <main>
        <div className="voucher">
            <div className=" box">
                 <div className="box_header is-flex is-align-items-end"
                 style={
                    {  
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",                       
                    }}
                 >
                  <h1 className="is-size-1 ">50€</h1>
                  <h3 className="is-size-4 mb-2">Lisas Klamotten</h3>
                </div>
                <div className="box_content is-flex is-align-items-center is-justify-content-center">
                  <p>test</p>
                </div>   
            </div>
        </div>
    </main>
  );
}

export default Voucher;
