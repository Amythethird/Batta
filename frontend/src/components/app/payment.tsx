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
  const { id } = useParams();

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
          "description",
          collection("shopHeaderImage", ["url"]),
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

  function handleButton(e: number) {
    setFirstButton(e);
    setStep(e);
  }

  return (
    <main className="mt-space-large payment">
      {shops.map((shop: ShopModel) => (
        <HeaderUser
          key={shop.id}
          UserId={shop.id}
          imag={shop.shopOwner?.profilePicture?.url!}
          bgImage={shop.shopHeaderImage?.url!}
        />
      ))}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <div className="has-background-primary-transparent payment-benefits content">
                <h2 className="title is-2">Gutschein Höhe</h2>
                <h2 className=" title is-2">Green benefits</h2>
                <ul>
                  <li>
                    <div
                      className={
                        isStep === 1 || isStep === 2 || isStep === 3
                          ? " stepProgress one active"
                          : "stepProgress one"
                      }
                    >
                      <p>10-20€</p>
                    </div>
                    <p className="benefit">
                      Wir pflanzen einen Baum in deinem Namen
                    </p>
                  </li>
                  <li>
                    <div
                      className={
                        isStep === 2 || isStep === 3
                          ? "stepProgress two active"
                          : "stepProgress two"
                      }
                      id="two"
                    >
                      <p>50€ +</p>
                    </div>
                    <p className="benefit">
                      Wir spenden 5€ an das Tierheim-Dellbrück
                    </p>
                  </li>
                  <li>
                    <div
                      className={
                        isStep === 3
                          ? "stepProgress three active"
                          : "stepProgress three"
                      }
                    >
                      <p>100€ +</p>
                    </div>
                    <p className="benefit">
                      10€ des Gutscheinwertes gehen an die Gutes Wasser für den
                      Rhein Striftung
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column content">
              <h2 className="title is-2 mgt-1">Gutschein Höhe festlegen:</h2>
              <div className="columns is-variable is-1 btn-group">
                <div className="column is-3">
                  <button
                    className={isButton == 1 ? " button  btn-active" : "button"}
                    onClick={() => handleButton(1)}
                  >
                    20€
                  </button>
                </div>
                <div className="column is-3">
                  <button
                    className={isButton == 2 ? " button  btn-active" : "button"}
                    onClick={() => handleButton(2)}
                  >
                    50€
                  </button>
                </div>
                <div className="column is-3">
                  <button
                    className={isButton == 3 ? " button  btn-active" : "button"}
                    onClick={() => handleButton(3)}
                  >
                    100€
                  </button>
                </div>
                <div className="column is-3">
                  <input
                    className={isButton == 4 ? " btn-active input" : " input"}
                    onClick={() => handleButton(4)}
                    type="number"
                    placeholder="0€"
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-9">
                  <div className="is-flex mgb-1">
                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="answer"
                      />
                      Als Gast bestellen
                    </label>
                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="answer"
                      />
                      <Link to={`/login`}>Anmelden</Link> oder{" "}
                      <Link to={`#`}>Registrieren</Link>
                    </label>
                  </div>

                  <div className="columns is-variable is-1 is-multiline payment-form">
                    <div className="column is-6">
                      <input
                        className="input"
                        type="text"
                        placeholder="Vorname"
                      />
                    </div>
                    <div className="column is-6">
                      <input className="input" type="text" placeholder="Name" />
                    </div>
                    <div className="column is-3">
                      <input className="input" type="text" placeholder="PLZ" />
                    </div>
                    <div className="column is-9">
                      <input
                        className="input"
                        type="text"
                        placeholder="Stadt"
                      />
                    </div>
                    <div className="column is-9">
                      <input
                        className="input"
                        type="text"
                        placeholder="Straße"
                      />
                    </div>
                    <div className="column is-3">
                      <input className="input" type="text" placeholder="Nr." />
                    </div>
                    <div className="column is-full">
                      <input
                        className="input"
                        type="text"
                        placeholder="E-Mail"
                      />
                    </div>
                  </div>

                  <label className="checkbox-label">
                    <input className="checkbox-input" type="checkbox" />
                    Ich möchte aktuelle Informationen über den{" "}
                    <a href="#">Newsletter</a> erhalten
                  </label>

                  <h2 className="title is-2">
                    {" "}
                    Ist der Gutschein ein Geschenk?
                  </h2>

                  <div className="is-flex mgb-1">
                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="is-present"
                      />
                      Ja
                    </label>
                    <label className="radio-label">
                      <input
                        className="radio-input"
                        type="radio"
                        name="is-present"
                        checked
                      />
                      Nein
                    </label>
                  </div>

                  <h2 className="title is-2">Zahlungsmethode</h2>
                  <div className="columns btn-group">
                    <div className="column is-9">
                      <div className="columns is-variable is-1 ">
                        <div className="column">
                          <button className="button mr-2 ">Paypal</button>
                        </div>
                        <div className="column">
                          <button className="button mr-2 disabled">
                            Klarna
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="checkbox-label mgb-1">
                    <input className="checkbox-input" type="checkbox" />
                    Ich stimme den <a href="#">AGBs</a> zu
                  </label>
                  <label className="checkbox-label">
                    <input className="checkbox-input" type="checkbox" />
                    Ich stimme den <a href="#">Datenschutzrichtlinien</a> zu
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Payment;
