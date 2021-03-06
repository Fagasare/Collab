import React from 'react'

const Login = () => {
    return (
        <div>
  {/* Loader */}
  <div id="preloader">
    <div id="status">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  </div>
  {/* Loader */}
  <div className="back-to-home rounded d-none d-sm-block">
    <a
      href="index.html"
      className="text-white rounded d-inline-block text-center"
    >
      <i className="mdi mdi-home" />
    </a>
  </div>
  {/* Hero Start */}
  <section
    className="vh-100"
    style={{
      background:
        'url("https://via.placeholder.com/2000X1333//88929f/5a6270C/O https://placeholder.com/") center center'
    }}
  >
    <div className="home-center">
      <div className="home-desc-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="login-page bg-white shadow rounded p-4">
                <div className="text-center">
                  <h4 className="mb-4">Login</h4>
                </div>
                <form className="login-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group position-relative">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <p className="float-right forgot-pass">
                        <a
                          href="/ForgotPassword"
                          className="text-dark font-weight-bold"
                        >
                          Forgot password ?
                        </a>
                      </p>
                      <div className="form-group">
                        <div className="custom-control m-0 custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-0">
                      <button className="btn btn-primary w-100">Sign in</button>
                    </div>
                    <div className="col-lg-12 mt-4 text-center">
                      <h6>Or Login With</h6>
                      <ul className="list-unstyled social-icon mb-0 mt-3">
                        <li className="list-inline-item">
                          <a href="#/" className="rounded">
                            <i className="mdi mdi-facebook" title="Facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#/" className="rounded">
                            <i className="mdi mdi-google-plus" title="Google" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#/" className="rounded">
                            <i
                              className="mdi mdi-github-circle"
                              title="Github"
                            />
                          </a>
                        </li>
                      </ul>
                      {/*end icon*/}
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark mr-2">
                          Don't have an account ?
                        </small>{" "}
                        <a
                          href="/Register"
                          className="text-dark font-weight-bold"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              {/**/}
            </div>{" "}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </div>
    </div>
  </section>
  {/*end section*/}
  {/* Hero End */}

        </div>
    )
}

export default Login
