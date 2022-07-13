import React from "react";
// import ReactReadMoreReadLess from "react-read-more-read-less";
const common = (props) => {
  return (
    <>
      <div className="card-group col-12 col-lg-6 col-md-4">
        <div className="card">
          <img src={props.Imagesrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Id}.  {props.JobName}</h5>
            <p className="card-text">
          
            </p>
            <a href="#" className="btn btn-primary">More Details</a>
            <p className="card-footer">
              <small className="text-muted"> Apply Before Dateline</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default common;
