import React from 'react'
import './Card.css'

function Card({item, Name}) {
 
    return (
        <>

         <div className="card-container">
            {item.map(cardlist => (
                <div className="card" key={cardlist.id}>
                <div className="card-content">
                    <img src={cardlist.image}/>
                    <div>
                        <h1>{cardlist.name}</h1>
                        <p>{cardlist.description}</p>
                    </div>
                </div>
            </div>
            ))}
            
       </div>
        </>
       
  )
}

export default Card
