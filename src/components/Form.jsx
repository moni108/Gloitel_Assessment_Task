import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Form = () => {
  const [course, setCourse] = useState({
    id: "",
    batchNo: "",
    selectCourse: "",
    selectSubCourse: "",
    selectCourseTime: "",
    selectCourseMedium: "",
    courseDuration: "",
    selectCourseMode: "",
    coursePrice: "",
    discount: "",
    amount: "",
  });
  const { updateId } = useParams();
  let name, value;
  const [courseArray, setcoursesArray] = useState([]);
  const [forupdateitems, setforupdateitems] = useState([]);
  const [id, setId] = useState(0);
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCourse({ ...course, [name]: value });
  };
  const PostData = (e) => {
    e.preventDefault();
    if (Array.isArray(forupdateitems) && forupdateitems.length !== 0) {
      setId((id) => updateId);
      forupdateitems.map((oneItem) => {
        setcoursesArray((courseArray) => [...courseArray, oneItem]);
      });
    }
    const {
      batchNo,
      selectCourse,
      selectSubCourse,
      selectCourseTime,
      selectCourseMedium,
      courseDuration,
      selectCourseMode,
      coursePrice,
      discount,
      amount,
    } = course;
    let data = {
      id,
      batchNo,
      selectCourse,
      selectSubCourse,
      selectCourseTime,
      selectCourseMedium,
      courseDuration,
      selectCourseMode,
      coursePrice,
      discount,
      amount,
    };
    setcoursesArray((courseArray) => [...courseArray, data]);
    setId(id + 1);
  };
  if (Array.isArray(courseArray) && courseArray.length !== 0) {
    localStorage.setItem("newCourses", JSON.stringify(courseArray));
  }
  if (typeof updateId !== "undefined" && updateId !== null) {
    useEffect(() => {
      const item = JSON.parse(localStorage.getItem("newCourses"));
      item.map((course, index) => {
        if (index == updateId) {
          course.id = updateId;
          setCourse({ ...course, course });
        } else {
          setforupdateitems((forupdateitems) => [...forupdateitems, course]);
        }
      });
  
    }, []);
  }
  return (
    <section className="vh-100 vw-100 d-flex justify-content-center">
      <div className="shadow p-3 m-3  rounded">
        <h2 className="text-uppercase text-center mb-3">Create Course</h2>
        <hr />
        <form method="POST" id="contact_form">
          <div className="row g-3 p-5">
            <div className="col-sm-4">
              <label className="form-label">Batch No*</label>
              <input
                type="text"
                id="batchNo"
                className="form-control"
                name="batchNo"
                value={course.batchNo}
                onChange={handleInput}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label">Select Course</label>
              <select
                id="selectCourse"
                name="selectCourse"
                className="form-select"
                value={course.selectCourse}
                onChange={handleInput}
              >
                <option selected>CGPSC</option>
                <option value="CGPSC">CGPSC</option>
              </select>
            </div>
            <div className="col-sm-4">
              <label className="form-label">Select Sub Course </label>
              <select
                id="selectSubCourse"
                name="selectSubCourse"
                className="form-select"
                value={course.selectSubCourse}
                onChange={handleInput}
              >
                <option selected>CGPSC INTEGRATED</option>
                <option value="CGPSC INTEGRATED">CGPSC INTEGRATED</option>
              </select>
            </div>
            <div className="col-sm-4">
              <label className="form-label">Select Course Time</label>
              <select
                id="selectCourseTime"
                name="selectCourseTime"
                className="form-select"
                value={course.selectCourseTime}
                onChange={handleInput}
              >
                <option selected>Morning (7:00 to 10:00 AM)</option>
                <option value="Morning (7:00 to 10:00 AM)">
                  Morning (7:00 to 10:00 AM)
                </option>
              </select>
            </div>

            <div className="col-sm-4">
              <label className="form-label">Select Course Medium</label>
              <select
                id="selectCourseMedium"
                name="selectCourseMedium"
                className="form-select"
                value={course.selectCourseMedium}
                onChange={handleInput}
              >
                <option selected>Hindi</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="col-sm-4">
              <label className="form-label">Course Duration</label>
              <input
                type="text"
                id="courseDuration"
                className="form-control"
                name="courseDuration"
                value={course.courseDuration}
                onChange={handleInput}
              />
            </div>
            <div className=" fromcontainer ">
              <div className="item sidebar">
                <label className="form-label">Upload Course Thumbnail</label>
                sidebar
              </div>
              <div className="item content-1">
                <label className="form-label">Select Course Mode</label>
                <input
                  type="text"
                  id="selectCourseMode"
                  className="form-control"
                  name="selectCourseMode"
                  value={course.selectCourseMode}
                  onChange={handleInput}
                />
              </div>
              <div className="item content-2">
                <label className="form-label">Course Price</label>
                <input
                  type="text"
                  id="coursePrice"
                  className="form-control"
                  name="coursePrice"
                  value={course.coursePrice}
                  onChange={handleInput}
                />
              </div>
              <div className="item content-3">
                <label className="form-label">Discount %</label>
                <input
                  type="text"
                  id="discount"
                  className="form-control"
                  name="discount"
                  value={course.discount}
                  onChange={handleInput}
                />
              </div>
              <div className="item content-4">
                <label className="form-label">Amount</label>
                <input
                  type="text"
                  id="amount"
                  className="form-control"
                  name="amount"
                  value={course.amount}
                  onChange={handleInput}
                />
              </div>
              <div className="d-grid gap-3 footer ">
                {" "}
                <button
                  type="submit"
                  onClick={PostData}
                  className="btn custom-btn "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
