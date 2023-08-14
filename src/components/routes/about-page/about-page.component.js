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
                        <p className='col-10 col-lg-7 pt-2 pt-lg-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ad, consectetur voluptates dicta in adipisci aspernatur velit quae placeat
                            eaque officiis harum ipsum quam nihil corrupti et? Quibusdam repudiandae, quas ea vel suscipit eligendi facere. Odit laborum sint impedit sapiente
                            odio cumque saepe! Ducimus officia esse quos a. Asperiores, nam.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="row mt-5 animate__animated animate__fadeInUp">
                        <div className='col-12 col-lg-4'>
                            <h3 className=''>Skills</h3>
                        </div>
                        <div className="col-2 col-lg-1"></div>
                        <div className='col-9 col-lg-6 pt-4 pt-sm-3 pt-md-0'>
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
                            {/* <div>
                                <h5><strong>Unity</strong> (Advanced)</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h5><strong>React.js</strong> (Novice)</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "45%" }}></div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h5><strong>Node.js</strong> (Intermediate)</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h5><strong>C#</strong> (Advanced)</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h5><strong>Javascript</strong> (Intermediate)</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                                </div>
                            </div> */}
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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi cupiditate praesentium, dolorem explicabo doloremque!</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi cupiditate praesentium, dolorem explicabo doloremque!</p>
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