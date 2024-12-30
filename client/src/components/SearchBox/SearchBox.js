import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ onSearch }) {
    // Local state for search inputs
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    // Trigger the parent-provided onSearch function when the search button is clicked
    const handleButtonClick = () => {
        onSearch({
            eventName,
            startDate,
            endDate,
            category,
            location,
        });
    };

    return (
        <div className="search-box">
            <h2>Search for Events</h2>
            <input
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleButtonClick}>Search</button>
        </div>
    );
}

export default SearchBox;
