import React from 'react';
import "../styles/style.css"
import Artikel from "./article"



           
function LandingPage() {
  return (
  <main>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className='title'>Unterstütze nachhaltige AnbieterInnen in deiner Nähe</h1>
          <p className='p-6'>Aber wie? Ganz einfach! Suche und kaufe von Anbietern in deiner Nähe, 
           die zu 100% nachhaltige Produkte anbieten und unterstütze diese und den Planeten!
           </p>
          <button className="button is-half">Go green!</button>
        </div>
      </div>
       <Artikel/>

       <div className='p-2 section is-medium concept '>
       <div className="columns is-centered is-vcentered">
          <div className="column ">
          <h2>Wie funktioniert das Konzept?</h2>
          <p className='has-text-left mt-5 mb-5'>
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
          Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. 
          Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. 
          Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna ultricies 
          vehicula ut mollis.</p>
          <a>Mehr erfahren</a>
          </div>
     
          <div className="column">
          <figure className="image is-16by9">
            <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen></iframe>
          </figure>

         
          </div>
        </div>
       </div>

       <section className="section is-medium has-text-centered">
        <h1 className="title">Das sind unsere NachhaltigkeitspartnerInnen</h1>
        <h2 className="subtitle has-text-centered p-6">
        Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt, bieten unsere Parther verschiedene Möglichkeiten wie z.B. die Unterstützung nachhaltiger Projekte.
        </h2>
       
        <div className='Partner mb-6'>
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
       <a>Alle Partner</a>
        </div>
        
        <div className='footer_partner footer is-medium'>
          <p>
          Du bist Ladenbetreiber oder Mitglied einer Nachhaltigen Organisation und möchtest ein Teil von Gloabl Ritter werden? 
          </p>
          <a>Melde dich bei Uns</a>
        </div>
      </section>

      <div className="section Partner is-medium has-text-centered">
        <h1 className="title">Wie wir unsere PartnerInnen auswählen?</h1>
        <h2 className="subtitle has-text-centered p-6">
        Aenean lacinia bibendum nulla sed consectetur. 
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
        Etiam sem malesuada magna mollis euismod.
        </h2>
        <div className='columns is-centered is-vcentered '>
          <div className='column has-text-left'>
            <h1 className='has-text-left'>Unsere Lokalen LadenbetreiberInnen</h1>
            <p className='has-text-left mb-2'>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies 
              vehicula ut id elit. 
              Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. 
              Nulla vitae elit libero, a pharetra augue. 
              Maecenas sed diam eget risus varius blandit sit amet non magna. 
              Etiam porta sem malesuada magna ultricies vehicula ut mollis.</p>
              <a>Mehr erfahren</a>
          </div>
          <div className='column'>
          <figure className="image is-16by9">
            <iframe className="has-ratio" width="580" height="470" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen></iframe>
          </figure>
          </div>
        </div>
        <div className='columns is-centered is-vcentered '>
        <div className='column'>
          <figure className="image is-16by9">
            <iframe className="has-ratio" width="580" height="470" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen></iframe>
          </figure>
          </div>
          <div className='column has-text-left'>
            <h1 className='has-text-left'>Unsere Nachhaltigen Organisationen</h1>
            <p className='has-text-left mb-2'>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies 
              vehicula ut id elit. 
              Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. 
              Nulla vitae elit libero, a pharetra augue. 
              Maecenas sed diam eget risus varius blandit sit amet non magna. 
              Etiam porta sem malesuada magna ultricies vehicula ut mollis.</p>
              <a className='mt-2'>Mehr erfahren</a>
          </div>
        </div>
      </div>
      
  </main>

  );
}

export default LandingPage;
