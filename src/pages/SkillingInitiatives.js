import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FullStackBootcamp from "./FullStackBootcamp";
import WiproTalentNext from "./WiproTalentNext";
import AWSCloudPractitioner from "./AWSCloudPractitioner";

const initiatives = [
  {
    title: "Full Stack Development Bootcamp",
    description: "A 6-week intensive program covering MERN stack.",
    icon: "🖥️",
    key: "fullstack"
  },
  {
    title: "AWS Cloud Practitioner",
    description: "Official AWS certified training on cloud fundamentals.",
    icon: "☁️",
    key: "aws"
  },
  {
    title: "Aptitude Training Sessions",
    description: "Weekly sessions on Quantitative, Logical, and Verbal skills.",
    icon: "🧠"
  },
  {
    title: "Soft Skills & Communication",
    description: "Interactive training for interviews and presentations.",
    icon: "🗣️"
  },
  {
    title: "Wipro TalentNext",
    description: "Training students in emerging technologies with faculty connect and skill sessions.",
    icon: "💼",
    key: "wipro"
  }
];

const SkillingInitiatives = () => {
  const [selected, setSelected] = useState(null);

  const handleTitleClick = (key) => {
    setSelected(key);
  };

  const renderDetails = () => {
    switch (selected) {
      case "fullstack":
        return <FullStackBootcamp />;
      case "wipro":
        return <WiproTalentNext />;
      case "aws":
        return <AWSCloudPractitioner />;
      default:
        return null;
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Skilling Initiatives</h2>
      <div className="d-flex gap-3 overflow-auto pb-2">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="card shadow-sm text-center flex-shrink-0"
            style={{ width: "250px", cursor: item.key ? "pointer" : "default" }}
            onClick={() => item.key && handleTitleClick(item.key)}
          >
            <div className="card-body">
              {/* <div style={{ fontSize: "2rem" }}>{item.icon}</div> */}
              <h5 className={`card-title mt-2 ${item.key ? "text-primary fw-semibold" : ""}`}>
                {item.title}
              </h5>
              <p className="card-text small text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {renderDetails()}
      </div>
    </div>
  );
};

export default SkillingInitiatives;
