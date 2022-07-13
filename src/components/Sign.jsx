import React from "react";
import "../components/ComponentCss/Form.css";
function SignIn(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-10 col-xlg-10 mx-auto">
            <form className="shadow p-5 mb-5 bg-white rounded user-form">
              <div>
                <h3> Sign In Form</h3>
                <p>
                  Enter your corrent detail to access other features inside our
                  application. You need to enter your email and password that
                  you have created before or if you don't have one please create
                  one first. So that you can go further.
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

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
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
}
export default SignIn;
