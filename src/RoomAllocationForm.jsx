import ValidatedForm from "./ValidatedForm";

function RoomAllocationForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Room Allocation Form
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
            <label className="form-label">Room Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter room number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Allocation Date</label>
            <input
              type="date"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Allocate Room
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Room Allocation List</h4>

        <p className="text-secondary">
          Preview only. Allocation entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default RoomAllocationForm;