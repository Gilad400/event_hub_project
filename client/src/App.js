import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserBox from './components/UserBox/UserBox';
import SearchBox from './components/SearchBox/SearchBox';
import EventCard from './components/EventCard/EventCard';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Modal from './components/Modal/Modal';

function App() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
      const apiKey = 'YOUR_API_KEY'; // Replace with your Ticketmaster API key
      const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');

      const params = {
          apikey: apiKey,
          keyword: searchParams.eventName || '',
          startDateTime: searchParams.startDate ? `${searchParams.startDate}T00:00:00Z` : undefined,
          endDateTime: searchParams.endDate ? `${searchParams.endDate}T23:59:59Z` : undefined,
          classificationName: searchParams.category || '',
          city: searchParams.location || '',
          size: 20,
      };

      Object.keys(params).forEach((key) => {
          if (params[key]) {
              url.searchParams.append(key, params[key]);
          }
      });

      setLoading(true);
      setError(null);

      try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          const data = await response.json();
          setEvents(data._embedded?.events || []);
      } catch (error) {
          setError('Failed to fetch events. Please try again.');
          setEvents([]);
      } finally {
          setLoading(false);
          setIsModalOpen(true);
      }
  };

  return (
      <div className="App">
          <UserBox />
          <Header />
          <SearchBox onSearch={handleSearch} />
          <UpcomingEvents />
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              {loading && <p>Loading events...</p>}
              {error && <p className="error-message">{error}</p>}
              {!loading && !error && events.length > 0 ? (
                  <div className="events-container">
                      {events.map((event) => (
                          <EventCard key={event.id} event={event} />
                      ))}
                  </div>
              ) : (
                  !loading && !error && (
                      <p>No events found. Please try again with different search parameters.</p>
                  )
              )}
          </Modal>
      </div>
  );
}

export default App;
