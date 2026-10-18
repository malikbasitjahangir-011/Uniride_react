import ValidatedForm from "./ValidatedForm";

function MealForm() {
  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4">
          Meal Form
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
            Meal Type
          </label>

          <select className="form-select" defaultValue="" required>
            <option value="" disabled>Select meal type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Meal Date
          </label>

          <input
            type="date"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Meal
        </button>
        </ValidatedForm>
      </div>
    </div>
  );
}

export default MealForm;