import React from "react";

interface Blog {
  backgroundImage: string;
  title: string;
  shortDescription: string;
}

function BlogTeaser(props: Blog) {


  return (
    <div className="column">
              <a className="blog-teaser-wrapper" href="#">
                <img className="cover-backgroud" src={props.backgroundImage} alt="Blog Vorschaubild" />
                <div className="title-wrapper">
                  <h2 className="title is-2">{props.title}</h2>
                </div>
                <div className="text-wrapper">
                  <p>{props.shortDescription}</p>
                </div>
              </a>
    </div>
  );
}

export default BlogTeaser;
