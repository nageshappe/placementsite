  import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Welcome to Career Development Cell (CDC)</h2>

      {/* Placement Stats Section */}
      <section className="mb-5 text-center">
        
        <p>The College has a Centre for Student Services and Placement, which gives personal and career counseling to the students. The idea is to enable students to effectively cope with life at College as well as in their career. One of the major objectives of the centre is to help students in obtaining internships and placements in reputed companies across various industrial sectors. Assistance is also provided to students in procuring higher education opportunities. The College offers special coaching for GATE, TOEFL, and GRE to its students. They are also encouraged to present technical papers at seminars in other colleges with a view to improving their research and presentation skills. Also, during the last few years, several personality development programs have been conducted by experts from industry.

CVR’ites managed to grab the highest number of recruitments among similar aged institutions. For the 9th year in a row, CVR students have outshined 10s of colleges in securing the highest number of placements in several pool and On Campus recruitment drives.</p>
      </section>

      {/* Associate Dean CDC Info */}
      <section className="d-flex flex-column align-items-center text-center mb-5">
        <img
          src="/staff/vijayamair.jfif" // replace with actual path
          alt="Associate Dean, CDC"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5 className="fw-bold">Ms. Vijaya Mair</h5>
        <p className="text-muted fw-bold fs-6">Associate Dean - Campus & Corporate Relations</p>
        <p className="px-3" style={{ maxWidth: "700px" }}>
          "Our goal is to empower students with the right skills, confidence, and opportunities to thrive in the corporate world.
          The CDC works closely with industry partners and academic teams to bridge the gap between education and employment.
          We are committed to providing excellent training, career guidance, and placement support to help students realize their aspirations."
        </p>
      </section>
    </div>
  );
};

export default Home;

