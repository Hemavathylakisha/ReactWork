import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the posts for the specific user
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Ucontainer'>
            <div className='contentbox'>
          <h1>User {userId} Posts</h1>
          {posts.length > 0 ? (
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts are available.</p>
          )}
        </div>
    </div>
  );
};

export default Post;