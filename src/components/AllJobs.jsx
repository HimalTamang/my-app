import React from "react";
import "../components/ComponentCss/JobList.css";
import PremiereJob from "../components/common/PremiereJobs";
import Common from "../components/common/common";
import CommonAllJob from "./common/CommonAllJob";
const AllJobs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto all-job">
            <hr />
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                <h3 className="premiere-job"> Premiere Jobs</h3>
                <div className="row gy-2">
                  {PremiereJob.map((val, ind) => {
                    return (
                      <Common
                        key={ind}
                        Id={ind}
                        Imagesrc={val.Imgsrc}
                        JobName={val.JobTitle}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                <h3 className="all-job-lists">All Jobs</h3>
                <div className="row gy-2">
                    {
                        PremiereJob.map((Val,ind) =>{
                            return (
                                <CommonAllJob  
                                key={ind}
                                Id={ind}
                                Imagesrc={Val.Imgsrc}
                                JobName={Val.JobTitle}
                                />
                            );
                        })
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
