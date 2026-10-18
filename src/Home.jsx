import "./styles.css";
import { Link } from "react-router-dom";

const hostelOptions = [
  [
    "bi-people-fill",
    "Student Management",
    "Manage student records, contact information, departments, and hostel status.",
  ],
  [
    "bi-door-open-fill",
    "Room Management",
    "Manage hostel rooms, room capacity, available beds, and room status.",
  ],
  [
    "bi-wallet2",
    "Fee Management",
    "Manage hostel fees, payments, due dates, and payment status.",
  ],
];

const steps = [
  [
    "01",
    "Register students",
    "Add student information and keep all hostel student records organized.",
  ],
  [
    "02",
    "Allocate rooms",
    "Assign students to available rooms and manage room occupancy.",
  ],
  [
    "03",
    "Manage hostel",
    "Handle fees, complaints, attendance, visitors, leave requests, and other hostel activities.",
  ],
];

function Home() {
  return (
    <main className="home-page">

      {/* Header */}
      <header className="site-header">
        <div className="site-container nav-shell">

          <Link className="brand" to="/" aria-label="Hostel Management System home">
            <span className="brand-icon">
              <i className="bi bi-building-fill" />
            </span>
            Hostel Management System
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#hostel-options">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>

            <Link to="/login">Log in</Link>

            <Link className="button button-small" to="/student">
              Manage Students <i className="bi bi-arrow-up-right" />
            </Link>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="site-container hero-grid">

          <div className="hero-copy">

            <p className="eyebrow">
              <span /> SMART HOSTEL MANAGEMENT
            </p>

            <h1>
              Manage your hostel <span>easily.</span>
            </h1>

            <p className="hero-description">
              Hostel Management System helps administrators manage students,
              rooms, fees, complaints, attendance, visitors, and daily hostel
              activities in one place.
            </p>

            <div className="hero-actions">

              <Link className="button" to="/student">
                Manage Students <i className="bi bi-arrow-right" />
              </Link>

              <Link className="text-link" to="/room">
                Manage Rooms <i className="bi bi-arrow-up-right" />
              </Link>

            </div>

            <div className="hero-note">
              <i className="bi bi-building-fill" />
              Complete management for modern hostels
            </div>

          </div>

          <figure className="hero-visual">

            <img
              src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1400&q=85"
              alt="Modern hostel room"
            />

            <figcaption>
              <span className="caption-icon">
                <i className="bi bi-house-fill" />
              </span>

              <span>
                <strong>One hostel. One system.</strong>
                <small>Manage students, rooms and daily operations easily.</small>
              </span>
            </figcaption>

            <span className="image-index">01 / 03</span>

          </figure>

        </div>
      </section>

      {/* Benefits */}
      <section className="benefit-strip" aria-label="Hostel Management benefits">

        <div className="site-container benefit-grid">

          <p>
            <i className="bi bi-people" />
            <span>Manage all hostel students</span>
          </p>

          <p>
            <i className="bi bi-door-open" />
            <span>Manage rooms and allocations</span>
          </p>

          <p>
            <i className="bi bi-shield-check" />
            <span>Keep hostel records organized</span>
          </p>

        </div>

      </section>

      {/* Hostel Options */}
      <section className="content-section" id="hostel-options">

        <div className="site-container">

          <div className="section-heading">

            <p className="eyebrow">
              COMPLETE HOSTEL MANAGEMENT
            </p>

            <h2>
              Everything you need to manage a hostel.
            </h2>

            <p>
              Manage students, rooms, fees and other important hostel
              operations from one simple system.
            </p>

          </div>

          <div className="options-grid">

            {hostelOptions.map(([icon, title, description], index) => (

              <article className="option-item" key={title}>

                <span className={`option-icon option-icon-${index + 1}`}>
                  <i className={`bi ${icon}`} />
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

                <Link
                  to={
                    title === "Student Management"
                      ? "/student"
                      : title === "Room Management"
                      ? "/room"
                      : "/fee"
                  }
                >
                  Manage now <i className="bi bi-arrow-up-right" />
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* How It Works */}
      <section className="process-section" id="how-it-works">

        <div className="site-container process-layout">

          <div className="section-heading">

            <p className="eyebrow">
              SIMPLE HOSTEL MANAGEMENT
            </p>

            <h2>
              Three steps.
              <br />
              Complete control.
            </h2>

            <p>
              Start by adding students and rooms, then manage the complete
              hostel operation from one system.
            </p>

            <Link className="text-link" to="/student">
              Get started <i className="bi bi-arrow-right" />
            </Link>

          </div>

          <div className="steps-list">

            {steps.map(([number, title, description]) => (

              <article className="step-item" key={number}>

                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <i className="bi bi-arrow-up-right" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="safety-section" id="features">

        <div className="site-container safety-layout">

          <div className="safety-mark">
            <i className="bi bi-shield-check" />
          </div>

          <div>
            <p className="eyebrow">
              HOSTEL FEATURES
            </p>

            <h2>
              Everything in one place.
            </h2>
          </div>

          <p>
            Manage student records, rooms, room allocation, fees, attendance,
            complaints, visitors, staff, maintenance, leave requests, mess
            and hostel notices through one centralized system.
          </p>

        </div>

      </section>

      {/* Join / Start Section */}
      <section className="join-section">

        <div className="site-container join-layout">

          <div>

            <p className="eyebrow">
              HOSTEL MANAGEMENT STARTS HERE
            </p>

            <h2>
              Ready to manage your hostel?
            </h2>

            <p>
              Manage students, rooms and hostel activities with one simple
              management system.
            </p>

          </div>

          <div className="join-actions">

            <Link className="button button-light" to="/student">
              Add Student <i className="bi bi-arrow-right" />
            </Link>

            <Link className="join-secondary" to="/room">
              Manage Rooms <i className="bi bi-arrow-up-right" />
            </Link>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="site-footer">

        <div className="site-container footer-layout">

          <Link className="brand" to="/">

            <span className="brand-icon">
              <i className="bi bi-building-fill" />
            </span>

            Hostel Management System

          </Link>

          <p>
            Smart hostel management, simplified.
          </p>

          <span>
            © 2026 Hostel Management System
          </span>

        </div>

      </footer>

    </main>
  );
}

export default Home;