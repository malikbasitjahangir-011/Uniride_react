import ValidatedForm from "./ValidatedForm";

function Login() {
  return (
    <div className="container mt-5">
      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center mb-4">
          Hostel Management Login
        </h2>

        <ValidatedForm>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              autoComplete="current-password"
              minLength={8}
              maxLength={128}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Login
          </button>
        </ValidatedForm>
      </div>
    </div>
  );
}

export default Login;