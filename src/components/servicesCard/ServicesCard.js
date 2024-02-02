import React from 'react'
import './ServicesCard.css'


const ServicesCard = ({title, desc}) => {
    return (
        
            <div className="card" >
                <div className="cardBody">
                    <img src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png" alt="Card1" />
                    <h2>{title}</h2>
                    <hr />
                    <p>{desc}</p>
                </div>
            </div>
    )
}

export default ServicesCard
