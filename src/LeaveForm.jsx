import ValidatedForm from "./ValidatedForm";

function LeaveForm() {
  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4">
          Leave Form
        </h2>

        <ValidatedForm>
        <div className="mb-3">
          <label className="form-label">
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
          <label className="form-label">
            Leave Date
          </label>

          <input
            type="date"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Reason
          </label>

          <textarea
            className="form-control"
            placeholder="Enter leave reason"
            minLength={5}
            maxLength={500}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Leave
        </button>
        </ValidatedForm>
      </div>
    </div>
  );
}

export default LeaveForm;