import React from "react";
import Tour from '../../components/Tour/Tour'
import './ToursList.css'

const ToursList = ({ tours }) => {
    return (
        <div className="content_wrapper">
            {tours.map((tour) => {
                return <Tour tour={tour} />
            })}
        </div>
    )
}

export default ToursList;