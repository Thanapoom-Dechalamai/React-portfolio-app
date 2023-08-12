import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './components/routes/home-page/home-page.component';
import About from './components/routes/about-page/about-page.component';
import ProjectsPage from './components/routes/projects-page/projects-page.component';
import Resume from './components/routes/resume-page/resume-page.component';

function App()
{
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
