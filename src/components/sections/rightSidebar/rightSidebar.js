import React from "react";
import Footer from "../../layout/footer";
import Course from "./course";

export default function RightSidebar({}) {
  return (
    <div className="right-sidebar-wrapper">
      <div className="right-sidebar-course-wrapper">
        <h1>Today's most viewed courses</h1>
        <Course
          title="1. The Six Morning Habits of High Performers"
          author="Pete Mockaitis"
        />
        <Course
          title="2. Speaking Confidently and Effectively"
          author="Pete Mockaitis"
        />
        <Course title="3. The Six Morning Habits of" author="Pete Mockaitis" />
      </div>
      <Footer />
    </div>
  );
}
