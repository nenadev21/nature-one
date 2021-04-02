import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container-fluid search-wrapper">
        <div className="row">
          <form className="row g-lg-4" >
            <div className="col-6 area-wrapper">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
              />
            </div>
            <div className="col">
              <button
                className="btn btn-success mb-1"
                type="submit"
              >
                Search
              </button>
            </div>
            <div class="col">
              <button
                className="btn btn-success mb-1 location"
                type="submit"
              >
                Location
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
