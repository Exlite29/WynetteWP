import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AiAssistant from './components/AiAssistant';
import { PageRoutes } from './types';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={PageRoutes.HOME} element={<Home />} />
          <Route path={PageRoutes.ABOUT} element={<About />} />
          <Route path={PageRoutes.SERVICES} element={<Services />} />
          <Route path={PageRoutes.PORTFOLIO} element={<Portfolio />} />
          <Route path={PageRoutes.TESTIMONIALS} element={<Testimonials />} />
          <Route path={PageRoutes.BLOG} element={<Blog />} />
          <Route path={PageRoutes.CONTACT} element={<Contact />} />
        </Routes>
        <AiAssistant />
      </Layout>
    </Router>
  );
}

export default App;
