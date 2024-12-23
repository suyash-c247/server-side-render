/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const clientSideRender = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Client Side Rendered Posts</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default clientSideRender;
