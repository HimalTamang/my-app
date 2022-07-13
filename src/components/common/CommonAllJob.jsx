import React from "react";
const CommonAllJob = (props) => {
  return (
    <>
      <div className="card-group col-12">
        <div className="card card-css-app-for-all-jobs">
          <img src={props.Imagesrc} className="card-img-left" alt="Something" />
          <div className="card-body">
            <h5 className="card-title">
              {props.Id}. {props.JobName}
            </h5>
            <p className="card-text"></p>
            <div className="container-jobs-skills">
              <div className="jobs-skills"> 
                <span className="btn btn-warning">React</span>
                <span className="btn btn-warning">CSS</span>
                <span className="btn btn-warning">Accountant</span>
              </div>
              <div className="jobs-type">
                <span>time | </span>
                <span> Full/Half </span>
                <span className="remote-job"> |Remote/Physical</span>
              </div>
            </div>
            <a href="#" className="btn btn-primary gy-2">
              More Details
            </a>
            <p className="card-footer">
              <small className="text-muted"> Apply Before Dateline</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonAllJob;
