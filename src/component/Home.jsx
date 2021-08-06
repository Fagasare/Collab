import React, { Component } from 'react'

 class Home extends Component {
    render() {
        return (
            <div>
                <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1" />
                            <div className="double-bounce2" />
                        </div>
                    </div>
                </div>
                <header id="topnav" className="defaultscroll scroll-active">
                    {/* Tagline STart */}
                    <div className="tagline">
                        <div className="container">
                            <div className="float-left">
                                <div className="phone">
                                    <i className="mdi mdi-phone-classic" /> +1 800 123 45 67
                                </div>
                                <div className="email">
                                    <a href="/">
                                        <i className="mdi mdi-email" /> Support@mail.com
                                    </a>
                                </div>
                            </div>
                            <div className="float-right">
                                <ul className="topbar-list list-unstyled d-flex" style={{ margin: '11px 0px' }}>
                                    <li className="list-inline-item"><a href="/"><i className="mdi mdi-account mr-2" />Benny Simpson</a></li>
                                    <li className="list-inline-item">
                                        <select id="select-lang" className="demo-default">
                                            <option value>Language</option>
                                            <option value={4}>English</option>
                                            <option value={1}>Spanish</option>
                                            <option value={3}>French</option>
                                            <option value={5}>Hindi</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/* Tagline End */}
                    {/* Menu Start */}
                    <div className="container">
                        {/* Logo container*/}
                        <div>
                            <a href="index.html" className="logo">
                                <img src="images/logo-light.png" alt=".." className="logo-light" height={18} />
                                <img src="images/logo-dark.png" alt=".." className="logo-dark" height={18} />
                            </a>
                        </div>
                        <div className="buy-button">
                            <a href="post-a-job.html" className="btn btn-primary"><i className="mdi mdi-cloud-upload" /> Post a Job</a>
                        </div>{/*end login button*/}
                        {/* End Logo container*/}
                        <div className="menu-extras">
                            <div className="menu-item">
                                {/* Mobile menu toggle*/}
                                <a href="/" className="navbar-toggle">
                                    <div className="lines">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </a>
                                {/* End mobile menu toggle*/}
                            </div>
                        </div>
                        <div id="navigation">
                            {/* Navigation Menu*/}
                            <ul className="navigation-menu">
                                <li><a href="/">Home</a></li>
                                <li className="has-submenu">
                                    <a href="/">Jobs</a><span className="menu-arrow" />
                                    <ul className="submenu">
                                        <li><a href="/">Job List</a></li>
                                        <li><a href="/">Job Grid</a></li>
                                        <li><a href="/">Job Details</a></li>
                                        <li><a href="/">Job Details-2</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="/">Pages</a><span className="menu-arrow" />
                                    <ul className="submenu">
                                        <li><a href="/">About us</a></li>
                                        <li><a href="services.html">Services/Team</a></li>
                                        <li><a href="faq.html">Faqs</a></li>
                                        <li className="has-submenu"><a href="/"> Candidates</a><span className="submenu-arrow" />
                                            <ul className="submenu">
                                                <li><a href="candidates-listing.html">Candidates Listing</a></li>
                                                <li><a href="candidates-profile.html">Candidates Profile</a></li>
                                                <li><a href="create-resume.html">Create Resume</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="/"> Blog</a><span className="submenu-arrow" />
                                            <ul className="submenu">
                                                <li><a href="blog-grid.html">Blogs</a></li>
                                                <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="/"> Employers</a><span className="submenu-arrow" />
                                            <ul className="submenu">
                                                <li><a href="employers-list.html">Employers List</a></li>
                                                <li><a href="company-detail.html">Company Detail</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="/"> User Pages</a><span className="submenu-arrow" />
                                            <ul className="submenu">
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="signup.html">Signup</a></li>
                                                <li><a href="recovery_passward.html">Forgot Password</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="components.html"> Components</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">contact</a>
                                </li>
                            </ul>{/*end navigation menu*/}
                        </div>{/*end navigation*/}
                    </div>{/*end container*/}
                    {/*end end*/}
                </header>

                {/* Start Home */}
                    <section className="bg-home" style={{background: 'url("https://via.placeholder.com/2000X1333//88929f/5a6270C/O https://placeholder.com/") center center'}}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="title-heading text-center text-white">
                    <h6 className="small-title text-uppercase text-light mb-3">Find jobs, create trackable resumes and enrich your applications.</h6>
                    <h1 className="heading font-weight-bold mb-4">The Easiest Way to Get Your New Job</h1>
                  </div>
                </div>
              </div>
              <div className="home-form-position">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="home-registration-form p-4 mb-3">
                      <form className="registration-form">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="registration-form-box">
                              <i className="fa fa-briefcase" />
                              <input type="text" id="exampleInputName1" className="form-control rounded registration-input-box" placeholder="Job keybords..." />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="registration-form-box">
                              <i className="fa fa-location-arrow" />
                              <select id="select-country" className="demo-default">
                                <option value>Location</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia, Plurinational State of</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">British Indian Ocean Territory</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, the Democratic Republic of the</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">French Southern Territories</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">Heard Island and McDonald Islands</option>
                                <option value="VA">Holy See (Vatican City State)</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran, Islamic Republic of</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, Democratic People's Republic of</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Lao People's Democratic Republic</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libyan Arab Jamahiriya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia, Federated States of</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">Palestinian Territory, Occupied</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Réunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthélemy</option>
                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">Saint Martin (French part)</option>
                                <option value="PM">Saint Pierre and Miquelon</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard and Jan Mayen</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands, British</option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="registration-form-box">
                              <i className="fa fa-list-alt" />
                              <select id="select-category" className="demo-default">
                                <option value>Categories...</option>
                                <option value={4}>Accounting</option>
                                <option value={1}>IT &amp; Software</option>
                                <option value={3}>Marketing</option>
                                <option value={5}>Banking</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="registration-form-box">
                              <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" defaultValue="Submit" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                {/* end home */}
                
                    {/* popular category start */}
                    <section className="section">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title title-line pb-5">Popular Category</h4>
                                <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-account d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Developer</h5>
                                    <p className="text-success mb-0 rounded">780 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-desktop-classic d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Technology</h5>
                                    <p className="text-success mb-0 rounded">1270 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-bank d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Government</h5>
                                    <p className="text-success mb-0 rounded">2024 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-auto-fix d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Accounting / Finance</h5>
                                    <p className="text-success mb-0 rounded">786 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-office-building d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Construction / Facilities</h5>
                                    <p className="text-success mb-0 rounded">2156 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-telegram d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Tele-communications</h5>
                                    <p className="text-success mb-0 rounded">256 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-television-classic d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Design &amp; Multimedia</h5>
                                    <p className="text-success mb-0 rounded">585 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                            <a href="/">
                                <div className="popu-category-box bg-light rounded text-center p-4">
                                <div className="popu-category-icon mb-3">
                                    <i className="mdi mdi-human d-inline-block rounded-pill h3 text-primary" />
                                </div>
                                <div className="popu-category-content">
                                    <h5 className="mb-2 text-dark title">Human Resource</h5>
                                    <p className="text-success mb-0 rounded">548 Jobs</p>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mt-4 pt-2">
                            <a href="/" className="btn btn-primary-outline">Browse All Categories <i className="mdi mdi-chevron-right" /></a>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* popular category end */}
                
                {/* all jobs start */}
                <section className="section bg-light">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title title-line pb-5">Find Your Jobs</h4>
                            <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center mt-4 pt-2">
                        <ul className="nav nav-pills nav nav-pills bg-white rounded nav-justified flex-column flex-sm-row" id="pills-tab" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link rounded active" id="recent-job-tab" data-toggle="pill" href="#recent-job" role="tab" aria-controls="recent-job" aria-selected="true">Recent Jobs</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded" id="featured-job-tab" data-toggle="pill" href="#featured-job" role="tab" aria-controls="featured-job" aria-selected="false">Featured Jobs</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded" id="part-job-tab" data-toggle="pill" href="#part-job" role="tab" aria-controls="part-job" aria-selected="false">Part Time</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded" id="full-job-tab" data-toggle="pill" href="#full-job" role="tab" aria-controls="full-job" aria-selected="false">Full Time</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="tab-content mt-2" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="recent-job" role="tabpanel" aria-labelledby="recent-job-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Web Developer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Oakridge Lane Richardson</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Php Developer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Berkshire Circle Knoxville</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>900-1100/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-10">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 2 - 3 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Graphic Designer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Sumner Street Anaheim</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>800-1000/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Part Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 0 - 1 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-4.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">UI/UX Designer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Pinewood Drive Chicago</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Freelancer</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-10">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="featured-job" role="tabpanel" aria-labelledby="featured-job-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Php Developer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Berkshire Circle Knoxville</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>900-1100/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-10">
                                        <div className="mo-mb-2">
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 2 - 3 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Web Developer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Oakridge Lane Richardson</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-4.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">UI/UX Designer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Pinewood Drive Chicago</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Freelancer</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Graphic Designer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Sumner Street Anaheim</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>800-1000/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Part Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 0 - 1 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="part-job" role="tabpanel" aria-labelledby="part-job-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Web Developer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Oakridge Lane Richardson</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Php Developer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Berkshire Circle Knoxville</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>900-1100/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-10">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 2 - 3 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Graphic Designer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Sumner Street Anaheim</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>800-1000/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Part Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 0 - 1 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-4.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">UI/UX Designer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Pinewood Drive Chicago</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Freelancer</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="full-job" role="tabpanel" aria-labelledby="full-job-tab">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-2.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Php Developer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Berkshire Circle Knoxville</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>900-1100/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-10">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 2 - 3 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-1.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Web Developer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Oakridge Lane Richardson</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Full Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-4.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">UI/UX Designer</a></h5>
                                            <p className="text-muted mb-0">Web Themes pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Pinewood Drive Chicago</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>1000-1200/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Freelancer</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 1 - 2 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden">
                                    <div className="lable text-center pt-2 pb-2">
                                    <ul className="list-unstyled best text-white mb-0 text-uppercase">
                                        <li className="list-inline-item"><i className="mdi mdi-star" /></li>
                                    </ul>
                                    </div>
                                    <div className="p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                        <div className="mo-mb-2">
                                            <img src="images/featured-job/img-3.png" alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <h5 className="f-18"><a href="/" className="text-dark">Graphic Designer</a></h5>
                                            <p className="text-muted mb-0">Web Technology pvt.Ltd</p>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div>
                                            <p className="text-muted mb-0"><i className="mdi mdi-map-marker text-primary mr-2" />Sumner Street Anaheim</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-primary">$</span>800-1000/m</p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <p className="text-muted mb-0">Part Time</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="p-3 bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Experience :</span> 0 - 1 years</p>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div>
                                            <p className="text-muted mb-0 mo-mb-2"><span className="text-dark">Notes :</span> languages only differ in their grammar. </p>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                        <div>
                                            <a href="/" className="text-primary">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* end row */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end row */}
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-12 mt-4 pt-2">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination job-pagination mb-0 justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="/" tabIndex={-1} aria-disabled="true">
                                <i className="mdi mdi-chevron-double-left f-15" />
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/.">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">4</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/">
                                <i className="mdi mdi-chevron-double-right f-15" />
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    </div>
                    {/* end containar */}
                </section>
                {/* all jobs end */}

                    {/* How it Work start */}
                    <section className="section">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title title-line pb-5">How It Work</h4>
                                <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mt-4 pt-2">
                            <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                <div className="how-it-work-img position-relative rounded-pill mb-3">
                                <img src="images/how-it-work/img-1.png" alt="" className="mx-auto d-block" height={50} />
                                </div>
                                <div>
                                <h5>Register an account</h5>
                                <p className="text-muted">Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.</p>
                                <a href="/" className="text-primary">Read more <i className="mdi mdi-chevron-right" /></a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 mt-4 pt-2">
                            <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                <div className="how-it-work-img position-relative rounded-pill mb-3">
                                <img src="images/how-it-work/img-2.png" alt="" className="mx-auto d-block" height={50} />
                                </div>
                                <div>
                                <h5>Search your job</h5>
                                <p className="text-muted">Aliquam lorem ante dapibus in, viverra feugiatquis a tellus. Phasellus viverra nulla ut Quisque rutrum.</p>
                                <a href="/" className="text-primary">Read more <i className="mdi mdi-chevron-right" /></a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 mt-4 pt-2">
                            <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                <div className="how-it-work-img position-relative rounded-pill mb-3">
                                <img src="images/how-it-work/img-3.png" alt="" className="mx-auto d-block" height={50} />
                                </div>
                                <div>
                                <h5>Apply for job</h5>
                                <p className="text-muted">Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. semper nisi.</p>
                                <a href="/" className="text-primary">Read more <i className="mdi mdi-chevron-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* How it Work end */}

                    {/* counter start */}
                    <section className="section bg-counter position-relative" style={{background: 'url("https://via.placeholder.com/200X700//88929f/5a6270C/O https://placeholder.com/") center center'}}>
                        <div className="bg-overlay bg-overlay-gradient" />
                        <div className="container">
                        <div className="row" id="counter">
                            <div className="col-md-3 col-6">
                            <div className="home-counter pt-4 pb-4">
                                <div className="float-left counter-icon mr-3">
                                <i className="mdi mdi-bank h1 text-white" />
                                </div>
                                <div className="counter-content overflow-hidden">
                                <h1 className="counter-value text-white mb-1" data-count={120}>10</h1>
                                <p className="counter-name text-white text-uppercase mb-0">Companies</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3 col-6">
                            <div className="home-counter pt-4 pb-4">
                                <div className="float-left counter-icon mr-3">
                                <i className="mdi mdi-file-document-box h1 text-white" />
                                </div>
                                <div className="counter-content overflow-hidden">
                                <h1 className="counter-value text-white mb-1" data-count={480}>80</h1>
                                <p className="counter-name text-white text-uppercase mb-0">Applications</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3 col-6">
                            <div className="home-counter pt-4 pb-4">
                                <div className="float-left counter-icon mr-3">
                                <i className="mdi mdi-calendar-multiple-check h1 text-white" />
                                </div>
                                <div className="counter-content overflow-hidden">
                                <h1 className="counter-value text-white mb-1" data-count={120}>10</h1>
                                <p className="counter-name text-white text-uppercase mb-0">Job Posted</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3 col-6">
                            <div className="home-counter pt-4 pb-4">
                                <div className="float-left counter-icon mr-3">
                                <i className="mdi mdi-account-multiple-plus h1 text-white" />
                                </div>
                                <div className="counter-content overflow-hidden">
                                <h1 className="counter-value text-white mb-1" data-count={200}>10</h1>
                                <p className="counter-name text-white text-uppercase mb-0">Member</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* counter end */}

                    {/* testimonial start */}
                    <section className="section">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title title-line pb-5">Our Success Stories</h4>
                                <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                            </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-12">
                            <div id="owl-testi" className="owl-carousel owl-theme">
                                <div className="item testi-box rounded p-4 mr-3 ml-2 mb-4 bg-light position-relative">
                                <p className="text-muted mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                <div className="clearfix">
                                    <div className="testi-img float-left mr-3">
                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height={64} alt="" className="rounded-circle shadow" />
                                    </div>
                                    <h5 className="f-18 pt-1">Kevin Stewart</h5>
                                    <p className="text-muted mb-0">Web Designer at xyz Company</p>
                                    <div className="testi-icon">
                                    <i className="mdi mdi-format-quote-open display-2" />
                                    </div>
                                </div>
                                </div>
                                <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                                <p className="text-muted mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                <div className="clearfix">
                                    <div className="testi-img float-left mr-3">
                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height={64} alt="" className="rounded-circle shadow" />
                                    </div>
                                    <h5 className="f-18 pt-1">Charles Garrett</h5>
                                    <p className="text-muted mb-0">Marketing manager at abc Company</p>
                                    <div className="testi-icon">
                                    <i className="mdi mdi-format-quote-open display-2" />
                                    </div>
                                </div>
                                </div>
                                <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                                <p className="text-muted mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                <div className="clearfix">
                                    <div className="testi-img float-left mr-3">
                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height={64} alt="" className="rounded-circle shadow" />
                                    </div>
                                    <h5 className="f-18 pt-1">Perry Martinez</h5>
                                    <p className="text-muted mb-0">Marketing manager at abc Company</p>
                                    <div className="testi-icon">
                                    <i className="mdi mdi-format-quote-open display-2" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="container mt-100 mt-60">
                        <div className="row justify-content-center">
                            <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title title-line pb-5">Our Client's</h4>
                                <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                            </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/1.png" height={50} alt="" />
                            </div>{/*end col*/}
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/2.png" height={50} alt="" />
                            </div>{/*end col*/}
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/3.png" height={50} alt="" />
                            </div>{/*end col*/}
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/4.png" height={50} alt="" />
                            </div>{/*end col*/}
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/1.png" height={50} alt="" />
                            </div>{/*end col*/}
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 text-center">
                            <img src="images/clients/2.png" height={50} alt="" />
                            </div>{/*end col*/}
                        </div>
                        </div>
                    </section>
                    {/* testimonial end */}

                        {/* blog start */}
                        <section className="section bg-light">
                            <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title title-line pb-5">Career advice</h4>
                                    <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                    <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O https://placeholder.com/" className="img-fluid rounded-top" alt="" />
                                    <div className="overlay rounded-top bg-dark" />
                                    <div className="likes">
                                        <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item mr-2"><a href="/" className="text-white like"><i className="mdi mdi-heart-outline mr-1" />33</a></li>
                                        <li className="list-inline-item"><a href="/" className="text-white comments"><i className="mdi mdi-comment-outline mr-1" />08</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="content p-4">
                                    <h4><a href="/" className="title text-dark">How apps is the IT world</a></h4>
                                    <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam</p>
                                    <a href="/" className="text-dark readmore">Read more <i className="mdi mdi-chevron-right" /></a>
                                    </div>
                                    <div className="author">
                                    <p className=" mb-0"><i className="mdi mdi-account text-light" /> <a href="/" className="text-light user">Dirio Walls</a></p>
                                    <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check" /> 25 Sep, 2019</p>
                                    </div>
                                </div>
                                </div>{/*end col*/}
                                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                    <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O https://placeholder.com/" className="img-fluid rounded-top" alt="" />
                                    <div className="overlay rounded-top bg-dark" />
                                    <div className="likes">
                                        <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item mr-2"><a href="/" className="text-white like"><i className="mdi mdi-heart-outline mr-1" />33</a></li>
                                        <li className="list-inline-item"><a href="/" className="text-white comments"><i className="mdi mdi-comment-outline mr-1" />08</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="content p-4">
                                    <h4><a href="/" className="title text-dark">Vestibulum ante ipsum primis</a></h4>
                                    <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam</p>
                                    <a href="/" className="text-dark readmore">Read more <i className="mdi mdi-chevron-right" /></a>
                                    </div>
                                    <div className="author">
                                    <p className=" mb-0"><i className="mdi mdi-account text-light" /> <a href="/" className="text-light user">Dirio Walls</a></p>
                                    <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check" /> 25 Sep, 2019</p>
                                    </div>
                                </div>
                                </div>{/*end col*/}
                                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                    <img src="https://via.placeholder.com/800X533//88929f/5a6270C/O https://placeholder.com/" className="img-fluid rounded-top" alt="" />
                                    <div className="overlay rounded-top bg-dark" />
                                    <div className="likes">
                                        <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item mr-2"><a href="/" className="text-white like"><i className="mdi mdi-heart-outline mr-1" />33</a></li>
                                        <li className="list-inline-item"><a href="/" className="text-white comments"><i className="mdi mdi-comment-outline mr-1" />08</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="content p-4">
                                    <h4><a href="/" className="title text-dark">Maecenas tempus tellus eget</a></h4>
                                    <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam</p>
                                    <a href="/" className="text-dark readmore">Read more <i className="mdi mdi-chevron-right" /></a>
                                    </div>
                                    <div className="author">
                                    <p className=" mb-0"><i className="mdi mdi-account text-light" /> <a href="/" className="text-light user">Dirio Walls</a></p>
                                    <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check" /> 25 Sep, 2019</p>
                                    </div>
                                </div>
                                </div>{/*end col*/}
                            </div>
                            </div>
                        </section>
                        {/* blog end */}

                        {/* subscribe start */}
                        <section className="section">
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
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required aria-describedby="newssubscribebtn" />
                                        <div className="input-group-append">
                                        <button className="btn btn-primary submitBnt" type="submit" id="newssubscribebtn">Subscribe</button>
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
                <footer className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a href="/"><img src="images/logo-light.png" height={20} alt="..." /></a>
                        <p className="mt-4">At vero eos et accusamus et iusto odio dignissim os ducimus qui blanditiis praesentium</p>
                        <ul className="social-icon social list-inline mb-0">
                            <li className="list-inline-item"><a href="/" className="rounded"><i className="mdi mdi-facebook" /></a></li>
                            <li className="list-inline-item"><a href="/" className="rounded"><i className="mdi mdi-twitter" /></a></li>
                            <li className="list-inline-item"><a href="/" className="rounded"><i className="mdi mdi-instagram" /></a></li>
                            <li className="list-inline-item"><a href="/" className="rounded"><i className="mdi mdi-google" /></a></li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <p className="text-white mb-4 footer-list-title">Company</p>
                        <ul className="list-unstyled footer-list">
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> About Us</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Media &amp; Press</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Career</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Blog</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Pricing</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Marketing</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> CEOs </a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Agencies</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Our Apps</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <p className="text-white mb-4 footer-list-title">Resources</p>
                        <ul className="list-unstyled footer-list">
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Support</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Privacy Policy</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Terms</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Accounting </a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> Billing</a></li>
                            <li><a href="/" className="text-foot"><i className="mdi mdi-chevron-right" /> F.A.Q.</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <p className="text-white mb-4 footer-list-title f-17">Business Hours</p>
                        <ul className="list-unstyled text-foot mt-4 mb-0">
                            <li>Monday - Friday : 9:00 to 17:00</li>
                            <li className="mt-2">Saturday : 10:00 to 15:00</li>
                            <li className="mt-2">Sunday : Day Off (Holiday)</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>    <hr/>
                
                {/* footer end */}

                <footer className="footer footer-bar">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className>
                <p className="mb-0">© 2019 -2020 Jobya. Design with <i className="mdi mdi-heart text-danger" /> by Themesdesign.</p>
              </div>
            </div>
          </div>
        </div>{/*end container*/}
      </footer>{/*end footer*/}
                {/* Footer End */}

                
      {/* Back to top */}
      <a href="/" className="back-to-top rounded text-center" id="back-to-top"> 
        <i className="mdi mdi-chevron-up d-block"> </i> 
      </a>
      {/* Back to top */}

            </div>
        );
    }
}

export default Home;
