
import axios from 'axios';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users', {
        params:{
          email: email,
        password: password
        }
      });

      if (response.data[0].password == password ) {
        setSuccessMessage('Logged in successfully!');
        setErrorMessage('');
        
      } else {
        setErrorMessage('Incorrect email or password.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Failed to log in:', error);
      setErrorMessage('Failed to log in. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="d-flex align-items-center justify-content-center">
                  <button className="w-100 form-control" type="button">
                    <img width="22" height="22" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="me-2" />
                    <span className="text-black fw-bold">Continue With Google</span>
                  </button>
                </div>
                <p className="text-center mt-2 mb-2">Or</p>
                <div className="d-flex align-items-center justify-content-center input">
                  <input
                    type="email"
                    className="form-control w-100"
                    id="emailInput"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3 input">
                  <input
                    type="password"
                    className="form-control w-100"
                    id="passwordInput"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <button className="form-control create-btn w-100" type="submit">Log in</button>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                  <p className="single-sign w-100 text-center"><a href="#" className="color">Use single sign-on</a></p>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="single-sign w-100 text-center"><a href="#" data-bs-toggle="modal" data-bs-target="#resetModal" className="color">Reset Password</a></p>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="single-sign">No account? <a href="#" data-bs-toggle="modal" data-bs-target="#getStartedModal" className="color">Create One</a></p>
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
