import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import logo from '../img/logo-title.svg'
import ServiceLinks from './ServiceLinks'
//   Våra tjänster ,Om oss, Kontakt, Dokument
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="värends glas" />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" activeClassName={'active-page'} to="/about">
                Om oss
              </Link>
              <Link className="navbar-item" activeClassName={'active-page'} to="/products">
                Våra tjänster
              </Link>
              <Link className="navbar-item" activeClassName={'active-page'} to="/blog">
                Referenser
              </Link>
              <Link className="navbar-item" activeClassName={'active-page'} to="/contact">
                Kontakt
              </Link>
              <Link className="navbar-item" activeClassName={'active-page'} to="/contact/examples">
                Form Examples
              </Link>




              <ServiceLinks />





            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/varendsglas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/explore/tags/v%C3%A4rendsglas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="instagram" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

