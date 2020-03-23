import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const WideFeatures = ({gridItems}) => {    
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

export default WideFeatures