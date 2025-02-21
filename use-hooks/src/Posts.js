import { useState, use, useEffect } from "react";

function Posts() {
  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((resposne) => resposne.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div>Loading posts...</div>;
  // }

  const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (resposne) => resposne.json()
  );

  const posts = use(fetchPosts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
