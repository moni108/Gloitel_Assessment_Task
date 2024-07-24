import React from "react";
import CourseList from "./components/CourseList";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import MoreDetails from "./components/MoreDetails";
import DeleteCourse from "./components/DeleteCourse";
import Form from "./components/Form";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CourseList />} />
      <Route path="/details/:id" element={<MoreDetails />} />
      <Route path="/deleteCourse" element={<DeleteCourse />} />
      <Route path="/updateCourse/:updateId" element={<Form />} />
      <Route path="/createCourse" element={<Form />} />
    </Routes>
  );
};

export default App;
