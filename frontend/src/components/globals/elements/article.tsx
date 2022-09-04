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
    <div className="columns">
      {props.article.map((articles) => (
        <div className="column" key={articles.text}>
          <a href="#">
            <div className="card article-preview">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={articles.image} alt="Placeholder image" />
                </figure>
              </div>

              <div className="card-content">
                <div className="content">
                  <h3 className="title is-3 has-text-primary mgb-05">{articles.title}</h3>
                  <p className="mgb-05">{articles.text}</p>
                  
                  <a className="pseudo-link">Weiterlesen</a>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Artikel;
