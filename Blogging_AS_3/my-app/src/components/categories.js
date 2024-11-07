import React from 'react';
import '../styles/styles.css';  // Import the stylesheet for styles

const Categories = () => {
  return (
    <div>
      <nav className="navbar">
        <img src="/img/logo.jpg" className="logo" alt="Logo" />
        <ul className="links-container">
          <li className="link-item"><a href="/" className="link">Home</a></li>
          <li className="link-item"><a href="/about" className="link">About</a></li>
          {/* <li className="link-item"><a href="/login" className="link">Sign In</a></li>
          <li className="link-item"><a href="/reg" className="link">Sign Up</a></li> */}
        </ul>
      </nav>

      <div className="categories-container">
        <div className="category-item" id="tech">
          <a href="#">
            <img src="/img/tech.jpg" alt="Tech" />
            <div className="category-name">Tech</div>
          </a>
        </div>

        <div className="category-item" id="food">
          <a href="#">
            <img src="/img/food.jpg" alt="Food" />
            <div className="category-name">Food</div>
          </a>
        </div>

        <div className="category-item" id="news">
          <a href="#">
            <img src="/img/news.jpg" alt="Trending News" />
            <div className="category-name">Trending News</div>
          </a>
        </div>

        <div className="category-item" id="music">
          <a href="#">
            <img src="/img/music.jpg" alt="Music" />
            <div className="category-name">Music</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
