import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/style.css';
function App() {
  // State to hold the list of posts
  const [posts, setPosts] = useState([
    { title: 'My First Post', content: 'This is the content of the first post.' },
    { title: 'Learning React', content: 'React is a powerful library for building UI.' }
  ]);

  // Handle deleting a post
  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  // Handle adding a new post
  const handleCreatePost = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (title && content) {
      setPosts([...posts, { title, content }]);
      e.target.reset(); // Reset form after adding post
    }
  };

  // Handle updating a post
  const handleUpdatePost = (index, updatedPost) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">QuickPost</h1>
      <p className="text-center text-muted">A simple platform to create, update, and manage your blog posts</p>

      {/* Centered Create New Post Button */}
      <div className="text-center my-4">
        <form onSubmit={handleCreatePost}>
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            placeholder="Post Title"
            required
          />
          <textarea
            name="content"
            className="form-control mb-2"
            placeholder="Post Content"
            rows="3"
            required
          />
          <button type="submit" className="btn btn-primary">
            Create New Post
          </button>
        </form>
      </div>

      {/* Blog Posts List */}
      <section>
        {posts.length > 0 ? (
          <ul className="list-group">
            {posts.map((post, index) => (
              <li key={index} className="list-group-item mb-3">
                {/* Post Title and Content */}
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.content}</p>

                {/* Post Actions */}
                <div className="post-actions">
                  {/* Delete Button */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeletePost(index)}
                  >
                    Delete
                  </button>

                  {/* Edit Button */}
                  <button
                    className="btn btn-warning btn-sm ml-2"
                    data-toggle="collapse"
                    data-target={`#update-form-${index}`}
                  >
                    Edit
                  </button>

                  {/* Update Form */}
                  <div id={`update-form-${index}`} className="collapse mt-3">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const updatedPost = {
                          title: e.target.title.value,
                          content: e.target.content.value,
                        };
                        handleUpdatePost(index, updatedPost);
                      }}
                    >
                      <input
                        type="text"
                        name="title"
                        className="form-control mb-2"
                        defaultValue={post.title}
                        required
                      />
                      <textarea
                        name="content"
                        className="form-control mb-2"
                        defaultValue={post.content}
                        rows="3"
                        required
                      />
                      <button type="submit" className="btn btn-success btn-sm">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted">No posts available. Create your first post above!</p>
        )}
      </section>
    </div>
  );
}

export default App;
