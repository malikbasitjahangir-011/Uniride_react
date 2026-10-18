import ValidatedForm from "./ValidatedForm";

function RoomForm() {
  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <h2 className="text-center mb-4">
          Room Form
        </h2>

        <ValidatedForm>

          <div className="mb-3">
            <label className="form-label">Room Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter room number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Type</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter room type"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter room capacity"
              min="1"
              step="1"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Status</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter room status"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Room
          </button>
        </ValidatedForm>

        <h4 className="mt-4">Room List</h4>

        <p className="text-secondary">
          Preview only. Room entries are not saved.
        </p>

      </div>
    </div>
  );
}

export default RoomForm;