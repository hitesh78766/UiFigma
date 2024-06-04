import React from 'react';

const ResetPage = () => {
  return (
    <div
      className="modal fade"
      id="resetModal"
      tabIndex={-1}
      aria-labelledby="resetModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">           
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
          <h5 className="modal-title reset-title text-center  reset-header" id="resetModalLabel">Enter Your Email To <br></br> Reset Password</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <div className="  d-flex align-items-center justify-content-center">
                  <input
                    type="email"
                    className="form-control w-75"
                    id="emailInput"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="p-2 w-75 reset-btn" type="submit" disabled>Reset Password</button>
                </div>

                <div className="mt-2 d-flex justify-content-center">
                  <p className="single-sign w-75 text-center mt-2">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" >Cancel</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
