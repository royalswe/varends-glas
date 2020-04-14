import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Employees = ({gridItems}) => {
    gridItems.forEach(item =>{
        item.alt = item.name // set img alt text same as the employer name
    })
    
    return (
    <div className="employees">

        {gridItems.map((item, index) =>
            <div className="employee-card" key={index}>
                <picture>
                    <PreviewCompatibleImage imageInfo={item} />
                </picture>
                <ul>
                    <li className="employee-name">{item.name}</li>
                    <li className="employee-title">{item.title}</li>
                    <li><a href={`tel:${item.phone}`}>{item.phone}</a></li>
                    <li><a href={`mailto:${item.email}`}>{item.email}</a></li>
                </ul>
            </div>
        )}
    </div>
    )
}

export default Employees