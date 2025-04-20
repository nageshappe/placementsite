import React from 'react';

const AWSCloudPractitioner = () => {
  return (
    <div className="mt-4 p-4 border rounded shadow-sm bg-light">
      <h3 className="text-primary">AWS Cloud Practitioner</h3>
      <p className="mt-2">
        This foundational certification program is designed to give students an overall understanding of AWS Cloud concepts, core services, security, architecture, pricing, and support.
      </p>
      <ul className="mt-3 ps-3">
        <li>Official training materials by AWS Academy</li>
        <li>Hands-on labs using AWS Educate & AWS Console</li>
        <li>Prepares students for the AWS Certified Cloud Practitioner exam</li>
        <li>Career-focused track in Cloud Computing and DevOps</li>
      </ul>
      <p className="mt-3 text-success fw-semibold">
        Over 200+ students successfully completed the program and earned certification.
      </p>
    </div>
  );
};

export default AWSCloudPractitioner;
