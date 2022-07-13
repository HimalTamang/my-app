import React from "react";
import "../components/ComponentCss/JobList.css";
import Common from "./common/common";
import DataList from "./common/DataList";
import DataLists from "./common/DataLists";

const JobList = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-10 col-xlg-10 job2 mx-auto">
            <hr/>
            <div className="row job-lists">
              <div className="col-12 col-lg-6 col-md-12 col-sm-12 hot-job">
                <h2 className="hot-job-lists">Hot Jobs</h2>
                <div className="row gy-2">
                  {DataList.map((val, ind) => {
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
                <h2 className="top-job"> Top Jobs</h2>
                <div className="row gy-2">
                  {DataLists.map((value, ind) => {
                    return (
                      <Common
                        key={ind}
                        Id={ind}
                        Imagesrc={value.Imagessrc}
                        JobName={value.JobTitle}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
