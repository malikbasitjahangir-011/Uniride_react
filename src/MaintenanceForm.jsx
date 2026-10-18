import ValidatedForm from "./ValidatedForm";

function MaintenanceForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Maintenance Form</h2>

        <ValidatedForm>
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
          <label className="form-label">Issue</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter maintenance issue"
            minLength={5}
            maxLength={500}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Maintenance Request
        </button>
        </ValidatedForm>
      </div>
    </div>
  );
}

export default MaintenanceForm;