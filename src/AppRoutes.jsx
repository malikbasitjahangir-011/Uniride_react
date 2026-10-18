import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Login from "./Login";

import StudentForm from "./StudentForm";
import RoomForm from "./RoomForm";
import RoomAllocationForm from "./RoomAllocationForm";
import FeeForm from "./FeeForm";
import ComplaintForm from "./ComplaintForm";
import VisitorForm from "./VisitorForm";
import AttendanceForm from "./AttendanceForm";
import StaffForm from "./StaffForm";
import MaintenanceForm from "./MaintenanceForm";
import LeaveForm from "./LeaveForm";
import MealForm from "./MealForm";
import NoticeForm from "./NoticeForm";

import AdminCrudForm from "./AdminCrudForm";
import Checkout from "./Checkout";
import Counter from "./Counter";
import AdminForm from "./AdminForm";
import AllForms from "./AllForms";

function AppRoutes() {
  return (
    <BrowserRouter>

  <div className="d-flex">

    <Navbar />

    <main className="flex-grow-1">
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Hostel Management Forms */}
        <Route path="/student" element={<StudentForm />} />
        <Route path="/room" element={<RoomForm />} />
        <Route path="/allocation" element={<RoomAllocationForm />} />
        <Route path="/fee" element={<FeeForm />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/visitor" element={<VisitorForm />} />
        <Route path="/attendance" element={<AttendanceForm />} />
        <Route path="/staff" element={<StaffForm />} />
        <Route path="/maintenance" element={<MaintenanceForm />} />
        <Route path="/leave" element={<LeaveForm />} />
        <Route path="/meal" element={<MealForm />} />
        <Route path="/notice" element={<NoticeForm />} />

        {/* Teacher Required Tasks */}
        <Route path="/admincurd" element={<AdminCrudForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/all-forms" element={<AllForms />} />

           </Routes>
    </main>

  </div>

</BrowserRouter>
  );
}

export default AppRoutes;