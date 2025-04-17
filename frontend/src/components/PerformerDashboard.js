import React, { useState } from 'react';
import '../styles/PerformerDashboard.css';

const PerformerDashboard = () => {
  const [showProposalModal, setShowProposalModal] = useState(false);
  const upcomingShows = [
    {
      id: 1,
      venue: "The Laughing Plot",
      location: "San Francisco, CA",
      date: "Oct 15, 2023",
      time: "8:00 PM",
      status: "Confirmed"
    },
    {
      id: 2,
      venue: "Comedy Cellar",
      location: "New York, NY",
      date: "Oct 22, 2023",
      time: "7:30 PM",
      status: "Confirmed"
    },
    {
      id: 3,
      venue: "Chuckles Comedy Club",
      location: "Chicago, IL",
      date: "Nov 5, 2023",
      time: "9:00 PM",
      status: "Pending"
    }
  ];

  const venueOpportunities = [
    {
      id: 1,
      name: "House Adda",
      location: "123 MG Road, Mumbai",
      date: "Apr 30, 2023",
    },
    {
      id: 2,
      name: "Comedy Hub",
      location: "45 Anna Salai, Delhi",
      date: "Apr 15, 2023",
    },
    {
      id: 3,
      name: "Sangeet Sawhney",
      location: "78 Ring Road, Bangalore",
      date: "Apr 24, 2023",
    },
    {
      id: 4,
      name: "Nitya Manch",
      location: "23 East Bridge, Kolkata",
      date: "Apr 21, 2023",
    }
  ];

  return (
    <div className="performer-dashboard">
      <div className="dashboard-header">
        <h1>Performer Dashboard</h1>
        <div className="header-actions">
          <button className="btn btn-outline-light">
            <i className="fas fa-upload"></i> Upload Media
          </button>
          <button className="btn btn-primary" onClick={() => setShowProposalModal(true)}>
            <i className="fas fa-plus"></i> Propose Show
          </button>
        </div>
      </div>

      {showProposalModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Propose a Show</h2>
              <button className="close-btn" onClick={() => setShowProposalModal(false)}>×</button>
            </div>
            <p className="modal-subtitle">Fill out the details to submit your proposal</p>
            <form className="proposal-form">
              <div className="form-group">
                <label>Show Title</label>
                <input type="text" className="form-control" placeholder="Enter show title" />
              </div>
              
              <div className="form-group">
                <label>Venue</label>
                <select className="form-control">
                  <option value="">Select a venue</option>
                  <option value="1">The Laughing Plot</option>
                  <option value="2">Comedy Cellar</option>
                  <option value="3">Chuckles Comedy Club</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Show Description</label>
                <textarea className="form-control" rows="4" placeholder="Describe your show"></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Preferred Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group half">
                  <label>Preferred Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              
              <div className="modal-actions">
                <button type="button" className="btn btn-outline-light" onClick={() => setShowProposalModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="dashboard-grid">
        <div className="upcoming-shows-section">
          <div className="section-header">
            <h2>Upcoming Shows</h2>
          </div>
          <div className="shows-list">
            {upcomingShows.map(show => (
              <div key={show.id} className="show-item">
                <div className="show-info">
                  <h3>{show.venue}</h3>
                  <p>{show.location}</p>
                  <p>{show.date} • {show.time}</p>
                </div>
                <div className="show-status">
                  <span className={`status-badge ${show.status.toLowerCase()}`}>
                    {show.status}
                  </span>
                  <button className="btn btn-outline-light btn-sm">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="venue-opportunities-section">
          <div className="section-header">
            <h2>Venue Opportunities</h2>
          </div>
          <div className="opportunities-grid">
            {venueOpportunities.map(venue => (
              <div key={venue.id} className="opportunity-card">
                <div className="venue-info">
                  <h3>{venue.name}</h3>
                  <p>{venue.location}</p>
                  <p className="date">{venue.date}</p>
                  <p className="price">{venue.price}</p>
                </div>
                <button className="btn btn-primary">Apply</button>
              </div>
            ))}
          </div>
          <button className="btn btn-outline-light find-more">
            Find More Venues
          </button>
        </div>

        {/* Remove the entire media-gallery-section */}
      </div>
    </div>
  );
};

export default PerformerDashboard;