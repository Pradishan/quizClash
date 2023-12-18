import React from 'react'
import '../styles/profile.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import proPic from '../assets/pro pic.jpg';
import starimg from '../assets/circle-star.jpg';
import pythonimg from '../assets/python.png';
import certificateimg from '../assets/certificates.jpg';

export default function Profile() {
  return (
    <>
    <Navbar />
    <div className="profile-banner">
          
          <div className="infocardContainer">
            <div id="main">
              <img src={proPic} alt="Profile" />
            </div>
            <div id="textbois">
              <h3>Emil Alicic</h3>
              <h5>STDUS001</h5>
              <a href="#">example@gmail.com</a>

              <div id="hotlinks">
                <a href="#">
                  <img id="codepenio" src={starimg} alt="Sri Lanka" />
                </a>
                275 XP
              </div>
            </div>
          </div>
        </div>



        <div className="container">
      <div className="main-body">
      
         
            <div className="row gutters-sm">
             
              <div className="col-md-12" ></div>
        <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Kenneth Valdez
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        fip@jukmuh.al
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (239) 816-9029
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (320) 380-4539
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      
                     {/*end edit modal*/}
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal" style={{ width: '15%' }}>
                        Edit Profile
                    </button>
                
                    {/*start edit modal*/}
                    <div className="modal" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="editModalLabel">Edit Details</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                  
                                    <div className="form-group">
                                        <label for="editName">Name</label>
                                        <input type="text" className="form-control" id="editName" placeholder="Enter your name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="editEmail">Email</label>
                                        <input type="email" className="form-control" id="editEmail" placeholder="Enter your email"/>
                                    </div>

                                    <div className="form-group">
                                      <label for="editEmail">Address</label>
                                      <input type="email" className="form-control" id="editEmail" placeholder="Enter your address"/>
                                  </div>

                                  <div className="form-group">
                                    <label for="editEmail">Phone No.</label>
                                    <input type="email" className="form-control" id="editEmail" placeholder="Enter your phone number"/>
                                </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                      {/*end edit modal*/}
                    </div>
                  </div>
                </div>
                
                <div className="row gutters-sm">

                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center mb-3">Previous Quizzzes</h4>
                      { /*Quiz Card */}
                    <div className="quiz-card">
                      <div className="row">
                          <div className="col-md-6">
                              <img className="card-image" src={pythonimg} alt="Quiz Image"/>
                          </div>
                          <div className="col-md-6">
                              <div className="card-details">
                                  <div className="card-title">Python</div>
                                  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
</div>
                                  <div className="card-description"></div>Your score: 20%</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  
                  </div>

                      </div>
                 
                


                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h4 className="d-flex align-items-center mb-3">Certificates</h4>
                        {/*Course Card */}
            <div className="col-md-12">
              <div className="course-card">
                  <img className="course-image" src={certificateimg} alt="Course Image"/>
                  <div className="card-details">
                    <div className="card-title">Java</div>
                    
                    <div className="card-description">Issued Date: 2023.05.21</div>
                    <div className="course-action">
                    <button type="button" className="btn btn-primary"  style={{ width: '15%' }}>
                        View
                    </button>
                    </div>
                </div>
              </div>
          </div>

          
        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                 
</div>
</div>




                
       

        
   <Footer />
    </>
  );
}
