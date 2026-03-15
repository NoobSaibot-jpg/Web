import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PersonalInfo from './components/PersonalInfo';
import AcademicTable from './components/AcademicTable';
import Favorites from './components/Favorites';
import CitySection from './components/CitySection';
import ThemeToggler from './components/ThemeToggler';
import ProjectPage from './components/ProjectPage';
import MoodSection from './components/MoodSection';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const MainProfile = () => (
    <>
      <PersonalInfo />
    <AcademicTable />
    <Favorites />
    <MoodSection /> 
    <CitySection />
    <div style={{ textAlign: 'center', margin: '40px 0' }}>
      <Link to="/project" className="project-link-btn">Переглянути мій проект</Link>
    </div>
    </>
  );

  return (
    <Router>
      <div className="app-container" data-theme={theme}>
        <header className="app-header">
          <nav>
            <Link to="/" className="nav-logo">MyPersonalPage</Link>
            <ThemeToggler toggleTheme={toggleTheme} currentTheme={theme} />
          </nav>
        </header>

        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<MainProfile />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;