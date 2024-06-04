import React from 'react';

function LoginForm() {
  return (
    <div
      className="modal fade"
      id="loginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <div className='d-flex align-items-center justify-content-center'>
                  <button
                    className=" w-75 form-control"
                    type="button"
                  >
                    <img
                      width="22"
                      height="22"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                      className='me-2'
                    />
                    <span className='text-black fw-bold'>
                      Continue With Google
                    </span>
                  </button>
                </div>

                <p className='text-center mt-2 mb-2'>Or</p>

                <div className='d-flex align-items-center justify-content-center input'>
                  <input
                    type="email"
                    className="form-control w-75"
                    id="emailInput"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>

                <div className='d-flex align-items-center justify-content-center mt-3 input'>
                  <input
                    type="password"
                    className="form-control w-75"
                    id="passwordInput"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>

                <div className='d-flex align-items-center justify-content-center mt-4'>
                  <button className='form-control create-btn w-75' type="submit">
                    Create Account
                  </button>
                </div>

                <div className='mt-2 d-flex justify-content-center'>
                  <p className='single-sign w-75 text-center'>
                    <a href="#">Use single sign-on</a>
                  </p>
                </div>

                <div className='mt-2 d-flex justify-content-center'>
                  <p className='single-sign w-75 text-center'>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#resetModal">Reset Password</a>
                  </p>
                </div>

                <div className='d-flex justify-content-center'>
                  <p className='single-sign'>
                    No account? <a href="#" data-bs-toggle="modal" data-bs-target="#getStartedModal">Create One</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
