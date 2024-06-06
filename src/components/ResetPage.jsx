import axios from 'axios';
import React, { useState } from 'react';


const ResetPage = () => {
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ea7d6cb-7b85-4538-b1be-5a1f97777d98");

    const response = await axios.post("https://api.web3forms.com/submit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = response.data;

    if (data.success) {
      setResult("Form Submitted Successfully...");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

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
          <div className="modal-body">
            <div className="text-center mb-4">
              <h5 className="modal-title reset-title" id="resetModalLabel">
                Enter Your Email To <br /> Reset Password
              </h5>
            </div>
            <form onSubmit={onSubmit}>
              <div className="">
              <span className={`${result.includes("Successfully") ? 'text-success' : 'text-danger'}`}>{result}</span>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <input
                    type="email"
                    className="form-control w-100"
                    id="emailInput"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="btn btn-primary py-2 w-100" type="submit" disabled={!email}>
                    Reset Password
                  </button>
                </div>

                <div className="mt-2 d-flex justify-content-center">
                  <p className="text-center mt-2 single-sign">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                      Cancel
                    </a>
                  </p>
                </div>
              </div>
              {/* <div className="text-center">
                <span className={`mt-3 ${result.includes("Successfully") ? 'text-success' : 'text-danger'}`}>{result}</span>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
