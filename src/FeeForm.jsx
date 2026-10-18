import ValidatedForm from "./ValidatedForm";

function FeeForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Fee Form
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
            <label className="form-label">Fee Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter fee amount"
              min="0.01"
              step="0.01"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Payment Date</label>
            <input
              type="date"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit Fee
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Fee List</h4>

        <p className="text-secondary">
          Preview only. Fee entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default FeeForm;