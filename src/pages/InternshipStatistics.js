import React from 'react';

const internshipsData = {
  virtual: {
    "2024-25": [
      { company: "AICTE EduSkills", role: "Cohort9 Virtuual Internship", students: 1282 },
      { company: "AICTE EduSkills", role: "Cohort10 Virtuual Internship", students: 659 },
      { company: "AICTE EduSkills", role: "Cohort11 Virtuual Internship", students: 686 },
      { company: "SalesForce", role: "Administrator Virtual Internship", students: 210 },
      { company: "SalesForce", role: "Developer Virtual Internship", students: 231 },
     ]
  },
  placement: {
    "2023-24": [
      { company: "Capgemini", role: "Software Engineering Internship", students: 15 },
      { company: "Wipro", role: "Project Engineer Internship", students: 12 },
      { company: "TCS", role: "Graduate Trainee Internship", students: 20 },
    ],
    "2022-23": [
      { company: "Accenture", role: "Associate Software Engineer Intern", students: 10 },
      { company: "Cognizant", role: "Programmer Analyst Trainee Intern", students: 8 },
    ],
  }
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px'
};

const thTdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'center'
};

const Internships = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#1565c0' }}>Internships Overview</h2>

      {/* Virtual Internships */}
      <section style={{ marginTop: '40px' }}>
        <h3 style={{ color: '#0d47a1', borderBottom: '2px solid #64b5f6', paddingBottom: '8px' }}>Virtual Internships</h3>
        {Object.entries(internshipsData.virtual).map(([year, internships], index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#0277bd' }}>{year}</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Company</th>
                  <th style={thTdStyle}>Role</th>
                  <th style={thTdStyle}>Student Count</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((intern, idx) => (
                  <tr key={idx}>
                    <td style={thTdStyle}>{intern.company}</td>
                    <td style={thTdStyle}>{intern.role}</td>
                    <td style={thTdStyle}>{intern.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Placement Internships */}
      <section style={{ marginTop: '50px' }}>
        <h3 style={{ color: '#2e7d32', borderBottom: '2px solid #81c784', paddingBottom: '8px' }}>Placement Internships</h3>
        {Object.entries(internshipsData.placement).map(([year, internships], index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#1b5e20' }}>{year}</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Company</th>
                  <th style={thTdStyle}>Role</th>
                  <th style={thTdStyle}>Student Count</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((intern, idx) => (
                  <tr key={idx}>
                    <td style={thTdStyle}>{intern.company}</td>
                    <td style={thTdStyle}>{intern.role}</td>
                    <td style={thTdStyle}>{intern.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Internships;
