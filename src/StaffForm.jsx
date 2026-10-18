import ValidatedForm from "./ValidatedForm";

function StaffForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Staff Form
        </h2>

        <ValidatedForm>

          <div className="mb-3">
            <label className="form-label">Staff Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter staff name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Staff ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter staff ID"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter designation"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter contact number"
              pattern="[0-9+() .-]{7,20}"
              title="Enter a valid phone number (7 to 20 characters)."
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Staff
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Staff List</h4>

        <p className="text-secondary">
          Preview only. Staff entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default StaffForm;