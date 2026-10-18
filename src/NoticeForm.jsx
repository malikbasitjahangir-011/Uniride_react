import ValidatedForm from "./ValidatedForm";

function NoticeForm() {
  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg p-4 mx-auto"
        style={{ maxWidth: "600px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4">
          📢 Notice Form
        </h2>

        <ValidatedForm>
        <div className="mb-3">
          <label className="form-label fw-bold">
            Notice Title
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter notice title"
              minLength={3}
              maxLength={120}
              required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Notice Description
          </label>

          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter notice description"
              minLength={10}
              maxLength={2000}
              required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Notice Date
          </label>

          <input
            type="date"
            className="form-control"
              required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add Notice
        </button>
        </ValidatedForm>

        <h4 className="mt-4">
          Notice List
        </h4>

        <p className="text-secondary">
          Preview only. Notice entries are not saved.
        </p>
      </div>
    </div>
  );
}

export default NoticeForm;