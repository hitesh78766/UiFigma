import React from 'react';
import { useState } from 'react';

const GetStarted = () => {

  
  return (
    <div
      className="modal fade"
      id="getStartedModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="getStartedModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="getStartedModalLabel">Get Started For Free</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="">
                <div className='d-flex align-items-center justify-content-center'>
                  <button className="w-75 form-control" type="button">
                    <img width="22" height="22" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className='me-2'/>
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

                <div className='form-check d-flex align-items-center justify-content-center mt-3'>
                  <input type='checkbox' className='form-check-input me-2' id='subscribeCheckbox' />
                  <label className='form-check-label' htmlFor='subscribeCheckbox'>
                    Subscribe To Figma Tips and Updates*
                  </label>
                </div>

                <div className='d-flex align-items-center justify-content-center mt-4'>
                  <button className='form-control create-btn w-75' type="submit">
                    Create Account
                  </button>
                </div>

                <div className='mt-3 d-flex justify-content-center'>
                  <p className='pehra w-75 text-center'>
                    By clicking "Create account" or "Continue with Google", you agree to the 
                    <a href="#" style={{ textDecoration: "none" }}> Figma TOS</a> and 
                    <a href="#" style={{ textDecoration: "none" }}> Privacy Policy</a>.
                  </p>
                </div>

                <div className='mt-1 d-flex justify-content-center'>
                  <p className='pehra w-75 text-center'>
                    *By opting in, you are consenting to receive product, service and events updates from Figma. You can unsubscribe at any time.
                  </p>
                </div>

                <div className='mt-1 d-flex justify-content-center'>
                  <p className='single-sign w-75 text-center'>
                    <a href="#">Use single sign-on</a>
                  </p>
                </div>

                <div className='d-flex justify-content-center'>
                  <p className='single-sign'>
                    Already have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Log in</a>
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

export default GetStarted;
