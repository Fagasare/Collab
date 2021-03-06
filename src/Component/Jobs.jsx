import React from 'react';
import Footer from './Views/Footer';
import Header from './Views/Header';

const Jobs = () => {
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
                        <h4 className="text-uppercase title mb-4">Job Grid view</h4>
                        <ul className="page-next d-inline-block mb-0">
                        <li>
                            <a
                            href="/"
                            className="text-uppercase font-weight-bold"
                            >
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="#/" className="text-uppercase font-weight-bold">
                            Jobs
                            </a>
                        </li>
                        <li>
                            <span className="text-uppercase text-white font-weight-bold">
                            Job Grids
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* end home */}

            <section className="section">
                {/* REGISTRATION-FORM START */}
                <div className="container">
                <div className="home-form-position">
                    <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="home-registration-form bg-white job-list-grid-reg-form p-4 mb-3">
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
                                                    <select id="select-country" className="form-control rounded registration-input-box">
                                                        <option value>Location</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AX">??land Islands</option>
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
                                                        <option value="CI">C??te d'Ivoire</option>
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
                                                        <option value="RE">R??union</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barth??lemy</option>
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
                                                    <select id="select-category" className="form-control rounded registration-input-box">
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
                {/* REGISTRATION-FORM END */}
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="show-results mt-4">
                        <div className="float-left">
                        <h5 className="text-dark mb-0 pt-2">
                            Showing ( 240 Jobs &amp; Vacancies )
                        </h5>
                        </div>
                        <div className="sort-button float-right">
                        <select className="nice-select rounded">
                            <option data-display="Select">Nothing</option>
                            <option value={1}>Web Developer</option>
                            <option value={2}>PHP Developer</option>
                            <option value={3}>Web Designer</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Part Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-1.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Web Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                623 Oliverio Drive Plains, <br /> KS 67869
                                </p>
                                <p className="text-muted mb-1">$700 - $800/month</p>
                                <p className="text-muted mb-1">3 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-2.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Web Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                501 Ripple Street Saginaw, <br /> MI 48601
                                </p>
                                <p className="text-muted mb-1">$600 - $850/month</p>
                                <p className="text-muted mb-1">2 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-3.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Graphic Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                1868 Walkers Los Angeles, <br /> CA 90017
                                </p>
                                <p className="text-muted mb-1">$500 - $700/month</p>
                                <p className="text-muted mb-1">1.5 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-4.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    UI/UX Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Ventura Drive Santa Cruz, <br /> CA 95060
                                </p>
                                <p className="text-muted mb-1">$500 - $650/month</p>
                                <p className="text-muted mb-1">2 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-5.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    PHP Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Hart Street Wallingford, <br /> CT 06492
                                </p>
                                <p className="text-muted mb-1">$800 - $1000/month</p>
                                <p className="text-muted mb-1">3 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Part Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-6.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Software Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Ocello Street San Diego, <br /> CA 92103
                                </p>
                                <p className="text-muted mb-1">$700 - $800/month</p>
                                <p className="text-muted mb-1">2 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-7.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Graphic Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Burke Street Bedford, <br /> MA 01730
                                </p>
                                <p className="text-muted mb-1">$500 - $750/month</p>
                                <p className="text-muted mb-1">1 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Part Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-8.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Web Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                623 Oliverio Drive Plains, <br /> KS 67869
                                </p>
                                <p className="text-muted mb-1">$700 - $800/month</p>
                                <p className="text-muted mb-1">3 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-9.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Web Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                River Road Pueblo, <br /> CO 81003
                                </p>
                                <p className="text-muted mb-1">$550 - $700/month</p>
                                <p className="text-muted mb-1">2 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-5.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    PHP Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Hart Street Wallingford, <br /> CT 06492
                                </p>
                                <p className="text-muted mb-1">$800 - $1000/month</p>
                                <p className="text-muted mb-1">3 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Part Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-6.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Software Developer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Ocello Street San Diego, <br /> CA 92103
                                </p>
                                <p className="text-muted mb-1">$700 - $800/month</p>
                                <p className="text-muted mb-1">2 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 pt-2">
                        <div className="list-grid-item rounded">
                            <div className="grid-item-content p-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item f-15">
                                <span className="badge badge-success">Full Time</span>
                                </li>
                                <li className="list-inline-item float-right">
                                <div className="grid-fev-icon">
                                    <a href className="text-danger">
                                    <i className="mdi mdi-heart" />
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="grid-list-img mt-3">
                                <img
                                src="images/featured-job/img-7.png"
                                alt
                                className="img-fluid d-block"
                                />
                            </div>
                            <div className="grid-list-desc mt-3">
                                <h5 className="mb-1">
                                <a href="#" className="text-dark">
                                    Graphic Designer
                                </a>
                                </h5>
                                <p className="text-muted f-14 mb-1">
                                Burke Street Bedford, <br /> MA 01730
                                </p>
                                <p className="text-muted mb-1">$500 - $750/month</p>
                                <p className="text-muted mb-1">1 Years Exp.</p>
                            </div>
                            </div>
                            <div className="apply-button p-3 border-top">
                            <a href="#" className="btn btn-primary btn-sm">
                                Apply Now
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-4 pt-2">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination job-pagination mb-0 justify-content-center">
                        <li className="page-item disabled">
                            <a
                            className="page-link"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                            >
                            <i className="mdi mdi-chevron-double-left f-15" />
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">
                            1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                            2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                            3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                            4
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                            <i className="mdi mdi-chevron-double-right f-15" />
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </section>

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

export default Jobs
