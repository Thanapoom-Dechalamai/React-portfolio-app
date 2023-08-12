import './about-page.style.css';

const About = () =>
{
    return (
        <div className="container">
            <section className="about-me-section">

                {/* About me */}
                <div className="about-me-header highlights-brown">
                    <h2>About me</h2>
                </div>
                <div className='about-me-content'>
                    {/* My self */}
                    <div className="row my-self-section">
                        <h3 className='col-12 col-lg-4'>My self</h3>
                        <div className="col-2 col-lg-1"></div>
                        <p className='col-10 col-lg-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ad, consectetur voluptates dicta in adipisci aspernatur velit quae placeat
                            eaque officiis harum ipsum quam nihil corrupti et? Quibusdam repudiandae, quas ea vel suscipit eligendi facere. Odit laborum sint impedit sapiente
                            odio cumque saepe! Ducimus officia esse quos a. Asperiores, nam.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="row mt-5">
                        <div className='col-12 col-lg-4'>
                            <h3 className=''>Skills</h3>
                        </div>
                        <div className="col-2 col-lg-1"></div>
                        <div className='col-8 col-lg-5'>
                            <div>
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
                            </div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className="row experiences-section">
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
                    </div>
                </div>

            </section>
        </div>
    );
};

export default About;