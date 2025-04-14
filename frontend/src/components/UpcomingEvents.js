import React from 'react';
import '../styles/UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2 className="events-title">Upcoming Events</h2>
      <p className="events-description">
        Discover the hottest artist performances and secure your tickets today.
      </p>
      
      <div className="event-cards">
        <div className="event-card">
          <div className="event-image event-image-1"></div>
          <div className="event-details">
            <h3 className="event-name">Cultural Night Extravaganza</h3>
            <p className="event-venue">The Artistic Stage</p>
            <p className="event-date">October 15, 2023</p>
            <a href="/events/cultural-night" className="book-tickets">Book Tickets →</a>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-image event-image-2"></div>
          <div className="event-details">
            <h3 className="event-name">Performer Showcase</h3>
            <p className="event-venue">Rhythms Performance Club</p>
            <p className="event-date">October 22, 2023</p>
            <a href="/events/performer-showcase" className="book-tickets">Book Tickets →</a>
          </div>
        </div>
        
        <div className="event-card">
          <div className="event-image event-image-3"></div>
          <div className="event-details">
            <h3 className="event-name">Artistic Battle Royale</h3>
            <p className="event-venue">The Cultural Cellar</p>
            <p className="event-date">November 5, 2023</p>
            <a href="/events/battle-royale" className="book-tickets">Book Tickets →</a>
          </div>
        </div>
      </div>
      
      <div className="view-all-container">
        <a href="/events" className="view-all-btn">View All Events</a>
      </div>
    </div>
  );
};

export default UpcomingEvents;