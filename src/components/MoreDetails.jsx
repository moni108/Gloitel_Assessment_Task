import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import icont from "../assets/images.jpg";

const MoreDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("newCourses"));
    items.map((course, index) => {
      if (index == id) {
        setCourseDetails(course);
      }
    });
  }, []);
  function handleClick() {
    alert("Are you sure want to delete?");
  }
  return (
    <div className="backgdDiv container my-5 py-3">
      <div className="d-flex justify-content-center  py-2">
        <div className="card w-40 h-70 m-3 p-3">
          <img src={icont} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-uppercase text-center mb-3">
              CGPSC INTEGRATED
            </h5>
            <p className="card-text text-center text-muted"> More Details</p>

            <table className="table table-borderless ">
              <thead></thead>
              <tbody>
                <tr>
                  <td align="left">BATCH :</td>
                  <td align="right">{courseDetails.batchNo}</td>
                </tr>
                <tr>
                  <td align="left">Course :</td>
                  <td align="right">{courseDetails.selectCourse}</td>
                </tr>
                <tr>
                  <td align="left">MEDIUM :</td>
                  <td align="right">{courseDetails.selectCourseMedium}</td>
                </tr>

                <tr>
                  <td align="left">DURATION :</td>
                  <td align="right">{courseDetails.courseDuration}</td>
                </tr>
                <tr>
                  <td align="left">SUB Course :</td>
                  <td align="right">{courseDetails.selectSubCourse}</td>
                </tr>

                <tr>
                  <td align="left">MODE :</td>
                  <td align="right">{courseDetails.selectCourseMode}</td>
                </tr>
                <tr>
                  <td align="left">TIME : </td>
                  <td align="right">{courseDetails.selectCourseTime}</td>
                </tr>

                <tr>
                  <td align="left">Course Fee</td>
                  <td align="right">{courseDetails.coursePrice}</td>
                </tr>
                <tr>
                  <td align="left">Discount</td>
                  <td align="right">{courseDetails.discount}%</td>
                </tr>
              </tbody>
            </table>

            <hr className="hrborder" />
            <div className="d-flex justify-content-between">
              <p align="left">Total Amount</p>
              <p align="right">{courseDetails.amount}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center shadow p-3 m-3 btnColor rounded-pill">
            <div className="px-5 bd-highlight">
              <Link to={{ pathname: "/updateCourse" + courseDetails.id }}>
                <i className="fa-solid fa-pen" style={{ color: "#FFD43B" }}></i>
              </Link>
            </div>
            <div className="px-5 bd-highlight" onClick={handleClick}>
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

export default MoreDetails;
