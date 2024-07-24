import React, { useEffect, useState } from "react";
import icont from "../assets/images.jpg";
import { Link } from "react-router-dom";

const Details = (props) => {
  const [acourse, setAcourse] = useState([]);

  useEffect(() => {
    setAcourse(props.courselist);
  }, []);
 
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div className="col">
      <div className="card">
        <img src={icont} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">CGPSC INTEGRATED</h5>
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">
              <p>
                <Link
                  className="link-info link-offset-2 link-underline link-underline-opacity-0"
                  to={`/details/${acourse.id}`}
                >
                  More Details
                </Link>
              </p>
            </div>
            <div className="p-2 bd-highlight">
              <Link to={`/updateCourse/${acourse.id}`}>
                <i className="fa-solid fa-pen" style={{ color: "#FFD43B" }}></i>
              </Link>
            </div>
            <div className="p-2 bd-highlight" onClick={handleClick}>
              <Link to="/deleteCourse">
                <i
                  className="fa-solid fa-trash-can"
                  style={{ color: "#f0142a" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
