import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const Documents = ({gridItems}) => {
    gridItems.forEach(item =>{
        item.alt = item.title // set img alt text same as the title
    })
    return (
    <div className="columns is-multiline">

        {gridItems.map((item, index) =>
            <div className="column is-4 has-text-centered" style={{marginBottom:"5em"}} key={index}>
                <a href={item.file.publicURL} target="_blank" rel="noopener noreferrer">
                    <picture>
                        <PreviewCompatibleImage imageInfo={item} />
                    </picture>
                </a>
                <h3 style={{marginTop:"1em"}}>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        )}
    </div>
    )
}

export default Documents