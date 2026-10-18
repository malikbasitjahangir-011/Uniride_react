import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="bg-success text-white p-3"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <h4 className="mb-4">Hostel Admin</h4>
      <Link className="btn btn-light text-start mb-2" to="/">
  Dashboard
</Link>

      <div className="d-grid gap-2">

        <Link className="btn btn-light text-start" to="/student">
          Student
        </Link>

        <Link className="btn btn-light text-start" to="/room">
          Room
        </Link>

        <Link className="btn btn-light text-start" to="/allocation">
          Allocation
        </Link>

        <Link className="btn btn-light text-start" to="/fee">
          Fee
        </Link>

        <Link className="btn btn-light text-start" to="/complaint">
          Complaint
        </Link>

        <Link className="btn btn-light text-start" to="/visitor">
          Visitor
        </Link>

        <Link className="btn btn-light text-start" to="/attendance">
          Attendance
        </Link>

        <Link className="btn btn-light text-start" to="/staff">
          Staff
        </Link>

        <Link className="btn btn-light text-start" to="/maintenance">
          Maintenance
        </Link>

        <Link className="btn btn-light text-start" to="/leave">
          Leave
        </Link>

        <Link className="btn btn-light text-start" to="/meal">
          Meal
        </Link>

        <Link className="btn btn-light text-start" to="/notice">
          Notice
        </Link>

        <hr />

        <Link className="btn btn-warning text-start" to="/admincurd">
          Admin CRUD
        </Link>

        <Link className="btn btn-warning text-start" to="/checkout">
          Checkout
        </Link>

        <Link className="btn btn-warning text-start" to="/counter">
          Counter
        </Link>

        <Link className="btn btn-warning text-start" to="/admin">
          Admin
        </Link>

        <Link className="btn btn-warning text-start" to="/all-forms">
          All Forms
        </Link>

      </div>
    </div>
  );
}

export default Navbar;