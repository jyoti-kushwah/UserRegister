import React, { useEffect } from "react";


const Home = () => {
  let API = "https://dummyjson.com/users ";

  const fetchApiData = async (url) => {
    try {
      const res = fetch(url);
      const data = (await res).json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>

      <h1>Hello I am Home page</h1>
    </div>
  );
};

export default Home;
