import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-title.svg'
import partners from '../img/partners-colors.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <img
          src={partners}
          alt="Partners"
          style={{ width: "100%", backgroundColor: "#fff" }}
        />
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Värends glas"
            style={{ width: "25em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section>
                  <h3>Kontakt</h3>
                  E-post:{" "}
                  <a
                    href="mailto:info@varendsfonster.se"
                  >
                    info@varendsfonster.se
                  </a>
                  <br />
                  <br />
                  Besöksadress:
                  <br />
                  Ekebogatan 16
                  <br />
                  342 30 Alvesta
                  <br />
                  <br />
                  Telefon:{" "}
                  <a href="tel:+4673-151 00 02">
                    073-151 00 02
                  </a>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <h3>Länkar</h3>
                  <ul className="menu-list" style={{ margin: "0" }}>
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Om oss
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/services">
                        Våra tjänster
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Referenser
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/documents">
                        Manualer
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <h3>Öppetider</h3>
                  Måndag-Torsdag 07:00-18:00
                  <br />
                  Fredag 07:00-17:00
                  <div className="social">
                    <a title="facebook" href="https://facebook.com">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
