import React from "react";
import ReactDOM from "react-dom";

const Internship = (props) => {
  return (
    <div>
      <div className="card internship-card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.company}</h5>
          <p>{props.role}</p>
          <a href={props.application} className="btn btn-dark">
            Apply Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Internship;
