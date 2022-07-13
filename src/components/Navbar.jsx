import React from "react";
import "../components/ComponentCss/Navbar.css";
export default function navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                Nepali Jobs Bazaar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        Blog
                      </a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/software">
                            IT/Software Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="accountant">
                           Accountant/Management Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/teachingjobs">
                            Teaching Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/waiterandwaitress">
                            Waiter/Waitress Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/banking">
                            Banking Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/salesmarketing">
                            Sales/Marketing Jobs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/graphicdesign">
                            Graphic Design Jobs
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="btn-class">
                    <button className="btn btn-outline-primary"
                      
                    >
                      <a href="./signin"
                      >
                        Sign In
                      </a>
                    </button>
                    <span>
                      
                      if you haven't an account? <a href="#"> Sign Up</a>
                    </span>
                    <button
                      className="btn sign-up-btn btn-outline-secondary"
                      
                    >
                      <a href="./signup"
                      >
                        Sign Up
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
