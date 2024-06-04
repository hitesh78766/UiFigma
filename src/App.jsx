import React from 'react';
import './App.css';
import GetStarted from './components/GetStarted';
import LoginForm from './components/LoginForm';
import ResetPage from './components/ResetPage';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZYisM7kdYMiF96V0d4Y5QEtAOopmWWCsaw&s"
                  alt=""
                  className="figma-img"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Primary <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Solutions <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Community <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Resources <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Contact Sales
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-center" role="search">
                  <p
                    className="me-3 mt-3 nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </p>
                  <button
                    type="button"
                    className="btn-get-started ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#getStartedModal"
                  >
                    Get Started For Free
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <hr style={{ color: 'lightgray' }}></hr>

      <div className='container '>
        <h1 className='heading-main'>How you <b>design</b> , <b>align</b> , and <b>build </b> matters. Do it together with Figma.</h1>
      </div>

      <LoginForm />
      <GetStarted />
      <ResetPage />
    </>
  );
}

export default App;

