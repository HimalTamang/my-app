import "../components/ComponentCss/Home.css";
import Photo from './img/job-portal2.png';
function Home() {
  return (
    <>
      <section>
        <div className="container-fluid home-section">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                  <div className=" col-md-6 col-lg-6 col-xlg-6 col-sm-12 order-2 order-lg-1 first-div">
                      <h2>Get your dream<strong className="jobs"> job</strong> Based on Your Skills in<strong className="brand-name"> Nepali Jobs Bazaar </strong></h2>
                      <h6>First, keep your CV ready on your hand and search which kind of job you are looking for, from our lists of jobs. And then apply for the job that you are looking for. </h6>
                      <button className="btn btn-outline-warning ">Explore Now !</button>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xlg-6 col-sm-12 order-1 order-lg-2 second-div">
                
                    <img src={Photo} alt=" not found" />
                  </div>
                  </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
