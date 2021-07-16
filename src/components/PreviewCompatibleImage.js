import React from 'react'
import PropTypes from 'prop-types'
import { getImage, getSrc, GatsbyImage } from "gatsby-plugin-image"


const PreviewCompatibleImage = ({ imageInfo }) => {
  const { childImageSharp, image, imageStyle } = imageInfo
  const alt = imageInfo.alt || '';
  

  if (!!image && !!image.childImageSharp) {
    console.log(imageStyle, alt);
    return (
      <GatsbyImage
        image={getImage(image)}
        style={imageStyle}
        alt={alt} />
    );
  }

  if (!!childImageSharp) {
    return <GatsbyImage image={childImageSharp.fluid} style={imageStyle} alt={alt} />;
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  // OLD
  // if (!!image && !!image.childImageSharp) {
  //   return <Img style={imageStyle} fluid={image.childImageSharp.gatsbyImageData} alt={alt} />;
  // }

  // if (!!childImageSharp) {
  //   return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  // }

  // if (!!image && typeof image === 'string'){
  //   return <img style={imageStyle} src={image} alt={alt} />
  // }
  // svg support
  if (!childImageSharp && image.extension === 'svg') {
    return <img style={imageStyle} src={image.publicURL} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
