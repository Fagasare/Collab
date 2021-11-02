import React from 'react'
import Footer from './Views/Footer'
import Header from './Views/Header'

const JobDetails = () => {
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
                        <h4 className="text-uppercase title mb-4">Job Detail</h4>
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
                            <a href="#" className="text-uppercase font-weight-bold">
                            Jobs
                            </a>
                        </li>
                        <li>
                            <span className="text-uppercase text-white font-weight-bold">
                            Job Detail two
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* end home */}

            {/* JOB SINGLE START */}
            <section className="section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                    <div className="job-detail text-center job-single border rounded p-4">
                        <div className="job-single-img mb-2">
                        <img
                            src="images/featured-job/img-1.png"
                            alt
                            className="img-fluid mx-auto d-block"
                        />
                        </div>
                        <h4 className>
                        <a href="#" className="text-dark">
                            Web Designer
                        </a>
                        </h4>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-3">
                            <p className="text-muted mb-2">
                            <i className="mdi mdi-bank mr-1" />
                            Web Themes.pvt.Ltd
                            </p>
                        </li>
                        <li className="list-inline-item">
                            <p className="text-muted mb-2">
                            <i className="mdi mdi-map-marker mr-1" />
                            Jim Rosa Lane San Francisco
                            </p>
                        </li>
                        <li className="list-inline-item">
                            <p className="text-muted mb-2">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $850 - $1000/month
                            </p>
                        </li>
                        </ul>
                        <p className="text-muted mb-0">
                        Suspendisse pulvinar augue ac venenatis condimentum at sem libero
                        volutpat nibh that nec pellentesque velit pede quis nunc Fusce a
                        quam etiam ut purus mattis mauris sodales aliquam curabitur site
                        Quisque placerat namipsum risus rutrum vitaeeumolestie vel lacus
                        sed augue
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <h5 className="text-dark mt-4">Job Description :</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="job-detail border rounded mt-2 p-4">
                            <div className="job-detail-desc">
                            <p className="text-muted mb-3">
                                Aenean vulputate eleifend tellus aenean leo ligula porttitor
                                consequat vitae eleifend ac enim liquam lorem ante, dapibus
                                in, viverra quis feugiat a tellu hasellus viverra nulla ut
                                metus varius laoreet uisque rutrum enean imperdiet tiam
                                ultricies nisi vel augue urabitur ullamcorper ultricies nisi
                                am eget dui tiam rhoncus aecenas tempus tellus eget
                                condimentum rhoncus sem quam semper libero amet adipiscing
                                sem neque sed ipsum am quam nunc blandit luctus pulvinar
                                hendrerit idlorem Maecenas nec odio et ante tincidunt
                                tempus. Nullam quis ante.{" "}
                            </p>
                            <p className="text-muted mb-0">
                                Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem
                                Maecenas nec odio et ante tincidunt tempus donec vitae
                                sapien ut libero venenatis faucibus ullam quis ante tiam sit
                                amet orci eget eros faucibus tincidunt ed fringilla mauris
                                sit amet nibh Donec sodales sagittis magna ed consequat leo
                                eget bibendum sodales augue velit cursus nunc quis gravida
                                magna mi libero usce vulputate eleifend sapien estibulum
                                purus qua scelerisque ut mollis sed nonummy id metus ullam
                                accumsan lorem Vivamus elementum semper enean vulputate
                                eleifend tellus enean leo ligula porttitor eu consequat
                                vitae eleifend ac enim liquam lorem ante dapibus viverra
                                quis feugiat tellus hasellus viverra nulla ut metus varius
                                laoreet uisque rutrum Aenean imperdiet in dui
                            </p>
                            </div>
                            <ul className="list-inline mt-3 mb-0">
                            <li className="list-inline-item mr-3">
                                <a href className="text-muted mb-0">
                                <i className="mdi mdi-earth mr-1" />
                                www.example.com
                                </a>
                            </li>
                            <li className="list-inline-item mr-3">
                                <a href className="text-muted mb-0">
                                <i className="mdi mdi-download mr-1" />
                                Download Info
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <h4 className="text-dark mt-4">Education &amp; Experience :</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="job-detail border rounded mt-2 p-4">
                            <div className="job-detail-desc">
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Morbi mattis ullamcorper velit hasellus gravida semper
                                nisi nullam vel sem.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Phasellus viverra nulla ut metus varius laoreet uisque
                                rutrum enean imperdiet.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Etiam ultricies nisi vel augue Curabitur ullamcorper
                                ultricies nisi am eget dui tiam rhoncus.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Donec mollis hendrerit risus hasellus nec sem in justo
                                pellentesque facilisis.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Praesent congue erat at massa Sed cursus turpis vitae
                                tortor onec posuere vulputate arcu.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Donec elit libero, sodales nec volutpat a suscipit non
                                turpis ullam sagittis.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Pellentesque auctor neque nec urna Proin sapien ipsum
                                porta a auctor quis euismod ut mi.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Pellentesque habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-0">
                                Ptristique senectus et netus et malesuada fames porta a
                                auctor quis euismod ut mi.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <h5 className="text-dark mt-4">Responsibilities :</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="job-detail border rounded mt-2 p-4">
                            <div className="job-detail-desc">
                            <p className="text-muted mb-3">
                                Aenean vulputate eleifend tellus aenean leo ligula porttitor
                                consequat at vitae eleifend ac enim liquam lorem ante,
                                dapibus in, viverra quis feugiat a tellu hasellus viverra
                                nulla ut metus varius laoreet uisque rutrum enean imperdiet
                                tiam ultricies nisi vel augue urabitur ullamcorper ultricies
                                nisi am eget dui tiam rhoncus aecenas tempus tellus eget
                                condimentum rhoncus sem quam semper libero amet Nullam quis
                                ante.{" "}
                            </p>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Morbi mattis ullamcorper velit hasellus gravida semper
                                nisi nullam vel sem.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Phasellus viverra nulla ut metus varius laoreet uisque
                                rutrum enean imperdiet.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Etiam ultricies nisi vel augue Curabitur ullamcorper
                                ultricies nisi am eget dui tiam rhoncus.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Donec mollis hendrerit risus hasellus nec sem in justo
                                pellentesque facilisis.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-2">
                                Praesent congue erat at massa Sed cursus turpis vitae
                                tortor onec posuere vulputate arcu.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <i className="mdi mdi-minus text-muted" />
                                </div>
                                <p className="text-muted mb-0">
                                Donec elit libero, sodales nec volutpat a suscipit non
                                turpis ullam sagittis.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <h5 className="text-dark mt-4">How To Apply :</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="job-detail border rounded mt-2 p-4">
                            <div className="job-detail-desc">
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <p className="text-muted mb-0">1 )</p>
                                </div>
                                <p className="text-muted mb-3 overflow-hidden d-block">
                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia Curae In ac dui quis mi
                                consectetuer lacinia ed aliquam ultrices mauris nteger
                                ante arcu accumsan consectetuer thet a eget posuere ut
                                mauris raesent adipiscing Sed lectus Donec mollis
                                hendrerit risus hasellue.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <p className="text-muted mb-0">2 )</p>
                                </div>
                                <p className="text-muted mb-3 overflow-hidden d-block">
                                In enim justo rhoncus ut imperdiet a venenatis vitae justo
                                ullam dictum felis eu pede mollis pretium nteger tincidunt
                                enean imperdiet tiam ultricies nisi vel augue urabitur
                                ullamcorper ultricies nisi am eget Etiam rhoncus ras
                                dapibus ivamus elementum semper nisi.
                                </p>
                            </div>
                            <div className="job-details-desc-item">
                                <div className="float-left mr-3">
                                <p className="text-muted mb-0">3 )</p>
                                </div>
                                <p className="text-muted mb-0 overflow-hidden d-block">
                                Maecenas nec odio et ante tincidunt tempus onec vitae
                                sapien ut libero venenatis faucibus ullam quis ante tiam
                                sit Vestibulum purus quam scelerisque ut mollis sed
                                nonummy id metus ullam accumsan lorem in dui ras ultricies
                                mi eu turpis hendrerit fringilla amet orci eget eros.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="company-brand-logo text-center">
                        <img
                        src="images/featured-job/img-2.png"
                        alt
                        className="img-fluid mx-auto d-block mb-3"
                        />
                        <h5 className="text-muted mb-0">
                        <a href="#" className="text-muted">
                            <i className="mdi mdi-bank mr-1" />
                            Themes Code.Pvt.Ltd
                        </a>
                        </h5>
                    </div>
                    <div className="job-detail rounded border job-overview mt-4 mb-4">
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-security text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Experience</h6>
                            <h6 className="text-black-50 pt-2 mb-0">1 To 3 Years Exp.</h6>
                        </div>
                        </div>
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-currency-usd text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Salary</h6>
                            <h6 className="text-black-50 pt-2 mb-0">$700 - $1200/month</h6>
                        </div>
                        </div>
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-apps text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Category</h6>
                            <h6 className="text-black-50 pt-2 mb-0">Developer</h6>
                        </div>
                        </div>
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-human-male-female text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Gender</h6>
                            <h6 className="text-black-50 pt-2 mb-0">Male &amp; Female</h6>
                        </div>
                        </div>
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-calendar-today text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Date Posted</h6>
                            <h6 className="text-black-50 pt-2 mb-0">30/08/2018</h6>
                        </div>
                        </div>
                        <div className="single-post-item mb-4">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-email text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Email</h6>
                            <h6 className="text-black-50 pt-2 mb-0">
                            Themescode@gmail.com
                            </h6>
                        </div>
                        </div>
                        <div className="single-post-item">
                        <div className="float-left mr-3">
                            <i className="mdi mdi-phone-classic text-muted mdi-24px" />
                        </div>
                        <div className="overview-details">
                            <h6 className="text-muted mb-0">Contact No</h6>
                            <h6 className="text-black-50 pt-2 mb-0">+91 1987 6543 21</h6>
                        </div>
                        </div>
                    </div>
                    <h5 className="text-dark">Job Location</h5>
                    <div className="map">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                        className="rounded"
                        style={{ border: 0 }}
                        allowFullScreen
                        />
                    </div>
                    <div className="job-details-desc-item mt-2">
                        <div className="float-left mr-2">
                        <i className="mdi mdi-map-marker text-muted" />
                        </div>
                        <p className="text-muted mb-2">
                        2254 Horizon CircleTacoma, WA 98499
                        </p>
                    </div>
                    <ul className="social-icon list-inline mb-0 mt-4">
                        <li className="list-inline-item">Share :</li>
                        <li className="list-inline-item">
                        <a href="#" className=" rounded">
                            <i className="mdi mdi-facebook" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" className=" rounded">
                            <i className="mdi mdi-twitter" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" className=" rounded">
                            <i className="mdi mdi-google-plus" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" className=" rounded">
                            <i className="mdi mdi-whatsapp" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" className=" rounded">
                            <i className="mdi mdi-linkedin" />
                        </a>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="#" className="btn btn-primary btn-block btn-sm">
                        <i className="mdi mdi-send mr-2" />
                        Apply This Job
                        </a>
                    </div>
                    <div className="mt-4">
                        <div className="job-single-or position-relative">
                        <h6 className="mb-0 text-dark text-center">OR</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <div className="job-single-social-icon text-center mt-4">
                            <a href className="text-white">
                            <i className="mdi mdi-facebook facebook" />
                            </a>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="job-single-social-icon text-center mt-4">
                            <a href className="text-white">
                            <i className="mdi mdi-google-plus google" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* JOB SINGLE END */}

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
    );
}

export default JobDetails
