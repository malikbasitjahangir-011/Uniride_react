import ValidatedForm from "./ValidatedForm";

function AdminForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Admin Form</h2>

        <ValidatedForm>
        <div className="mb-3">
          <label className="form-label">Admin Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter admin name"
            minLength={2}
            maxLength={100}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            minLength={8}
            maxLength={128}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Admin
        </button>
        </ValidatedForm>
      </div>
    </div>
  );
}

export default AdminForm;