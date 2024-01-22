import React from 'react'
import certificateimg from '../assets/certificates.jpg';

export default function CertificateDetailsCard() {
  return (
   
        <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="d-flex align-items-center mb-3">Certificates</h4>
                    {/*Course Card */}
                    <div className="col-md-12">
                      <div className="course-card">
                        <img className="card-img" src={certificateimg} alt="CourseImage" />
                        <div className="card-details">
                          <div className="card-title">Java</div>

                          <div className="card-description">Issued Date: 2023.05.21</div>
                          <div className="course-action">
                            <button type="button" className="btn btn-primary" style={{ width: '15%' }}>
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
  
  )
}
