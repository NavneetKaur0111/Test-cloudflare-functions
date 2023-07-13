import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(`/api/post`);
      setPost(resp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div>
    <h1>Test</h1>
  </div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <em>Published {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
