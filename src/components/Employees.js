import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Employees = ({gridItems}) => {
    gridItems.forEach(item =>{
        item.alt = item.name // set img alt text same as the employer name
    })
    
    return (
    <div className="columns is-multiline is-mobile">

        {gridItems.map((item, index) =>
            <div className="column is-6" style={{}} key={index}>
                <picture>
                    <PreviewCompatibleImage imageInfo={item} />
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