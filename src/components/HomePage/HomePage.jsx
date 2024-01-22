import React, { useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

import { ArrowRightOutlined } from '@ant-design/icons';

import logo from '../../assets/icons/Logo.png'

import banner_icon_1 from '../../assets/icons/banner_icon_1.png'
import banner_icon_2 from '../../assets/icons/banner_icon_2.png'

import adobe from '../../assets/icons/adobe.png'
import amazon from '../../assets/icons/amazon.png'
import netflix from '../../assets/icons/netflix.png'
import ntion from '../../assets/icons/ntion.png'
import spotify from '../../assets/icons/spotify.png'
import zapier from '../../assets/icons/zapier.png'
import zoom from '../../assets/icons/zoom.png'

import test_video from '../../assets/videos/test.mp4'
import test_video_poster from '../../assets/videos/test_video_poster.png'

import ext_link from '../../assets/icons/ext_link.png'

import course_img_1 from '../../assets/icons/course_img_1.png'
import course_img_2 from '../../assets/icons/course_img_2.png'
import course_img_3 from '../../assets/icons/course_img_3.png'
import course_img_4 from '../../assets/icons/course_img_4.png'
import course_img_5 from '../../assets/icons/course_img_5.png'
import course_img_6 from '../../assets/icons/course_img_6.png'


import sarah from '../../assets/testimonials/sarah.png'
import jason from '../../assets/testimonials/jason.png'
import emily from '../../assets/testimonials/emily.png'
import michael from '../../assets/testimonials/michael.png'

import check_mark from '../../assets/icons/check_mark.png'
import times from '../../assets/icons/times.png'

import arr_right from '../../assets/faqs/arr_right.png'
import plus from '../../assets/faqs/plus.png'
import faq_times from '../../assets/faqs/times.png'

import nav_toggle_btn from '../../assets/icons/nav_toggle_btn.png'

const benefits = [
    {
        id: '01',
        title: "Flexible Learning Schedule",
        subtitle: "Fit your coursework around your existing commitments and obligations.",
        url: ""
    },
    {
        id: '02',
        title: "Expert Instruction",
        subtitle: "Learn from industry experts who have hands-on experience in design and development",
        url: ""
    },
    {
        id: '03',
        title: "Diverse Course Offerings",
        subtitle: "Explore a wide range of design and development courses covering various topics.",
        url: ""
    },
    {
        id: '04',
        title: "Updated Curriculum",
        subtitle: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
        url: ""
    },
    {
        id: '05',
        title: "Practical Projects and Assignments",
        subtitle: "Develop a portfolio showcasing your skills and abilities to potential employers.",
        url: ""
    },
    {
        id: '06',
        title: "Interactive Learning Environment",
        subtitle: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
        url: ""
    },
]

const courses = [
    {
        img: course_img_1,
        tags: ['4 weeks', 'Beginner'],
        author: "John Smith",
        course_title: "Web Design Fundamentals",
        description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        link: ""
    },
    {
        img: course_img_2,
        tags: ['6 weeks', 'Intermediate'],
        author: "Emily Johnson",
        course_title: "UI/UX Design",
        description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        link: ""
    },
    {
        img: course_img_3,
        tags: ['8 weeks', 'Intermediate'],
        author: "David Brown",
        course_title: "Mobile App Development",
        description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        link: ""
    },
    {
        img: course_img_4,
        tags: ['10 weeks', 'Beginner'],
        author: "Sarah Thompson",
        course_title: "Graphic Design for Beginners",
        description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        link: ""
    },
    {
        img: course_img_5,
        tags: ['10 weeks', 'Intermediate'],
        author: "Michael Adams",
        course_title: "Front-End Web Development",
        description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        link: ""
    },
    {
        img: course_img_6,
        tags: ['6 weeks', 'Advance'],
        author: "Jennifer Wilson",
        course_title: "Advanced javaScript",
        description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        link: ""
    },
]

const our_tetstimonial = [
    {
        id: 1,
        description: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
        user_img: sarah,
        user_name: "Sarah L",
    },
    {
        id: 2,
        description: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
        user_img: jason,
        user_name: "Jason M",
    },
    {
        id: 3,
        description: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
        user_img: emily,
        user_name: "Emily R",
    },
    {
        id: 4,
        description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
        user_img: michael,
        user_name: "Michael K",
    },
]

const our_pricing = [
    {
        label: "Free Plan",
        price: "0",
        available_features: [
            { included: true, feature: "Access to selected free courses." },
            { included: true, feature: "Limited course materials and resources." },
            { included: true, feature: "Basic community support." },
            { included: true, feature: "No certification upon completion." },
            { included: true, feature: "Ad-supported platform." },
            { included: false, feature: "Access to exclusive Pro Plan community forums." },
            { included: false, feature: "Early access to new courses and updates." },
        ]
    },
    {
        label: "Pro Plan",
        price: "79",
        available_features: [
            { included: true, feature: "Unlimited access to all courses." },
            { included: true, feature: "Limited course materials and resources." },
            { included: true, feature: "Priority support from instructors." },
            { included: true, feature: "Course completion certificates." },
            { included: true, feature: "Ad-free experience." },
            { included: true, feature: "Access to exclusive Pro Plan community forums." },
            { included: true, feature: "Early access to new courses and updates." },
        ]
    },
]

const faqs = [
    {
        question: "Can I enroll in multiple courses at once?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        link: { title: "Enrollment Process for Different Courses", url: "" }
    },
    {
        question: "What kind of support can I expect from instructors?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        link: { title: "Enrollment Process for Different Courses", url: "" }
    },
    {
        question: "Are the courses self-paced or do they have specific start and end dates?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        link: { title: "Enrollment Process for Different Courses", url: "" }
    },
    {
        question: "Are there any prerequisites for the courses?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        link: { title: "Enrollment Process for Different Courses", url: "" }
    },
    {
        question: "Can I download the course materials for offline access??",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        link: { title: "Enrollment Process for Different Courses", url: "" }
    },
]

const HomePage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null)

    function handleActiveQuestionChange(index) {
        setActiveQuestion(index)
    }

    return (
        <div className='HomePage_wrapper'>

            {/* flash advert */}
            <Link to='/'>
                <div className="flash_sale">
                    <span className="text">Free Courses 🌟 Sale Ends Soon, Get It Now</span>

                    <span className="icon">
                        <ArrowRightOutlined />
                    </span>
                </div>
            </Link>

            {/* navbar */}
            <nav className="main_nav_wrapper">
                <div className="left">
                    <span className="logo_wrapper">
                        <img src={logo} alt="" />
                    </span>

                    <ul className="nav_link_grp">
                        <li className="btn nav_link active">
                            <Link to='/'>Home</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/courses'>Courses</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/about-us'>About us</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/pricing'>Pricing</Link>
                        </li>

                        <li className="btn nav_link">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <Link to='/signup' className="btn signup_btn">Sign Up</Link>
                    <Link to='/login' className="btn login_btn">Login</Link>

                    <img className='toggleBtn' src={nav_toggle_btn} alt="" />
                </div>
            </nav>



            {/* banner */}
            < div className="banner_wrapper" >
                <div className="banner_wrapper_inner">
                    <div className="row_1">
                        <img src={banner_icon_1} alt="" />
                        <img src={banner_icon_2} alt="" />
                        <span className="unlock">Unlock</span>  Your Creative Potential
                    </div>
                    <div className="row_2">with Online Design and Development Courses.</div>
                    <div className="row_3">Learn from Industry Experts and Enhance Your Skills.</div>
                    <br />
                    <div className="row_4">
                        <Link to='/' className='explore_courses btn'>Explore Courses</Link>
                        <Link to='/' className='view_pricing btn'>View Pricing</Link>
                    </div>
                </div>
            </ div>

            {/* partner companies */}
            <div className="partner_companies_wrapper" >
                <div className="partner_companies_wrapper_inner">
                    <img src={zapier} alt="" />
                    <span className="divider"></span>
                    <img src={spotify} alt="" />
                    <span className="divider"></span>
                    <img src={zoom} alt="" />
                    <span className="divider"></span>
                    <img src={amazon} alt="" />
                    <span className="divider"></span>
                    <img src={adobe} alt="" />
                    <span className="divider"></span>
                    <img src={ntion} alt="" />
                    <span className="divider"></span>
                    <img src={netflix} alt="" />
                </div>
            </div >

            {/* video banner */}
            < div className="video_banner_wrapper" >

                <video
                    className="video_banner_wrapper_inner"
                    src={test_video}
                    poster={test_video_poster}
                    // autoPlay
                    controls
                    muted
                ></video >

            </div >

            {/* banefits */}
            <div className="benefits_wrapper" >
                <div className="benefits_wrapper_inner">
                    <div className="head_row">
                        <div className="title">Benefits</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>
                            <span>
                                <Link to='/' className='btn'>view all</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            benefits.map((item, index, arr) => (
                                <div key={index} className="body_item">
                                    <div className="id_row">{item.id}</div>
                                    <div className="title_row">{item.title}</div>
                                    <div className="subtitle_row">{item.subtitle}</div>
                                    <div className="url_row">
                                        <Link to='/'>
                                            {item.url}
                                            <img src={ext_link} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >

            {/* our courses */}
            < div className="our_courses_wrapper" >
                <div className="our_courses_inner">
                    <div className="head_row">
                        <div className="title">Our Courses</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>
                            <span>
                                <Link to='/' className='btn'>view all</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            courses.map((item, index, arr) => (
                                <div className="body_item" key={index}>
                                    <div className="row_1">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="row_2">
                                        <div className="tags">
                                            {
                                                item.tags.map((tag, index, arr) => (
                                                    <span className="tag" key={index}>{tag}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="author">By {item.author}</div>
                                    </div>
                                    <div className="row_3">{item.course_title}</div>
                                    <div className="row_4">{item.description}</div>
                                    <Link to={item.link} className="row_5">
                                        Get It Now
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </ div>

            {/* our testimonials */}
            <div className="our_testimonial_wrapper" >
                <div className="our_testimonial_inner">
                    <div className="head_row">
                        <div className="title">Our Testimonial</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>
                            <span>
                                <Link to='/' className='btn'>view all</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            our_tetstimonial.map((item, index, arr) => (
                                <div key={index} className="body_item">
                                    <div className="description">{item.description}</div>
                                    <div className="foot">
                                        <div className="left">
                                            <img src={item.user_img} alt="" />
                                            {item.user_name}
                                        </div>
                                        <div className="right">
                                            <Link className="btn" to='/'>Read Full Story</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >

            {/* our pricing */}
            < div className="our_pricing_wrapper" >
                <div className="our_pricing_inner">
                    <div className="head_row">
                        <div className="title">Our Pricing</div>
                        <div className="sub_title">
                            <span>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </span>

                            <span>
                                <Link to='/' className='btn monthly_btn'>Monthly</Link>
                                <Link to='/' className='btn yearly_btn'>Yearly</Link>
                            </span>
                        </div>
                    </div>

                    <div className="body_row">
                        {
                            our_pricing.map((item, index, arr) => (
                                <div key={index} className="body_item">
                                    <div className="label">{item.label}</div>

                                    <div className="price">
                                        <span className="big_price">${item.price}</span>/month
                                    </div>

                                    <div className="available_features">
                                        <div className="heading">Available features</div>
                                        {
                                            item.available_features.map((feature, i, arr) => (
                                                <div key={i} className="feature">
                                                    {
                                                        feature.included === true
                                                            ? (<img src={check_mark} alt="" />)
                                                            : (<img src={times} alt="" className="times" />)
                                                    }
                                                    {feature.feature}
                                                </div>
                                            ))
                                        }
                                        <Link to='/' className="get_started">Get Started</Link>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </ div>

            {/* FAQ */}
            <div className="faq_wrapper" >
                <div className="faq_inner">
                    <div className="head">
                        <h1 className="title">Frequently Asked Questions</h1>
                        <div className="description">Still you have any questions? Contact our Team via support@skillbridge.com</div>
                        <div className="see_all">
                            <Link to='/' className='btn'>See All FAQ's</Link>
                        </div>
                    </div>

                    <div className="body">
                        {
                            faqs.map((item, index) => (
                                <div key={index} className="faq_item">
                                    <div className="faq_title" onClick={() => handleActiveQuestionChange(index)}>

                                        <span className="label"> {item.question}</span>
                                        {
                                            activeQuestion === index ? <img src={faq_times} alt="" /> : <img src={plus} alt="" />
                                        }
                                    </div>
                                    <div className={`${activeQuestion === index ? 'faq_body' : "faq_body_hidden"}`}>
                                        <div className="answer"> {item.answer}</div>
                                        <Link to={`${item.link.url}`} className="link">
                                            <span className="label">{item.link.title}</span>
                                            <img src={arr_right} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >
        </div >
    )
}

export default HomePage