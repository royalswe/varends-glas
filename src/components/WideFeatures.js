import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'


const WideFeatures = ({ gridItems }) => {
  return (
    <section className="staggering">
      {gridItems.map((item, index) => (
        <div className="columns is-multiline is-gapless" key={index}>
          <div className="column is-half" style={{ MaxHeight: "15em" }}>
            {item.image &&
              <picture className="services-img">
                <PreviewCompatibleImage imageInfo={item} />
              </picture>
            }
          </div>
          <div className="column is-half decorative-rotated">
            <div style={{padding: "1em", position:"relative"}}>
              <h3 style={{fontWeight: "bold", fontSize: "1.1em"}}>{item.title}</h3>
              <br />
              <p>{item.text}</p>
              <br />
              {item.link &&
                <Link className="button" to={item.link}>
                      Läs mer →
                </Link>
              }
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

WideFeatures.propTypes = {
    gridItems: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    ),
  }

export default WideFeatures