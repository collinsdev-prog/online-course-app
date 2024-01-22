import './partials.css'
import logo from '../../assets/icons/Logo.png'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FacebookFilled, TwitterSquareFilled, LinkedinFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer_wrapper">
            <div className="footer_wrapper_row_1">
                <div className="left">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>

                    <br />

                    <div className="left_rows">
                        <MailOutlined />
                        <span className="text">hello@skillbridge.com</span>
                    </div>

                    <div className="left_rows">
                        <PhoneOutlined />
                        <span className="text">+91 91813 23 2309</span>
                    </div>

                    <div className="left_rows">
                        <EnvironmentOutlined />
                        <span className="text">Somewhere in the World</span>
                    </div>
                </div>

                <div className="right">
                    <div className="home_col">
                        <h4>Home</h4>
                        <ul>
                            <li>
                                <Link to='/'>Benefits</Link>
                            </li>

                            <li>
                                <Link to='/'>Our Courses</Link>
                            </li>

                            <li>
                                <Link to='/'>Our Testimonials</Link>
                            </li>

                            <li>
                                <Link to='/'>Our FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="about_us_col">
                        <h4>About Us</h4>
                        <ul>
                            <li>
                                <Link to='/'>Company</Link>
                            </li>

                            <li>
                                <Link to='/'>Achievements</Link>
                            </li>

                            <li>
                                <Link to='/'>Our Goals</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="social_profile_col">
                        <h4>Social Profiles</h4>
                        <ul>
                            <li>
                                <a href='/'>
                                    <FacebookFilled />
                                </a>
                            </li>

                            <li>
                                <a href='/'>
                                    <TwitterSquareFilled />
                                </a>
                            </li>

                            <li>
                                <a href='/'>
                                    <LinkedinFilled />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <hr className='divider' />

            <p className="copyright_wrapper">
                &copy; 2023 Skillbridge. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;