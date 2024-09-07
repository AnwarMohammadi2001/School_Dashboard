import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Footer } from "./components/Footer";
import Teacher from "./Page/Teacher/Teachers";
import Student from "./Page/Student/Student";
import Setting from "./Page/Setting/Setting";
import OverView from "./Page/OverView/OverView";
import Library from "./Page/Library/Library";
import Classes from "./Page/Classes/Classes";
import Attendance from "./Page/Attendance/Attendance";
import ExamResult from "./Page/Exam_Result/ExamResult";
import TimeTable from "./Page/Timetable/TimeTable";
import Subjects from "./Page/Subjects/Subjects";
import FeePayment from "./Page/Fee_Payment/FeePayment";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<OverView />} />
            <Route path="/teachers" element={<Teacher />} />
            <Route path="/library" element={<Library />} />
            <Route path="/feepayment" element={<FeePayment />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/examresult" element={<ExamResult />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/students" element={<Student />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
        <div></div>
      </Router>
    </div>
  );
};

export default App;
