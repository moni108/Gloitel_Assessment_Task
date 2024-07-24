import React, { useState, useEffect } from "react";
import Details from "./Details";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [allcourse, setAllcourse] = useState([]);

  useEffect(() => {
    const newCourse = JSON.parse(localStorage.getItem("newCourses"));
    if (newCourse) {
      setAllcourse(newCourse);
    }
  }, []);
  return (
    <div className="backgdDiv container my-5 py-3">
      <div className="d-flex justify-content-between  py-2">
        <p className="fs-3 mx-5 align-content-center text-color fw-bold">
          Your Course List
        </p>
        <div className="align-content-center">
          <Link to="/createCourse">
            <button type="button" className="btn custom-btn mx-5">
              Create Course
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 ">
          {allcourse.map((data) => (
            <Details key={data.id} courselist={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
