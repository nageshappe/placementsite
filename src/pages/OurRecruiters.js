import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const recruiters = [
  { name: "TCS", logo: "/logos/tcs.png" },
  { name: "Infosys", logo: "/logos/infosys.png" },
  { name: "Wipro", logo: "/logos/wipro.png" },
  { name: "Capgemini", logo: "/logos/capgemini.png" },
  { name: "Accenture", logo: "/logos/accenture.png" },
  { name: "Cognizant", logo: "/logos/cognizant.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Commvault", logo: "/logos/commvault.png" },
  { name: "EPam", logo: "/logos/epam.png" },
  { name: "GlobalLogic", logo: "/logos/globallogic.png" },
  { name: "HCL", logo: "/logos/hcl.png" },
  { name: "NTTDATA", logo: "/logos/nttdata.png" },
  { name: "MEDHASERVO", logo: "/logos/medhaservo.png" },
  { name: "ORACLE", logo: "/logos/oracle.png" },
  { name: "PALTECH", logo: "/logos/paltech.png" },
  { name: "VIRTUSA", logo: "/logos/virtusa.png" },
  { name: "GlobalLogic", logo: "/logos/globallogic.png" },
  { name: "HCL", logo: "/logos/hcl.png" },
  { name: "NTTDATA", logo: "/logos/nttdata.png" },
];

const Recruiters = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Our Recruiters</h2>
      <div className="row g-2 justify-content-center">
        {recruiters.map((recruiter, index) => (
          <div className="col-6 col-sm-4 col-md-2 mb-4 text-center" key={index}>
            <div
              className="border rounded shadow-sm d-flex align-items-center justify-content-center"
              style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                title={recruiter.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
