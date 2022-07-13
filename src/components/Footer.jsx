import React from "react";
import '../components/ComponentCss/Footer.css';
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <footer className="text-center text-lg-start bg-transparent">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>
                <div>
                  <a href="" className="me-4 text-reset">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </section>
              <section className="footer-items">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-4 company-description col-lg-4 col-xl-4 mx-auto mb-4">
                      <h4 className="text-uppercase fw-bold mb-4">
                        <i className="bi bi-code-slash"></i> Nepal Job Bazaar
                      </h4>
                      <p>
                        Nepali Job Bazaar is a online platform where you can be
                        hired as an employee and can hire a job as a company or
                        organization. One of the easiest and legit site to
                        instantaly hire based on your skills.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 useful-links mx-auto mb-4">
                      <h4 className="text-uppercase fw-bold mb-4">Useful links</h4>
                      <p>
                        <a href="#!" className="text-reset">
                          Donate Us
                        </a>
                      </p>
                  
                      <p>
                        <a href="#!" className="text-reset">
                          Blogs
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Help
                        </a>
                      </p>
                    </div>
                    <div className=" contact-info col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                      <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
                      <p>
                        <i className="bi bi-house me-3"></i> New York, NY 10012,
                        US
                      </p>
                      <p>
                        <i className="bi bi-envelope me-3"></i>
                        info@example.com
                      </p>
                      <p>
                        <i className="bi bi-phone me-3"></i> + 01 234 547 88
                      </p>
                      <p>
                        <i className="bi bi-phone me-3"></i> + 01 234 547 89
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="text-center p-4">
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="#">
                  Nepali Jobs Bazaar
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
