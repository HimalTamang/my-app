import React from "react";
import  "../components/ComponentCss/Form.css";

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-10 col-xlg-10 mx-auto">
            <form className="shadow p-5 mb-5 bg-white rounded user-form">
              <div>
                <h3> Registration Form</h3>
                <p>
                  Please, Enter your right address according to the field that
                  we have asked to you because it is not only for today if you
                  do, you don't need to customize later. Note: this is just an
                  example description for now
                </p>
              </div>
              <hr />
              <div className="mb-3 email-div">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email Address*"
                  required
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Account Password*"
                  required
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Re-Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Your Account Password*"
                  required
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3 email-div">
                <label for="exampleInputEmail1" className="form-label">
                  Permanent Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Address*"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 email-div">
                <label for="exampleInputEmail1" className="form-label">
                  Contact No.
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Contact Number*"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 email-div">
                <label for="exampleInputEmail1" className="form-label">
                  DOB
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Date Of Birth *"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 email-div gender-classname">
                <label for="exampleInputEmail1" className="form-label">
                  Gender
                </label>
          <br />
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                />
                <label for="female"> Female</label>
                <input type="radio" id="male" name="gender" value="Male" />
                <label forc="male"> Male</label>
                <br/>
                <label className="form-check-label" for="exampleCheck1">
                  Remember Me !
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
