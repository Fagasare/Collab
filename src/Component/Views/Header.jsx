import React from 'react';
import A from '../images/logo-light.png';
import B from '../images/logo-dark.png';


const Header = () => {
    return (
        <div>
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
                        <a href="/" className="logo">
                            <img src={A} alt=".." className="logo-light" height={18} />
                            <img src={B} alt=".." className="logo-dark" height={18} />
                        </a>
                    </div>
                    <div className="buy-button">
                        <a href="/postjob" className="btn btn-primary"><i className="mdi mdi-cloud-upload" /> Post a Job</a>
                    </div>
                    {/* End Logo container*/}
                    <div className="menu-extras">
                        <div className="menu-item">
                            {/* Mobile menu toggle*/}
                            <a href="#/" className="navbar-toggle">
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
                <li>
                <a href="/">Home</a>
                </li>
                <li className="has-submenu">
                <a href="/jobs">Jobs</a>
                </li>
                </ul>
                {/*end navigation menu*/}
                </div>
                {/*end navigation*/}

                </div>{/*end container*/}
                {/*end end*/}
            </header>
        </div>
    )
}

export default Header
