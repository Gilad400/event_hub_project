import React from 'react';
import './EventCard.css';

function EventCard({ event }) {
    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <p>{event.dates.start.localDate}</p>
            <p>{event._embedded.venues[0].name}</p>
            <p>{event._embedded.venues[0].city.name}</p>
        </div>
    );
}

export default EventCard;
