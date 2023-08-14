import { Outlet } from 'react-router';
import './navbar.style.css';
import { Link } from 'react-router-dom';
import 'animate.css';

const Navbar = () =>
{
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom animate__animated animate__fadeIn">
                    <a className="navbar-brand fs-3 ms-3 ms-sm-4 ms-lg-5" href="/">ThDec</a>
                    <button className="navbar-toggler me-3 me-sm-4 me-lg-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end ms-3 me-3 ms-sm-4 me-sm-4 ms-lg-5 me-lg-5" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-3 fs-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>

    );
};

export default Navbar;