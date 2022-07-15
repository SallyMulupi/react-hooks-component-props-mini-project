import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "./ArticleList";
console.log(posts);
function App(){
  return (
    <div className="App">
      <Header name={blogData.name}/>

    </div>
  )
}


export default App;