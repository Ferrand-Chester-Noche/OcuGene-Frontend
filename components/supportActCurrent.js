import React from 'react';
import './supportActCurrent.css';

const supportActCurrent = () => {
  const events = [
    {
      title: 'Symposium on Genetic Disorders',
      type: 'Symposium',
      date: '2023-10-15',
      time: '10:00AM - 02:00PM',
      location: 'Community Hall, City Center'
    },
    {
      title: 'Charity Concert for Rare Diseases',
      type: 'Concert',
      date: '2023-11-05',
      time: '06:00PM - 09:00PM',
      location: 'Grand Auditorium, Downtown'
    },
    {
      title: 'Monthly Support Group Meeting',
      type: 'Support Group',
      date: '2023-12-01',
      time: '04:00PM - 06:00PM',
      location: 'Health Center, Westside'
    }
  ];

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <div className="event-card-header">
            <h2 className="event-title">{event.title}</h2>
            <div className="event-card-buttons">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </div>
          </div>
          <ul className="event-details">
            <li>{event.type}</li>
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default supportActCurrent;