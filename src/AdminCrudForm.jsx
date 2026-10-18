import ValidatedForm from "./ValidatedForm";

function AdminCrudForm() {
  return (
    <main className="container py-5">
      <header className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          <p className="text-success text-uppercase fw-semibold small mb-1">
            User access
          </p>
          <h1 className="h2 mb-1">Admin management</h1>
          <p className="text-secondary mb-0">
            Administrator account interface preview.
          </p>
        </div>
        <span className="badge text-bg-light border fs-6">
          UI only
        </span>
      </header>

      <div className="row g-4 align-items-start">
        <section className="col-12 col-lg-4" aria-labelledby="admin-crud-form-title">
          <div className="border rounded p-4">
            <div className="d-flex align-items-center gap-2 mb-4">
              <i className="bi bi-person-vcard text-success" aria-hidden="true" />
              <h2 className="h5 mb-0" id="admin-crud-form-title">
                Add administrator
              </h2>
            </div>

            <ValidatedForm>
              <div className="mb-3">
                <label className="form-label" htmlFor="crud-admin-name">Full name</label>
                <input
                  id="crud-admin-name"
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="crud-admin-email">Email address</label>
                <input
                  id="crud-admin-email"
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="crud-admin-role">Role</label>
                <select
                  id="crud-admin-role"
                  className="form-select"
                  name="role"
                  required
                >
                  <option>Administrator</option>
                  <option>Manager</option>
                </select>
              </div>

              <button type="submit" className="btn btn-success w-100">
                <i className="bi bi-plus-lg me-2" aria-hidden="true" />
                Add admin
              </button>
            </ValidatedForm>
          </div>
        </section>

        <section className="col-12 col-lg-8" aria-labelledby="admin-crud-list-title">
          <h2 className="h5 mb-3" id="admin-crud-list-title">
            Administrator accounts
          </h2>

          <div className="table-responsive border rounded">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col" className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center text-secondary py-5">
                    <i className="bi bi-people fs-3 d-block mb-2" aria-hidden="true" />
                    No administrator accounts to display.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="form-text mt-2 mb-0">
            Preview only. Entries are not added, saved, or sent anywhere.
          </p>
        </section>
      </div>
    </main>
  );
}

export default AdminCrudForm;
