import ValidatedForm from "./ValidatedForm";

function ComplaintForm() {
  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg p-4 mx-auto"
        style={{ maxWidth: "600px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4">
          📝 Complaint Form
        </h2>

        <ValidatedForm>
          <div className="mb-3">
            <label className="form-label fw-bold">
              Student Name
            </label>

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
            <label className="form-label fw-bold">
              Complaint
            </label>

            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your complaint"
              minLength={10}
              maxLength={1000}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            style={{ borderRadius: "10px" }}
          >
            Submit Complaint
          </button>
        </ValidatedForm>

        <h4 className="mt-4">
          Complaint List
        </h4>

        <p className="text-secondary">Preview only. Complaints are not saved.</p>
      </div>
    </div>
  );
}

export default ComplaintForm;