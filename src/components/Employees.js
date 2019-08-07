import React from 'react'
import Img from 'gatsby-image'

const Employees = ({gridItems}) => {
    const imageStyle = { borderRadius: '5px' }
    return (
    <div class="columns is-multiline is-mobile">

        {gridItems.map((item, index) =>
            
            <div class="column is-6" style={{}} key={index}>
                <picture>
                    <Img style={imageStyle} fluid={item.image.childImageSharp.fluid} alt="Bild på Anställd" />
                </picture>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.phone}</li>
                    <li>{item.email}</li>
                </ul>
            </div>
        )}
    </div>
    )
}

export default Employees