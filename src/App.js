import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './components/routes/home-page/home-page.component';
import About from './components/routes/about-page/about-page.component';
import ProjectsPage from './components/routes/projects-page/projects-page.component';
import Footer from './components/footer/footer.component';

function App()
{
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<ProjectsPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
