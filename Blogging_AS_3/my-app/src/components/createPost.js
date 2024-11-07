import React, { useState } from 'react';
import '../styles/styles.css'; // Import your custom styles

function CreatePost() {
  // State to manage form data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // Perform the logic to create the post (e.g., send data to server)
      console.log('Post created:', { title, content });

      // Optionally reset the form
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Create New Post</h1>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>

      {/* Back to Home Button */}
      <a href="/" className="btn btn-secondary mt-3">
        Back to Home
      </a>
    </div>
  );
}

export default CreatePost;
