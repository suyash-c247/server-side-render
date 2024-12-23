import React from 'react';

const UserPage = ({ posts }) => {
  return (
    <div>
      <h1>Server-Side Rendered Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetching data using getServerSideProps
export async function getServerSideProps() {
  // Free API to fetch data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts, // Passing fetched data as props to the component
    },
  };
}

export default UserPage;
