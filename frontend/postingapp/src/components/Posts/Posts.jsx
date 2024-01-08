import React, { useState } from "react";
import "./Posts.scss";
import SinglePost from '../Posts/SinglePost'
import { useQuery} from "react-query";
import { makeRequest } from "../../axios";



const Posts = () => {

  // get all public posts
  // this is for the main timeline
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/allposts").then((res) => {
      return res.data;
    })
  );
  
  
  return (
   <div className="posts">
    {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <SinglePost key={post.PostID} post={post}  />)}
   </div>
  );


};

export default Posts;
