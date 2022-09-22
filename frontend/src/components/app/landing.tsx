import React from "react";
import "../../styles/style.css";
import BlogTeaser from "../globals/elements/blogTeaser";

//120px abstand zwischen den components

function LandingPage() {
  /*Partner*/
  const partner = [
    "Partner_1",
    "Partner_2",
    "Partner_3",
    "Partner_4",
    "Partner_5",
  ];
  let image = (
    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
  );
  return (
    <main>
      <section className="hero-body">
        <div className="container">
          <div className="columns content has-text-centered">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-1 mgb-2">
                Unterstütze nachhaltige Anbieter:innen in deiner Nähe!
              </h1>
              <p className="mgb-2">
                Aber wie? Ganz einfach! Suche und kaufe von Anbieter:innen in
                deiner Nähe, die zu 100% nachhaltige Produkte anbieten und
                unterstütze diese und den Planeten!
              </p>
              <button className="button is-primary">Go green!</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-teaser-compact">
        <div className="container">
          <div className="columns is-gapless content">
            <BlogTeaser
              backgroundImage={
                "https://images.unsplash.com/photo-1652439390548-1d71216f9ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80/600x900"
              }
              title={"Wie Nachhaltigkeit unseren Alltag beeinflusst"}
              shortDescription={
                "Lernen deinen ökologischen Fußabdruck mit unserem Quiz kennen."
              }
            />
            <BlogTeaser
              backgroundImage={
                "https://images.unsplash.com/photo-1652054447785-eaa74ea9dcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80/600x900"
              }
              title={"Die bedrohten Tierarten aus aller Welt"}
              shortDescription={
                "Wie aus Rohstoffknappheit das Wildern wurde, erklärt dir der WWF Deutschland."
              }
            />
            <BlogTeaser
              backgroundImage={
                "https://images.unsplash.com/photo-1652011609738-74e036599c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80/600x900"
              }
              title={"Die Paarung bei Elefanten stockt."}
              shortDescription={
                "Mit dem eigenen Einkauf den Nachwuchs der Dickhäuter fördern."
              }
            />
          </div>
        </div>
      </section>

      <section className="section pdb-large">
        <div className=" container">
          <div className="columns content is-vcentered">
            <div className="column is-5">
              <h2 className="title is-2">Wie funktioniert das Konzept?</h2>
              <p className="has-text-left mt-5 pb-6">
                Als regionale:r Händler:in können Sie sich hier unverbindlich
                registrieren. Lernen Sie unsere Nachhaltigkeitspartner:innen
                kennen und vernetzen Sie sich mit diesen. Es erwarten Sie tolle
                Projekte, die die Nachhaltigkeit fördern. Wir unterstützen Sie,
                bei Ihren Nachhaltigkeitsprojekten und fördern Ihre
                Kundenakquise.
              </p>
              <a className="is-link">Mehr erfahren</a>
            </div>
            <div className="column is-offset-1 is-half">
              <figure className="image is-16by9 is-fullwidth mg-0">
                <iframe
                  className="has-ratio has-corners-round has-shadow"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/YE7VzlLtp-4"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-primary-transparent pdt-large">
        <div className="container has-text-centered">
          <h2 className="title is-2">
            Das sind unsere Nachhaltigkeitspartner:innen
          </h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p>
                Damit ihr mit euren Käufen zusätzlich etwas Gutes tun könnt,
                bieten unsere Partner:innen verschiedene Möglichkeiten, wie z.B.
                die Unterstützung nachhaltiger Projekte.
              </p>
            </div>
          </div>

          <div className="columns">
            {partner.map((e) => (
              <div className="column" key={e}>
                {image}
              </div>
            ))}
          </div>

          <a className="is-link">Alle Partner:innen</a>
        </div>
      </section>

      <section className="section has-background-primary is-medium">
        <div className="has-text-centered has-text-white">
          <h2 className="title is-2 has-text-white">
            Du bist Ladenbetreiber:in oder Mitglied einer nachhaltigen
            Organisation und möchtest ein Teil von Batta werden?
          </h2>
          <h2 className="title is-2">
            <a className="is-link has-text-white has-text-weight-bold">
              Melde dich bei uns!
            </a>
          </h2>
        </div>
      </section>

      <section className="section pdt-large pdb-large">
        <div className="container">
          <div className="columns content mgb-3">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h2 className="title is-2">
                Wie wir unsere Partner:innen auswählen
              </h2>
              <p>
                Wir wollen uns persönlich bei Ihnen vorstellen und Ihr
                Nachhaltigkeitsbewusstsein kennenlernen.
              </p>
            </div>
          </div>

          <div className="columns content is-centered is-vcentered is-multiline blog-big-grid is-variable is-3-mobile is-align-items-stretch">
            <div className="column is-half">
              <div className="text-wrapper">
                <h2 className="title is-2">
                  Unsere lokalen Ladenbetreiber:innen
                </h2>
                <p>
                  Nach dem Regestrierungsprozess besuchen wir Sie in Ihrem Shop.
                  Wir prüfen mit Ihnen, wie nachhaltig Ihr Shop ist, und
                  schlagen Ihnen Nachhaltigkeitspartner:innen vor.
                </p>
                <a className="is-link">Mehr erfahren</a>
              </div>
            </div>
            <div className="column is-half">
              <img
                className="cover-backgroud"
                src="https://images.unsplash.com/photo-1652054447785-eaa74ea9dcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80/600x900"
                alt="Blog Vorschaubild"
              />
            </div>
            <div className="column is-half">
              <img
                className="cover-backgroud"
                src="https://images.unsplash.com/photo-1652439390548-1d71216f9ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80/600x900"
                alt="Blog Vorschaubild"
              />
            </div>
            <div className="column is-half">
              <div className="text-wrapper">
                <h2 className="title is-2">Unsere Kund:innen</h2>
                <p>
                  Wir stellen Ihnen die regionalen Nachhaltigkeitsheld:innen
                  vor. Stöbern, verschenken oder selbstbehalten. Hier finden Sie
                  für jeden Anlass ein Geschenk. Sie unterstützen den
                  stationären Handel und Nachhaltigkeitsprojekte aus Ihrer
                  Region.
                </p>
                <a className="is-link">Mehr erfahren</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
