import ValidatedForm from "./ValidatedForm";

function StudentForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Student Registration Form
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
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            pattern="[0-9+() .-]{7,20}"
            title="Enter a valid phone number (7 to 20 characters)."
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Room Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter room number"
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
        </ValidatedForm>

      </div>
    </div>
  );
}

export default StudentForm;