import "./home-page.style.css";
import Typewriter from "typewriter-effect";
import pfp from "../../../imgs/IMG_5384 (1).jpg";
import 'animate.css';

const Home = () =>
{
    return (
        <main className="homepage container d-flex pt-3 pb-3">
            <section className="row">
                <div className="row text-container col-12 col-lg-7 animate__animated animate__fadeInLeft">
                    <div className="d-none d-lg-block col-lg-12"></div>
                    <div className="col-12">
                        <h1 className="hello">Hello There!</h1>
                        <div className="intro">
                            <h1>I'm Thanapoom Dechalamai</h1>
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: ["Web Developer", "Game Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-12"></div>
                </div>
                <div className="row col-12  col-lg-5 animate__animated animate__fadeIn">
                    <div className="d-none d-lg-block col-lg-12"></div>
                    <div className="col-12">
                        <img src={pfp} alt="Stamp" className="pfp" style={{ height: "auto", width: "100%" }} />
                    </div>
                    <div className="d-none d-lg-block col-lg-12"></div>
                </div>
            </section>

        </main>
    );
};

export default Home;

