import StudentForm from "./StudentForm";
import RoomForm from "./RoomForm";
import RoomAllocationForm from "./RoomAllocationForm";
import FeeForm from "./FeeForm";
import ComplaintForm from "./ComplaintForm";
import VisitorForm from "./VisitorForm";
import AttendanceForm from "./AttendanceForm";
import MaintenanceForm from "./MaintenanceForm";
import MealForm from "./MealForm";
import NoticeForm from "./NoticeForm";
import StaffForm from "./StaffForm";
import AdminForm from "./AdminForm";

function AllForms() {
  return (
    <div>
      <StudentForm />
      <RoomForm />
      <RoomAllocationForm />
      <FeeForm />
      <ComplaintForm />
      <VisitorForm />
      <AttendanceForm />
      <MaintenanceForm />
      <MealForm />
      <NoticeForm />
      <StaffForm />
      <AdminForm />
    </div>
  );
}

export default AllForms;