import ValidatedForm from "./ValidatedForm";

function VisitorForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Visitor Form
        </h2>

        <ValidatedForm>

          <div className="mb-3">
            <label className="form-label">Visitor Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter visitor name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

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
            <label className="form-label">Visit Date</label>
            <input
              type="date"
              className="form-control"
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
            Add Visitor
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Visitor List</h4>

        <p className="text-secondary">
          Preview only. Visitor entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default VisitorForm;