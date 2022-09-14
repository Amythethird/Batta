import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as reg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/style.css";

interface UserData {
  username: string;
  name: string;
  vorname: string;
  email: string;
  image: string;
  text: string;
  isPrivate: boolean;
}
function HeaderUser(props: UserData) {
  let fullHeart = false;

  const like = (event: any) => {
    event.preventDefault();
    fullHeart = true;
  };

  return (
    <main className="mt-space-large">
      <section
        className="section is-flex is-medium pb-0 is-align-content-end"
        style={{
          backgroundColor: "green",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="columns userHeader mb-0">
          <div className="column is-align-self-flex-end  pb-0">
            <div className="information p-3">
              <figure className="imageInhaber">
                <img src={props.image} alt="user" />
              </figure>
              <div className="is-flex">
                <h2 className="is-size-4 is-size-5-mobile ">
                  {props.name + " " + props.vorname}
                  <a className="ml-5" onClick={like}>
                    <span>
                      <FontAwesomeIcon icon={fullHeart ? faHeart : reg} />
                    </span>
                  </a>
                </h2>
              </div>
              <a>Als Freund hinzufügen</a>

              <p className="mt-5">
                Nullam quis risus eget urna mollis ornare vel eu leo. Donec
                ullamcorper nulla non metus auctor fringilla Cras justo odio.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeaderUser;
