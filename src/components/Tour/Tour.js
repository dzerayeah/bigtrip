import React from 'react'
import './Tour.css'

const Tour = ({ tour }) => {
    return (
        <div class="card">
            <div class="image image__1"></div>
            <div class="card_content">
                <span class="cities">{tour.cities}</span>
                <span class="tour_name">{tour.name}</span>
                <span class="price_info">
                    <span class="price">{tour.price}</span> <span class="za_kogo">за человека · {tour.dates}</span>
                </span>
                <span class="sbor">Сбор: {tour.fee}</span>
        
            </div>
        </div>
    )
}

export default Tour;


