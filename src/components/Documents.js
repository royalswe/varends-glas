import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const Documents = ({gridItems}) => {
    // gridItems.forEach(item =>{
    //     item.alt = item.name // set img alt text same as the title
    // })
    console.log(gridItems);
    return (
    <div className="columns is-multiline is-mobile">

        {gridItems.map((item, index) =>
            <div className="column is-6" style={{}} key={index}>
                <picture>
                    <PreviewCompatibleImage imageInfo={item} />
                </picture>
                <a href={item.file.publicURL}> {item.file.publicURL} </a>
            </div>
        )}
    </div>
    )
}

export default Documents