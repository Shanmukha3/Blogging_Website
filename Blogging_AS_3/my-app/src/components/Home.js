import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import '../styles/slides.css';
import '../styles/announce.css';
import Slideshow from './slideshow';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   // Simulate fetching blogs from Firebase or API
  //   const fetchBlogs = async () => {
  //     // Normally here you would use Firebase API or fetch API
  //     const fetchedBlogs = [
  //       {
  //         id: 1,
  //         title: 'Blog 1: Introduction to React',
  //         article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  //         bannerImage: 'img1.jpg',
  //       },
  //       {
  //         id: 2,
  //         title: 'Blog 2: Understanding JavaScript Closures',
  //         article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  //         bannerImage: 'img2.jpg',
  //       },
  //       // Add more blogs as necessary
  //     ];
  //     setBlogs(fetchedBlogs);
  //   };
  //   fetchBlogs();
  // }, []);

  return (
    <div>
      <nav className="navbar">
        <img src="/img/logo.jpg" className="logo" alt="Logo" />
        <ul className="links-container">
          <li className="link-item"><a href="/" className="link">Home</a></li>
          <li className="link-item"><a href="categories" className="link">Categories</a></li>
          <li className="link-item"><a href="about" className="link">About</a></li>
        </ul>
      </nav>
      
      <header className="header">
        <div className="content">
          <h1 className="heading">
            <span className="small">Welcome in the world of</span>
            blog
            <span className="no-fill">writing</span>
          </h1>
          <a href="/index" className="btn">Write a blog</a>
        </div>
      </header>

      <h1 style={{
  fontFamily: 'Arial, sans-serif', 
  fontSize: '2.5em', 
  color: '#4CAF50', 
  textAlign: 'center', 
  marginTop: '50px', 
  textTransform: 'uppercase', 
  letterSpacing: '2px', 
  background: 'linear-gradient(90deg, #eb59b3, #4cb1e3)', 
  color: 'white', 
  padding: '15px', 
  borderRadius: '10px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
}}>
  Different Blogs Available:
</h1>

      <Slideshow />
      {/* <div className="slideshow-container">
        {['img1.jpg', 'img2.jpg', 'img3.png', 'img4.png', 'img5.png'].map((img, index) => (
          <div className="mySlides fade" key={index}>
            <img className="img1" src={`img/${img}`} alt="Slide" />
          </div>
        ))}
      </div> */}

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <section className="blogs-section">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={`img/${blog.bannerImage}`} className="blog-image" alt="Blog" />
            <h1 className="blog-title">{blog.title.substring(0, 100) + '...'}</h1>
            <p className="blog-overview">{blog.article.substring(0, 200) + '...'}</p>
            <a href={`/blog/${blog.id}`} className="btn dark">Read</a>
          </div>
        ))}
      </section>

      <div className="announcements-container">
        <div className="announcement-header">
          <h1 className="pp">Announcements</h1>
        </div>
        <div className="announcement-list">
          <ul>
            <li>
              <div className="date">
                <div className="day">3</div>
                <div className="month">Nov</div>
              </div>
              <p>Blog about Education content-- Comprehensive Guide to the TCS NQT Exam Pattern</p>
            </li>
            <li>
              <div className="date">
                <div className="day">10</div>
                <div className="month">Nov</div>
              </div>
              <p>Blog about Travel -- Discover the Best Places to Visit in Kochi</p>
            </li>
            <li>
              <div className="date">
                <div className="day">15</div>
                <div className="month">Nov</div>
              </div>
              <p>Blog about Education content -- In-Depth Report on Vignan University</p>
            </li>
          </ul>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Help Forum</a></li>
              <li><a href="#">Video Tutorials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Blogger Buzz</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Developers</h3>
            <ul>
              <li><a href="https://github.com/Vyshnavi-modukuri">Sai Vyshnavi</a></li>
              <li><a href="https://github.com/Sruthikongara">Sruthi Chowdary</a></li>
              <li><a href="https://github.com/alekhya223">Alekhya</a></li>
              <li><a href="https://github.com/samhitha3033">Sri Vagdevi Samhitha</a></li>
              <li><a href="https://github.com/Shanmukha3">Shanmukha Sudha Kiran</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="language-selector">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Content Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
