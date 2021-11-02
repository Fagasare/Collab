import React from 'react'
import Footer from './Views/Footer'
import Header from './Views/Header'

const PostJob = () => {
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

            {/* Navigation Bar*/}
            <Header />
            {/*end header*/}

            {/* Start home */}
            <section className="bg-half page-next-level">
              <div className="bg-overlay" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="text-center text-white">
                      <h4 className="text-uppercase title mb-4">Create A new Job</h4>
                      <ul className="page-next d-inline-block mb-0">
                        <li>
                          <a
                            href="index.html"
                            className="text-uppercase font-weight-bold"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <span className="text-uppercase text-white font-weight-bold">
                            Post A Job
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end home */}

            {/* POST A JOB START */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="rounded shadow bg-white p-4">
                      <div className="custom-form">
                        <div id="message3" />
                        <form
                          method="post"
                          action="php/contact.php"
                          name="contact-form"
                          id="contact-form3"
                        >
                          <h4 className="text-dark mb-3">Post a New Job :</h4>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Job Title</label>
                                <input
                                  id="company-name"
                                  type="text"
                                  className="form-control resume"
                                  placeholder
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Job Type</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Job Type">Job Type</option>
                                    <option value={1}>Full Time</option>
                                    <option value={2}>Part Time</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Job Category</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Category">Category</option>
                                    <option value={1}>Web Developer</option>
                                    <option value={2}>PHP Developer</option>
                                    <option value={3}>Web Designer</option>
                                    <option value={4}>Graphic Designer</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">City</label>
                                <input
                                  id="city"
                                  type="text"
                                  className="form-control resume"
                                  placeholder
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Country</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Country">Country</option>
                                    <option value={1}>Afghanistan</option>
                                    <option value={2}>Bangladesh</option>
                                    <option value={3}>Canada</option>
                                    <option value={4}>Dominica</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Minimum Salary</label>
                                <input
                                  id="minimum-salary"
                                  type="text"
                                  className="form-control resume"
                                  placeholder="$8000"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Maximum Salary</label>
                                <input
                                  id="maximum-salary"
                                  type="text"
                                  className="form-control resume"
                                  placeholder="$20000"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Education Level</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Level">Level</option>
                                    <option value={1}>Level-1</option>
                                    <option value={2}>Level-2</option>
                                    <option value={3}>Level-3</option>
                                    <option value={4}>Level-4</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Year of Experience</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Experience">Experience</option>
                                    <option value={1}>1 Year</option>
                                    <option value={2}>2 Year</option>
                                    <option value={3}>3 Year</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Website</label>
                                <input
                                  id="url"
                                  type="url"
                                  className="form-control resume"
                                  placeholder
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Email Address</label>
                                <input
                                  id="email-address"
                                  type="text"
                                  className="form-control resume"
                                  placeholder
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Phone Number</label>
                                <input
                                  id="number"
                                  type="text"
                                  className="form-control resume"
                                  placeholder
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Gender</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Gender">Gender</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Shift</label>
                                <div className="form-button">
                                  <select className="nice-select rounded">
                                    <option data-display="Shift">Shift</option>
                                    <option value={1}>Morning</option>
                                    <option value={2}>Evening</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group app-label mt-2">
                                <label className="text-muted">Job Description</label>
                                <textarea
                                  id="description"
                                  rows={6}
                                  className="form-control resume"
                                  placeholder
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <div className="input-group mt-2 mb-2">
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                      />
                                      <label className="custom-file-label rounded">
                                        <i className="mdi mdi-cloud-upload mr-1" /> Upload
                                        Files
                                      </label>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-inline-item">
                                  <h6 className="text-muted mb-0">
                                    Upload Images Or Documents.
                                  </h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 mt-2">
                              <a href="#" className="btn btn-primary">
                                Post a Job
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* POST A JOB END */}

            {/* subscribe start */}
            <section className="section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="float-left position-relative notification-icon mr-2">
                      <i className="mdi mdi-bell-outline text-primary" />
                      <span className="badge badge-pill badge-danger">1</span>
                    </div>
                    <h5 className="mt-2 mb-0">Your Job Notification</h5>
                  </div>
                  <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
                    <form>
                      <div className="form-group mb-0">
                        <div className="input-group mb-0">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email :"
                            required
                            aria-describedby="newssubscribebtn"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary submitBnt"
                              type="submit"
                              id="newssubscribebtn"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* subscribe end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
  
        </div>
    )
}

export default PostJob
