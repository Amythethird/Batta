import React from "react";
import "../../../styles/style.css";

interface BlogBeitrag {
  autor: string;
  title: string;
  image: string;
  text: string;
  //date: Date;
}

interface Beitrag {
  article: BlogBeitrag[];
}

function Artikel(props: Beitrag) {
  return (
    <div className="Blogbeitrag is-flex">
      {props.article.map((articles) => (
        <div className="article mb-space-large mt-5" key={articles.text}>
          <div
            className="artikel_header"
            style={{ backgroundImage: `url(${articles.image})` }}
          ></div>
          <div className="main">
            <div className="autor">
              <h2>{articles.title}</h2>
              <p>{articles.autor}</p>
            </div>
            <div className="text">
              <p className="is-size-7-mobile">{articles.text}</p>
            </div>
            <a>Weiterlesen</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Artikel;
