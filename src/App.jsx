import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img className="brand-logo" src="/comsats logo.webp" alt="COMSATS University logo" />
            UniRide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#how-it-works">How it works</a></li>
              <li className="nav-item"><a className="nav-link" href="#offers">What we offer</a></li>
              <li className="nav-item"><a className="nav-link" href="#community">Community</a></li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a className="login-link" href="#login">Log in</a>
              <a className="btn btn-dark nav-cta" href="#get-started">
                Get started <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-pattern"></div>
          <div className="container position-relative">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 hero-copy">
                <p className="eyebrow"><span className="eyebrow-dot"></span> Built for campus life</p>
                <h1>
                  Move together.<br />
                  <span>Go further.</span>
                </h1>
                <p className="hero-text">
                  UniRide makes getting to campus simpler, safer, and more social. Find a ride,
                  share your seat, and turn every commute into a connection.
                </p>
                <div className="hero-actions d-flex flex-wrap align-items-center gap-3">
                  <a href="#get-started" className="btn btn-primary btn-lg">
                    Find your ride <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <a href="#how-it-works" className="text-link">
                    See how it works <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="hero-proof d-flex align-items-center gap-3">
                  <div className="avatar-stack" aria-label="UniRide student community">
                    <span className="avatar avatar-one">A</span>
                    <span className="avatar avatar-two">M</span>
                    <span className="avatar avatar-three">S</span>
                    <span className="avatar avatar-four">+</span>
                  </div>
                  <div>
                    <strong>12k+ students</strong>
                    <small>already riding together</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 hero-visual-wrap">
                <div className="hero-visual">
                  <img src="/comsats bus.webp" alt="COMSATS university buses ready for student rides" />
                  <div className="visual-tag tag-top">
                    <i className="bi bi-shield-check"></i>
                    <span>
                      <strong>Safe &amp; verified</strong>
                      <small>Students only</small>
                    </span>
                  </div>
                  <div className="visual-tag tag-bottom">
                    <span className="tag-icon"><i className="bi bi-geo-alt-fill"></i></span>
                    <span>
                      <strong>Campus loop</strong>
                      <small>12 min away</small>
                    </span>
                    <i className="bi bi-arrow-up-right ms-auto"></i>
                  </div>
                  <div className="scribble">
                    your campus,<br />
                    your people <span>↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-note">
            <span>01</span>
            <span className="note-line"></span>
            <span>Shared rides, shared moments</span>
          </div>
        </section>

        <section id="how-it-works" className="steps-section section-space">
          <div className="container">
            <div className="row align-items-end mb-5">
              <div className="col-lg-7">
                <p className="eyebrow">Simple by design</p>
                <h2>
                  Less waiting.<br />
                  <span>More living.</span>
                </h2>
              </div>
              <div className="col-lg-4 ms-auto">
                <p className="section-intro">
                  From your first search to your last stop, UniRide keeps every trip easy and on your terms.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="step-card">
                  <span className="step-number">01</span>
                  <i className="bi bi-search step-icon"></i>
                  <h3>Find your route</h3>
                  <p>
                    Search rides going your way, when you need them. Filter by campus, time, and preferences.
                  </p>
                  <a href="#get-started" className="circle-arrow"><i className="bi bi-arrow-up-right"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step-card featured-step">
                  <span className="step-number">02</span>
                  <i className="bi bi-people step-icon"></i>
                  <h3>Meet your people</h3>
                  <p>Connect with verified students from your university and make the commute feel familiar.</p>
                  <a href="#get-started" className="circle-arrow"><i className="bi bi-arrow-up-right"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="step-card">
                  <span className="step-number">03</span>
                  <i className="bi bi-lightning-charge step-icon"></i>
                  <h3>Ride with ease</h3>
                  <p>Book your seat, split the cost, and get real-time updates from pickup to drop-off.</p>
                  <a href="#get-started" className="circle-arrow"><i className="bi bi-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offers" className="offers-section section-space">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <p className="eyebrow">What we offer</p>
                <h2>
                  A better way<br />
                  to <span>belong.</span>
                </h2>
                <p className="section-intro">
                  UniRide is more than a ride. It is the easiest way to make campus feel a little closer,
                  one shared journey at a time.
                </p>
                <a href="#get-started" className="btn btn-outline-dark mt-3">
                  Explore UniRide <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>

              <div className="col-lg-7">
                <div id="offerCarousel" className="carousel slide offer-carousel" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#offerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#offerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#offerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/comsats.webp" className="d-block w-100" alt="COMSATS campus building" />
                      <div className="carousel-caption">
                        <span>01 / Community</span>
                        <h3>
                          Good rides start<br />
                          with good company.
                        </h3>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="/comsats main campus.webp" className="d-block w-100" alt="Aerial view of COMSATS main campus" />
                      <div className="carousel-caption">
                        <span>02 / Connection</span>
                        <h3>
                          Find your people<br />
                          along the way.
                        </h3>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="/comsats dhamtor campus.webp" className="d-block w-100" alt="COMSATS Dhamtor campus building" />
                      <div className="carousel-caption">
                        <span>03 / Freedom</span>
                        <h3>
                          More freedom<br />
                          to explore.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#offerCarousel" data-bs-slide="prev" aria-label="Previous slide">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#offerCarousel" data-bs-slide="next" aria-label="Next slide">
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="community-section section-space">
          <div className="container">
            <div className="community-panel">
              <div>
                <p className="eyebrow">Your campus community</p>
                <h2>
                  One ride can<br />
                  change your day.
                </h2>
              </div>
              <div className="community-stat">
                <strong>87%</strong>
                <p>of students say shared rides make campus life feel more connected.</p>
              </div>
              <a href="#get-started" className="circle-arrow large-arrow"><i className="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
        </section>

        <section id="get-started" className="signup-section">
          <div className="container">
            <div className="signup-content">
              <p className="eyebrow">Ready when you are</p>
              <h2>
                Let’s make your<br />
                next ride <span>count.</span>
              </h2>
              <a className="btn btn-primary btn-lg" href="mailto:hello@uniride.example">
                Join UniRide <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row gy-4 justify-content-between">
            <div className="col-lg-4">
              <a className="navbar-brand" href="#home">
                <img className="brand-logo" src="/comsats logo.webp" alt="COMSATS University logo" />
                UniRide
              </a>
              <p className="footer-copy">Better journeys for the people building tomorrow.</p>
            </div>
            <div className="col-6 col-lg-2">
              <h5>Explore</h5>
              <a href="#how-it-works">How it works</a>
              <a href="#offers">What we offer</a>
              <a href="#community">Community</a>
            </div>
            <div className="col-6 col-lg-2">
              <h5>Connect</h5>
              <a href="mailto:hello@uniride.example">Contact us</a>
              <a href="#login">Log in</a>
              <a href="#get-started">Join now</a>
            </div>
            <div className="col-lg-3">
              <h5>Follow along</h5>
              <div className="social-links">
                <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#twitter" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#linkedin" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 UniRide</span>
            <span>Made for campus life</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;