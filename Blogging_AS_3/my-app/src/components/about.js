import React, { useState } from 'react';
import '../styles/style1.css'; // Import your CSS

const About = () => {
    const [moreInfoVisible, setMoreInfoVisible] = useState(false);

    const handleLearnMore = () => {
        setMoreInfoVisible(!moreInfoVisible);
    };

    return (
        <div>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about" className="active">About</a>
                    {/* <a href="login.html">Sign In</a>
                    <a href="reg.html">Sign Up</a> */}
                </nav>
                <div className="hero-section">
                    <h1>Welcome to Doodle Dairy</h1>
                    <p>Where creativity and inspiration meet</p>
                </div>
            </header>

            <section className="about-section">
                <div className="container">
                    <h2>Welcome to Doodle Dairy</h2>
                    <p>
                        At Doodle Dairy, we believe in the power of storytelling and creative expression. Our platform is a digital space where writers, thinkers, and dreamers come together to share their insights, experiences, and creativity. Whether you’re a seasoned writer or just starting, Doodle Dairy provides the tools and community to help your voice be heard.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is simple: to empower creators to share their stories with the world. In an age where everyone has a story to tell, Doodle Dairy is designed to be the canvas for your thoughts, ideas, and knowledge. We’re passionate about fostering a space where creativity thrives, and where every writer has the opportunity to connect with a global audience.
                    </p>

                    <h2>Why Choose Doodle Dairy?</h2>
                    <p>
                        Customizable Blogs: Create a unique space with customizable themes, fonts, and layouts that reflect your personality.<br />
                        Seamless Publishing: Easily draft, edit, and publish your content with our user-friendly editor.<br />
                        Collaborative Environment: Interact with fellow writers, guest bloggers, and readers who share your interests.<br />
                        Performance Analytics: Track your blog’s performance with insightful data on your readership and engagement.
                    </p>
                    <h2>Our Community</h2>
                    <p>
                        Doodle Dairy is a growing community of bloggers, writers, and thinkers from all over the world. From passionate beginners to seasoned professionals, everyone is welcome to join our vibrant and diverse platform. Our community is driven by mutual respect, support, and the desire to create meaningful content.
                    </p>

                    <h2>Meet the Team</h2>
                    <p>
                        We are a team of passionate developers, writers, and innovators dedicated to making Doodle Dairy the best blogging platform it can be. Our goal is to provide you with the tools and features you need to turn your creative vision into reality.
                    </p>

                    <button id="learnMoreBtn" className="cta-button" onClick={handleLearnMore}>
                        {moreInfoVisible ? "Show Less" : "Learn More About Us"}
                    </button>

                    {moreInfoVisible && (
                        <p id="moreInfo">
                            Founded in 2024, Doodle Dairy started with a simple idea: to create a space for writers to express themselves without limitations. What began as a small project has grown into a dynamic platform with contributors from across the globe. We're committed to continually evolving and adding new features to make blogging as enjoyable and impactful as possible.
                        </p>
                    )}
                </div>
            </section>

            <footer>
                <p style={{ color: 'white' }}>&copy; 2024 Doodle Dairy. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
