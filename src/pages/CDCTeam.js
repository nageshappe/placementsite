import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const coordinators = [
  {
    name: "Dr. A. SeethaRam Nagesh",
    designation: "Placement Coordinator, IT Dept.",
    photo: "/staff/nagesh.jpeg",
    certifiedIn: "PEGA SAE 7.1, Android Kotlin Educator",
    experience: "24 years"
  },
  {
    name: "Dr. CVS SatyaMurty",
    designation: "Placement Coordinator, IT Dept.",
    photo: "/staff/satya.jpg",
    certifiedIn: "",
    experience: "26 years"
  },
  {
    name: "Dr. B. Janardhan",
    designation: "Placement Coordinator, ECE Dept.",
    photo: "/staff/janardhan.jpg",
    certifiedIn: "",
    experience: "15 years"
  },
  {
    name: "Dr. R.Prakash",
    designation: "Placement Coordinator, ECE Dept.",
    photo: "/staff/mahadeokar.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Dr. Murugan",
    designation: "Placement Coordinator, EEE Dept.",
    photo: "/staff/rajendra.jpg",
    certifiedIn: "Blue Prism RPA, CISCO NETCAD Academy ",
    experience: "13 years"
  },
  {
    name: "Mr. B.Satish",
    designation: "Placement Coordinator, EIE Dept.",
    photo: "/staff/nirdesh.jpg",
    certifiedIn: "Celonis Microchip Academy ",
    experience: "14 years"
  },
  {
    name: "Mr. P.Lava Kumar",
    designation: "Placement Coordinator, Mech Dept.",
    photo: "/staff/abhishek.jpg",
    certifiedIn: "IBM Celonis NVIDIA AWS AIML Academy ",
    experience: "12 years"
  },
  {
    name: "Mr. Mahesh",
    designation: "Placement Coordinator, CIVIL Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. M.Hanimi Reddy",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. VDS Krishna",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Ms. Deepthi Reddy ",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Jashua",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. S.Srinivas",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. N.Srinu",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Yadagiri",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. P.Sudhakar",
    designation: "Placement Coordinator, CSE Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Bhargav",
    designation: "Placement Coordinator, CSIT Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Praven Kumar",
    designation: "Placement Coordinator, AIML Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Harish Kumar",
    designation: "Placement Coordinator, AIML Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Phani Prasad",
    designation: "Placement Coordinator, DS Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. U Naresh",
    designation: "Placement Coordinator, DS Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. P. Sudheer",
    designation: "Placement Coordinator, DS Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Venkatesh",
    designation: "Placement Coordinator, CS Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
  {
    name: "Mr. Shravan Kumar",
    designation: "Placement Coordinator, CS Dept.",
    photo: "/staff/zohaib.jpg",
    certifiedIn: "",
    experience: "10 years"
  },
];

const getYears = (exp) => {
  if (!exp) return 0;
  const match = exp.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

const PlacementCoordinators = () => {
  const sorted = [...coordinators].sort((a, b) => getYears(b.experience) - getYears(a.experience));

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Placement Coordinators</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
        {sorted.map((person, index) => (
          <div className="col" key={index}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={person.photo}
                alt={person.name}
                className="card-img-top mx-auto mt-3"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold small">{person.name}</h6>
                <p className="text-primary fw-semibold small">{person.designation}</p>
                {person.certifiedIn && (
                  <p className="text-primary small">{person.certifiedIn}</p>
                )}
                {person.experience && (
                  <p className="text-muted small">{person.experience} of experience
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementCoordinators;
