import './about-page.style.css';
import unityLogo from '../../../imgs/Unity-Logo-White.png';
import reactLogo from '../../../imgs/react_logo.png';
import nodeLogo from '../../../imgs/node_logo.png';
import mysqlLogo from '../../../imgs/mysql_logo.png';
import bsLogo from '../../../imgs/bootstrap_logo.png';
import csLogo from '../../../imgs/cs_logo.png';
import jsLogo from '../../../imgs/js_logo.png';
import htmlLogo from '../../../imgs/html_logo.png';
import cssLogo from '../../../imgs/css_logo.png';
import 'animate.css';

const About = () =>
{
    return (
        <main className="container">
            <div className="about-me-con">
                {/* About me */}
                <div className="about-me-header highlights-brown animate__animated animate__fadeInUp">
                    <h2>About me</h2>
                </div>
                <div className='about-me-content mt-4 mt-lg-5'>
                    {/* My self */}
                    <section className="row my-self-section animate__animated animate__fadeInUp">
                        <h3 className='col-12 col-lg-4'>My self</h3>
                        <div className="col-2 col-lg-1"></div>
                        <p className='col-10 col-lg-7 pt-2 pt-lg-0'>
                            Hello! I'm Stamp, 18 years old. I started learning to program around
                            the age of 14 to create games. That was the beginning that gave me the opportunity to work
                            since I was 16 years old and dropped out of school. After collecting knowledge and experience
                            for almost 1 year, I decided to come back to study and try something new. By starting to learn
                            about web development, especially the back-end. You can see my work in the Projects section.
                            Thank you for visiting the site!
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="row mt-5 animate__animated animate__fadeInUp">
                        <div className='col-12 col-lg-4'>
                            <h3 className=''>Skills</h3>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className='stack-wrap col-12 col-lg-6 pt-4 pt-sm-3 pt-md-0'>
                            <div className="stack-con d-flex flex-wrap">
                                <div className="stack-card" title="Unity">
                                    <img src={unityLogo} alt="Unity" className='unity-logo' />
                                </div>
                                <div className="stack-card" title="React.js">
                                    <img src={reactLogo} alt="React.js" className='react-logo' />
                                </div>
                                <div className="stack-card" title='Node.js'>
                                    <img src={nodeLogo} alt="Node.js" className='node-logo' />
                                </div>
                                <div className="stack-card" title='MySQL'>
                                    <img src={mysqlLogo} alt="MySQL" className='mysql-logo' />
                                </div>
                                <div className="stack-card" title='Bootstrap 5'>
                                    <img src={bsLogo} alt="Bootstrap 5" className='bs-logo' />
                                </div>
                                <div className="stack-card" title='CSharp'>
                                    <img src={csLogo} alt="CSharp" className='cs-logo' />
                                </div>
                                <div className="stack-card p-3" title='Javascript'>
                                    <img src={jsLogo} alt="Javascript" className='js-logo' />
                                </div>
                                <div className="stack-card" title='HTML5'>
                                    <img src={htmlLogo} alt="HTML5" className='html-logo' />
                                </div>
                                <div className="stack-card" title='CSS3'>
                                    <img src={cssLogo} alt="CSS3" className='css-logo' />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experiences */}
                    <section className="row experiences-section animate__animated animate__fadeInUp">
                        <div className="col-12 col-lg-4">
                            <h3>Work Experiences</h3>
                        </div>
                        <div className="col-12 col-lg-7">
                            <h4 className='highlights-brown position-text'>Junior Unity Developer</h4>
                            <p>Multiverse Expert CO,. LTD. <br /> Jan 2022 - Nov 2022 <br /> Annual Salary: THB 40,000.</p>
                            <ul>
                                <li>
                                    <p>Developed metaverse core system and was responsible for all projects related to the metaverse.</p>
                                </li>
                                <li>
                                    <p>Focused on full-stack development, Good communication works well with the back-end and others</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        </main>
    );
};

export default About;