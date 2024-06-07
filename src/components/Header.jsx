import React, { useState, useEffect } from 'react';

const Header = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['red', 'green', 'blue', 'orange', 'purple'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => 
        (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [colors.length]);

  return (
    <header>
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZYisM7kdYMiF96V0d4Y5QEtAOopmWWCsaw&s"
                  alt="Figma Logo"
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
                    <a className="nav-link" href="#">
                      Primary <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Solutions <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Community <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Resources <i className="fas fa-caret-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
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
      <hr style={{ color: 'lightgray' }} />

      <div className="container">
        <h1 className="heading-main">
          How you <b style={{ color: colors[colorIndex] }}>design </b>, <b style={{ color: colors[(colorIndex + 1) % colors.length] }}>align</b>, and <b style={{ color: colors[(colorIndex + 2) % colors.length] }}>build</b> matters. Do it together with Figma.
        </h1>
      </div>
    </header>
  );
};

export default Header;

