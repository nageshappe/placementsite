import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

const FullStackBootcamp = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Full Stack Development Bootcamp (MERN)</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>📚 Overview</Accordion.Header>
          <Accordion.Body>
            A 6-week intensive hands-on training program to master MERN Stack—MongoDB, Express.js, React, Node.js. Learn to build scalable, interactive full-stack web applications.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>🧠 Skills Covered</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li><strong>Frontend (React):</strong> Components, Hooks, Forms, Routing</li>
              <li><strong>Backend (Node & Express):</strong> REST APIs, Auth (JWT), Middleware</li>
              <li><strong>Database (MongoDB):</strong> CRUD, Schema, Mongoose</li>
              <li><strong>Deployment:</strong> GitHub, Netlify/Vercel, Render</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>🛠️ Project Work</Accordion.Header>
          <Accordion.Body>
            Build and deploy:
            <ul>
              <li>💼 Job Portal App</li>
              <li>🛒 E-Commerce App</li>
            </ul>
            Projects are full-stack and hosted online.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>🏁 Outcomes</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Full-stack app development</li>
              <li>Team collaboration using Git</li>
              <li>Tech interview preparation</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>🎓 Certification & Details</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Certificate of Completion</li>
              <li>Top performers get badges/recommendations</li>
              <li><strong>Duration:</strong> 6 Weeks</li>
              <li><strong>Mode:</strong> Online/Offline + Hands-on Labs</li>
              <li><strong>Schedule:</strong> Evenings / Weekends</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FullStackBootcamp;
