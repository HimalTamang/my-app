import React from 'react'
import CommonAllJob from './common/CommonAllJob';
import DataList from './common/DataList'
import "../components/ComponentCss/EachJob.css"
const SalesandMarketing = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <h3 className='pt-3 pb-3' >Sales and Marketing Jobs</h3>
                        {
                            DataList.map((Val,Index) =>{
                                return (
                                    <CommonAllJob key={Index} Id={Index} Imagesrc={Val.Imgsrc} JobName={Val.JobTitle} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SalesandMarketing;