// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Categories from './components/categories'; // Optional, if you separate Categories into a component
//import CategoryPage from './components/CategoryPage'; // This will handle the category-specific content
import Index from './components/index';
import CreatePost from './components/createPost';
import './styles/home.css';
import './styles/slides.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for About page */}
        <Route path="/about" element={<About />} />

        {/* Route for Categories */}
        <Route path="/categories" element={<Categories />} /> {/* Dynamic Route for Category */}

        {/* Route for Categories */}
        <Route path="/index" element={<Index />} /> {/* Dynamic Route for Category */}

        {/* Route for Categories */}
        <Route path="/createPost" element={<CreatePost />} /> {/* Dynamic Route for Category */}
      </Routes>
    </Router>
  );
}

export default App;
