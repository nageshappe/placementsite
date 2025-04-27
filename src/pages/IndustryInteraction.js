
import React from 'react';
import { useState } from 'react';
// import './IndustryInteraction.css';  // external CSS for better readability
const eventsData = [
    {
      year: '2024-25',
      events: [
        { title: 'UI PAth Academic Cohort Program', date:"28-03-2025", image: '/images/UIPath1.jfif' },
        { title: 'AutoDesk fusion 360 Workshop by ICT Academy', date:'09-04-2025', image: '/images/Autodesk2.jfif' },
        { title: 'Industrial Visit to PwC', image: '/images/techmahindra_visit.jpg' },
      ],
    },
    {
      year: '2023-24',
      events: [
        { title: 'Seminar on Cloud Computing by AWS',  date:"28-03-2025",image: '/images/aws_seminar.jpg' },
        { title: 'Guest Lecture on AI Trends by Infosys', date:"28-03-2025", image: '/images/infosys_ai.jpg' },
        { title: 'Industrial Visit to PwC',  date:"28-03-2025",image: '/images/techmahindra_visit.jpg' },
      ],
    }
  ];
const IndustryInteraction = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (imgSrc) => {
      setSelectedImage(imgSrc);
    };
  
    const closeImage = () => {
      setSelectedImage(null);
    };
    return (
    <div className="container py-4">
      <h2>Industry Interaction</h2>
      <p>
        To bridge the gap between academics and industry expectations, we actively engage with leading companies through various initiatives. Our students gain valuable insights, hands-on experience, and professional networking opportunities through:
      </p>
      <ul className="industry-list">
        <li>Industry-led seminars and technical talks</li>
        <li>Guest lectures by industry experts</li>
        <li>Corporate training programs and workshops</li>
        <li>Industrial visits and internships</li>
        <li>Live projects and case study collaborations</li>
      </ul>
      <p>
        These interactions ensure that students are industry-ready, equipped with technical and professional skills aligned with the latest trends.
      </p>
      {eventsData.map((yearData, idx) => (
        <div key={idx} style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '24px', color: '#023e8a', marginBottom: '20px', borderBottom: '2px solid #90e0ef', paddingBottom: '5px' }}>
            {yearData.year}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {yearData.events.map((event, i) => (
              <div
                key={i}
                style={{
                  background: '#e3f2fd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: '15%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: '0.3s',
                  cursor: 'pointer',
                }}
                onClick={() => openImage(event.image)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '10px' }}>
                  <p style={{ margin: '0', fontWeight: '600', color: '#333' }}>{event.title}</p>
                  <p style={{ margin: '0', fontWeight: '600', color: '#333' }}>{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup for enlarged image */}
      {selectedImage && (
        <div
          onClick={closeImage}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged View"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              boxShadow: '0 0 20px #fff',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default IndustryInteraction;
