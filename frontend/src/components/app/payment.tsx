import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import "../../styles/style.css";
import useApi from "../../hooks/useApi";
import { collection, entry, query } from "../../api-utils/query-utils";
import { parseResponse } from "../../api-utils/response-utils";
import ShopModel from "../../models/shop";
import HeaderUser from "../globals/headerShop";


function Payment() {

  const {id} = useParams();
  
  const [isButton, setFirstButton] = React.useState(0);
  const [isStep, setStep] = React.useState(0);

  const machtNix = "nix";
  const shops = useAppSelector(selectShops);
  const dispatch = useAppDispatch();

  useApi(
    query(
      collection(
        "shops",
        [
          "shopName",
          entry("address", ["postalCode"]),
          "description", collection("shopHeaderImage", ["url"]),
          collection("productHighlights", ["url"]),
        ],
        {
          id: { eq: id },
        }
      )
    ),
    (response) => {
      dispatch(setShops(parseResponse("shops", response).data as ShopModel[]));
    },
    [machtNix]
  );


 function handleButton(e: number){
    setFirstButton(e)
    setStep(e)
  
 }
  
  return (
    <section className="mt-space-large payment">
        {shops.map((shop: ShopModel) => (
        <HeaderUser
          key={shop.id}
          UserId={shop.id}
          imag={shop.shopOwner?.profilePicture?.url!}
          bgImage = {shop.shopHeaderImage?.url!}
        />
      ))}
     <section className="section">
     <div className="columns">
        <div className=" column is-3 box has-background-primary-transparent">
          <h1 className="title is-1">Gutschein Höhe</h1>
          <h2 className=" title is-2">Green benefits</h2>
          <ul>
          <li >
            <div className={isStep === 1 || isStep === 2 || isStep === 3? " stepProgress one active" : "stepProgress one"} >
              <p>10-20€</p>
            </div>
            <p className="benefit">Wir pflanzen einen Baum in deinem Namen</p>
          </li>
          <li >
            <div className={isStep === 2 || isStep === 3  ? "stepProgress two active" : "stepProgress two"} id="two">
              <p>50€ +</p>
            </div>
            <p className="benefit">Wir spenden 5€ an das Tierheim-Dellbrück</p>
          </li> 
          <li>
            <div className={isStep === 3 ?  "stepProgress three active" : "stepProgress three"}>
              <p>100€ +</p>
            </div>
            <p className="benefit">10€ des Gutscheinwertes gehen an die  Gutes Wasser für den Rhein Striftung</p>
          </li>
         </ul>
        
        </div>
        
        <div className="column  is-two-thirds">
          <h2 className="is-size-4">Gutschein Höhe festlegen</h2>
          <div className="is-flex button_group is-justify-content-space-between">
            <button className={isButton == 1 ? " button  _activeButton" : "button"} onClick={() => handleButton(1)}>20€</button>
            <button className={isButton == 2 ? " button  _activeButton" : "button"} onClick={() => handleButton(2)}>50€</button>
            <button className={isButton == 3 ? " button  _activeButton" : "button"} onClick={() => handleButton(3)}>100€</button>
            <button className="button mr-2 disabled">0</button>
          </div>
          <h2>Für wen?</h2>
          <div className="control mgb-2 mgt-2">
            <label className="radio mgr-05">
              <input type="radio" name="answer" />
              Als Gast bestellen
            </label>
            <label className="radio">
              <input type="radio" name="answer"/>
              <Link to={`/login`}>Anmelden</Link> oder <Link to={`#`}>Registrieren</Link>
            </label>
          </div>
          <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Vorname" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Name"  />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
          </div>
        
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input " type="text" placeholder="PLZ" />
                
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Stadt"  />
                <span className="icon is-small is-left">
             
                </span>
                <span className="icon is-small is-right">
                  
                </span>
              </p>
            </div>
          </div>
        
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Straße" />
                <span className="icon is-small is-left">
               
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Nr"  />
                <span className="icon is-small is-left">
             
                </span>
                <span className="icon is-small is-right">
                  
                </span>
              </p>
            </div>
          
          </div>
          
        
        </div>
        <div className="field mgb-2">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            </span>
          </p>
         </div>
         <label className="checkbox mg-05">
            <input type="checkbox" />
              Ja ich möchte den <a href="#">Newsletter</a> abonnieren
        </label>
        <div className="field mgb-2">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            </span>
          </p>
         </div>
         <h2>Zahlungsmethode</h2>
         <div className="is-flex button_group is-justify-content-space-between mgb-2">
            <button className="button mr-2 ">Paypal</button>
            <button className="button mr-2 " >Sofort Überweisung</button>
            <button className="button mr-2 " >Master Card</button>
            <button className="button mr-2 disabled">Klarna</button>
          </div>
          <div className="is-flex is-flex-direction-column" >
          <label className="checkbox mgb-1">
            <input type="checkbox" />
              Ich stimme den <a href="#">AGBs</a> zu
          </label>
        <label className="checkbox">
            <input type="checkbox" />
              Ich stimme den <a href="#">Datenschutzrichtlinien</a> zu
        </label>
          </div>
        </div>
      </div>
     </section>
    </section>
  );
}

export default Payment;
