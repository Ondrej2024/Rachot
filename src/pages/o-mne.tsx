import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <head>
        <title>HAJANSKÝ FOTOGRAF - Ondřej Klein</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </head>

      <body>
        <header>
          <div className="logo">
            <img src="/logo.png" alt="Hajanský Fotograf Ondřej Klein" />
          </div>
          <nav>
            <ul>
              <li><a href="#about">O mně</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#offer">Nabídka</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="about">
            <div className="intro">
              <img src="/your-image.jpg" alt="Ondřej Klein" />
              <div className="text">
                <h1>Rád vás zachytím ve vaší kráse</h1>
                <p>(nějakej text, ještě domyslím)</p>
              </div>
            </div>
          </section>

          <section id="bio">
            <div className="bio-text">
              <p>Již čtvrtým rokem pracuji brigádně v kuchyni...</p>
              {/* Text bude pokračovat */}
            </div>
            <div className="bio-images">
              <im src="/portrait1.jpg" alt="Ondřej Klein 1" />
              <img src="/portrait2.jpg" alt="Ondřej Klein 2" />
              {/* Další obrázky */}
            </div>
          </section>

          <section id="portfolio">
            <h2>Co zrovna fotím, když nefotím svatby</h2>
            <div className="portfolio-section">
              <img src="/portrait3.jpg" alt="Portréty" />
              <img src="/nature1.jpg" alt="Příroda" />
              {/* Další obrázky */}
            </div>
          </section>

          <section id="nature">
            <h2>Ale hlavně, přírodu</h2>
            <div className="nature-section">
              <img src="/nature2.jpg" alt="Příroda 1" />
              <img src="/nature3.jpg" alt="Příroda 2" />
              {/* Další obrázky */}
            </div>
            <p>Přírodu fotím již 3. rokem...</p>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Ondřej Klein | Brno</p>
          <nav>
            <ul>
              <li><a href="#about">O mně</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#offer">Nabídka</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>
        </footer>
      </body>
    </>
  );
};

export default AboutPage;
