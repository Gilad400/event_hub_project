import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserBox from './components/UserBox/UserBox';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  return (
      <div className="App">
          <UserBox />
          <Header />
          <SearchBar />
      </div>
  );
}

export default App;
