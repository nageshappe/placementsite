import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const goals = [
  {
    title: "Enhance Employability",
    icon: "🎯",
    description: "Equip students with industry-relevant skills and certifications to boost job readiness."
  },
  {
    title: "Facilitate Internships & Placements",
    icon: "💼",
    description: "Establish strong connections with industries to provide internship and job opportunities."
  },
  {
    title: "Skill Development Programs",
    icon: "📚",
    description: "Organize technical, soft skills, and aptitude training to prepare students for recruitment."
  },
  {
    title: "Career Guidance",
    icon: "🧭",
    description: "Conduct career counseling sessions, webinars, and mentorship programs for better career planning."
  },
  {
    title: "Industry-Academia Collaboration",
    icon: "🤝",
    description: "Collaborate with companies for COEs, faculty development, and real-world project exposure."
  },
];

const PlacementGoals = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Goals of the Placement Cell</h2>
      <div className="row justify-content-center">
        {goals.map((goal, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <div style={{ fontSize: "2rem" }}>{goal.icon}</div>
                <h5 className="card-title mt-3 text-primary">{goal.title}</h5>
                <p className="card-text text-muted">{goal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementGoals;
