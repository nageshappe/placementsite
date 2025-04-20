import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const coes = [
  {
    title: "MongoDB COE",
    icon: "🍃",
    description: "Hands-on learning environment focused on modern NoSQL databases and scalable applications.",
    details: "The MongoDB COE empowers students with skills in document-based database design, aggregation pipelines, indexing, and performance tuning. It is aligned with industry standards for data-driven applications."
  },
  {
    title: "Virtusa COE",
    icon: "🚀",
    description: "Virtual labs and mentorship from industry leaders in digital engineering.",
    details: "In collaboration with Virtusa, this COE provides students real-world exposure in cloud, DevOps, and enterprise solutions through live sessions, projects, and expert mentoring."
  },
  {
    title: "EPAM COE",
    icon: "💡",
    description: "Focus on software engineering practices and agile development frameworks.",
    details: "EPAM’s COE offers bootcamps, hackathons, and problem-solving challenges focused on core software engineering, microservices architecture, and product innovation."
  },
  {
    title: "GlobalLogic COE",
    icon: "🌐",
    description: "Product engineering and design-thinking methodologies.",
    details: "This COE emphasizes building user-centric software using design thinking, agile methods, and advanced product lifecycle management practices."
  },
  {
    title: "PEGA COE",
    icon: "⚙️",
    description: "Platform for Business Process Management and CRM solutions.",
    details: "PEGA COE enables students to learn process automation, customer engagement workflows, and low-code platform development. Certification and job alignment support included."
  },
  {
    title: "Mitsubishi COE",
    icon: "🏭",
    description: "Industry automation, robotics, and embedded systems.",
    details: "Mitsubishi Electric's COE prepares students in PLC programming, SCADA systems, robotics, and factory automation for Industry 4.0 readiness."
  },
  {
    title: "Wipro COE",
    icon: "💼",
    description: "Training in emerging tech through Wipro's academic partnerships.",
    details: "The Wipro COE includes AI/ML, full stack, and cybersecurity training programs, offering exposure to real industry problems and faculty collaboration."
  },
];

const CentersOfExcellence = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Centers of Excellence</h2>

      {/* Display COE cards */}
      <div className="d-flex gap-3 overflow-auto pb-3">
        {coes.map((coe, index) => (
          <div
            key={index}
            className="card shadow-sm text-center flex-shrink-0"
            style={{ width: "250px", cursor: "pointer" }}
            onClick={() => setSelected(coe)}
          >
            <div className="card-body">
              {/* <div style={{ fontSize: "2rem" }}>{coe.icon}</div> */}
              <h5 className="card-title mt-2 text-primary fw-semibold">{coe.title}</h5>
              <p className="card-text small text-muted">{coe.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display selected COE details */}
      {selected && (
        <div className="mt-4 p-4 bg-light rounded shadow-sm">
          <h4 className="text-primary">{selected.title}</h4>
          <p className="text-muted">{selected.details}</p>
        </div>
      )}
    </div>
  );
};

export default CentersOfExcellence;
    