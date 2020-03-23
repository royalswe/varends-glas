import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const WideFeatures = ({gridItems}) => {   
    console.log(gridItems); 
    return (
    <div className="columns is-multiline is-mobile">

        {gridItems.map((item, index) =>
            <div className="column is-6" style={{}} key={index}>
                <picture>
                    <PreviewCompatibleImage imageInfo={item} />
                </picture>
                <ul>
                    <li>{item.text}</li>
                </ul>
            </div>
        )}
    </div>
    )
}

WideFeatures.propTypes = {
    gridItems: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    ),
  }

export default WideFeatures