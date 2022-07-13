import "../components/ComponentCss/Search.css";
function Search() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="search-btn">
              <input type="search" placeholder="Search Your Keyword Here" />
              <button className="btn btn-outline-info" type="search">
                Search
              </button>
            </div>
            <hr/>
          </div>
        </div>
      </div>      
    </>
  );
}
export default Search;
