import "./home-page.style.css";
import Typewriter from "typewriter-effect";
import pfp from "../../../imgs/IMG_5384 (1).jpg";

// Home.jsx
const Home = () =>
{
    return (
        <div className="homepage container d-flex pt-3 pb-3">
            <div className="row">
                <div className="row text-container col-12 col-lg-7">
                    <div className="d-none d-lg-block col-lg-12"></div>
                    <div className="col-12">
                        <h1 className="hello">Hello There! &#128054;</h1>
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
                <div className="row col-12  col-lg-5">
                    <div className="d-none d-lg-block col-lg-12"></div>
                    <div className="col-12">
                        <img src={pfp} alt="Stamp" className="pfp" style={{ height: "auto", width: "100%" }} />
                    </div>
                    <div className="d-none d-lg-block col-lg-12"></div>
                </div>
            </div>

        </div>
    );
};

export default Home;

