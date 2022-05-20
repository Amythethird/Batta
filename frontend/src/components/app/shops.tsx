import React from 'react';
import "../../styles/style.css"
import Map from '../../assets/map.svg';
import image from '../../assets/Frame-1.svg'


interface Shop{
    name: string;
    text: string;
    oeffnungszeiten: string;
    adresse: string; 
    tag: string[]; 
    mail: string;
    tel: string;

}
//const tagList = ["Nachhaltig", "Vegan", "Unverpackt"]
const bestProdukt = ["Nachhaltig", "Vegan", "Unverpackt"]

function ShopAnsicht(props: Shop) {
  return (
    <main className='mt-space-large'>
            <section className="section shop mx-3 mb-space-large">
                  <div className='container '>
                    <div className='columns'>
                      <div className='column'>
                        <h1 className='has-text-left is-size-4'>{props.name}</h1>
                        <p>{props.text}</p>
                        <div className='columns mt-1'>
                      <div className='column'>
                        <p className='has-text-weight-medium mb-1'>Öffnungszeiten</p>
                      
                        {props.oeffnungszeiten.split("--").map((i,key) => {
                          return <p key={key}>{i}</p>;
                        })}
                        
                      </div>
                      
                      <div className='column'>
                      <p className='has-text-weight-medium mb-1'>Adresse</p>
                      {props.adresse.split("--").map((i,key) => {
                          return <p key={key}>{i}</p>;
                        })}
                      </div>
                      </div>
                          {props.tag.map((i,tagItem) =>
                          <span className="tag mr-2" key={tagItem}>
                              {i}
                          </span>
                          )}
                      
                      </div>
                      <div className='column'>
                          <img src={Map} alt='map'></img>
                      </div>
                      
                    </div>
                  </div>
            </section>
            <div className='container mb-space-large'>
            <div className='columns'>
                <div className='column is-one-quarter'>
                    <h2 className='is-size-4 mb-3'>Beliebteste Produkte</h2>
                    <p className='mb-4'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                      Nulla vitae elit libero, a pharetra augue.
                    </p>
                    <button className="button is-primary is-outlined">Gutscheine</button>
                </div>
                <div className='column is-justify-content-center is-flex'>
                {bestProdukt.map((i,produktItem) =>
                          <div className="card mr-2" key={produktItem}>
                          <div className="card-image">
                            <figure className="image">
                              <img src= {image}  alt="Placeholder image"></img>
                            </figure>
                          </div>
                        </div>
                          )}
                </div>
              </div>
            </div>
            <section className="section  mx-3 mb-space-large">
            <div className="columns is-centered is-vcentered">
                  <div className="column">
                  <figure className="image is-16by9">
                    <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen></iframe>
                  </figure>

                  </div>
                  <div className="column ">
                  <h2 className='is-size-4 has-text-weight-medium'>Wie funktioniert das Konzept?</h2>
                  <p className='has-text-left mt-5 pb-6'>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. 
                  Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. 
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna ultricies 
                  vehicula ut mollis.</p>
                  <button className="button is-primary is-outlined">Gutscheine</button>
                  </div>
                    </div>
            </section>
            <section className='section background_light is-medium  px-0 pb-5' >
     <section className="container has-text-centered">
        <h1 className="title">Diese Parter:Innen unterstützt du mit einem Gutschein</h1>
        <h2 className="subtitle has-text-centered p-6">
        Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt, bieten unsere Parther verschiedene Möglichkeiten wie z.B. die Unterstützung nachhaltiger Projekte.
        </h2>
       
        <div className='Partner'>
       <div className='partner mb-4'>
       <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
       </div>
       <button className="button is-primary is-outlined">Gutscheine</button>
        </div>
      </section>
            </section>
            <section className='section is-medium mb-is-large'>
              <div className='columns'>
                <div className='column is-7'>
                  <h2 className='is-size-4 pb-2'>Gutschein</h2>
                  <p className='pb-4'>
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. 
                    Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna ultricies vehicula ut mollis.
                  </p>
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input className="input is-normal" type="text" placeholder="Gutschein höhe"></input>
                    </p>
                    <p className="control">
                      <a className="button is-primary">
                        Gutschein kaufen
                      </a>
                    </p>
                  </div>
                </div>
                <div className='column'>
                  <h2 className='is-size-4'>Kontakt</h2>
                  <p>E-Mail: <a href={"mailto:" + props.mail }>{props.mail}</a></p>
                  <p>Telefon: {props.tel}</p>
                  
                </div>
              </div>
            </section>
    </main>
    
  );
}


export default ShopAnsicht;
