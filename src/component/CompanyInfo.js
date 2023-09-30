import React from 'react';

function CompanyInfo() {
  return (
    <div className="card mx-auto border-primary mb-3 mt-4" style={{ maxWidth: '25rem' }}>
      <div className="card-header text-center">Company Info</div>
      <div className="card-body text-primary">
        <div className="card-text">
          <p><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
          <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
          <p><strong>Phone:</strong> 1234567890</p>
          <p><strong>Email:</strong> namitha.geeksynergy@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
