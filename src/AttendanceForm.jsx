import ValidatedForm from "./ValidatedForm";

function AttendanceForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Attendance Form
        </h2>

        <ValidatedForm>

          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter student name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Student ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter student ID"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Attendance Date</label>
            <input
              type="date"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Attendance Status</label>
              <select className="form-select" defaultValue="" required>
                <option value="" disabled>Select status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Leave">Leave</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit Attendance
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Attendance List</h4>

        <p className="text-secondary">
          Preview only. Attendance entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default AttendanceForm;