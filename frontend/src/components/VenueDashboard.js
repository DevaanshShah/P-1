import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VenueDashboard.css';
import EventDetailsModal from './EventDetailsModal';

const VenueDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Sample data for upcoming shows
  const upcomingShows = [
    { id: 1, title: 'Friday Night Comedy', date: 'Oct 15, 2023', time: '8:00 PM', tickets: { sold: 175, total: 200 } },
    { id: 2, title: 'Improv Showcase', date: 'Oct 22, 2023', time: '7:30 PM', tickets: { sold: 85, total: 100 } },
    { id: 3, title: 'Stand-up Spotlight', date: 'Oct 29, 2023', time: '9:00 PM', tickets: { sold: 52, total: 80 } }
  ];

  const handleManageClick = () => {
    setShowModal(true);
  };

  return (
    <div className="dashboard-container">
      {/* Add venue manager header with search */}
      <div className="venue-manager-header">
        <h1>Venue Manager Dashboard</h1>
        <div className="header-actions">
          <div className="search-comedians">
            <input type="text" placeholder="Find Comedians" />
            </div>
          <button className="btn btn-primary">Add New Venue</button>
          <button className="btn btn-outline-light">View Details</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card upcoming-shows">
            <div className="card-header">
              <h2>Upcoming Shows</h2>
              <Link to="/venue/shows" className="view-all">View All &gt;</Link>
            </div>
            <div className="shows-list">
              {upcomingShows.map(show => (
                <div key={show.id} className="show-item">
                  <div className="show-info">
                    <h3>{show.title}</h3>
                    <p>{show.date} • {show.time}</p>
                  </div>
                  <div className="show-actions">
                    <div className="ticket-info">
                      <span className={`ticket-count ${show.tickets.sold === show.tickets.total ? 'sold-out' : ''}`}>
                        {show.tickets.sold}/{show.tickets.total} tickets
                      </span>
                    </div>
                    <button className="manage-btn" onClick={handleManageClick}>Manage</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="schedule-btn">
              <span className="plus-icon">+</span> Schedule New Show
            </button>
          </div>

          <div className="dashboard-card performer-requests">
            <div className="card-header">
              <h2>Performer Requests</h2>
              <Link to="/venue/requests" className="view-all">View All &gt;</Link>
            </div>
            <div className="requests-content">
              <p className="no-requests">No pending requests</p>
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Find Comedians" 
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions-list">
              <Link to="/venue/calendar" className="action-item">
                <span className="action-icon">📅</span>
                <span>Manage Calendar</span>
              </Link>
              <Link to="/venue/earnings" className="action-item">
                <span className="action-icon">💰</span>
                <span>View Earnings</span>
              </Link>
              <Link to="/venue/profile" className="action-item">
                <span className="action-icon">🏢</span>
                <span>Update Venue Info</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <EventDetailsModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default VenueDashboard;