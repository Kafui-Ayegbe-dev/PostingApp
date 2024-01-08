import React from "react";
import "./Posts.scss";
import SinglePost from '../Posts/SinglePost'
import { useQuery} from "react-query";
import { makeRequest } from "../../axios";

const PostsForChannel = (props) => {
  // get all posts for a particular channel
  const ChannelID  = props.ChannelID; // assuming props contains ChannelID

  const { isLoading, error, data } = useQuery(["channelsPosts"], () =>
    makeRequest.get(`/channels/${ChannelID}`).then((res) => {
        return res.data;
    })
  );
    
  
  if (isLoading) return 'Loading...';
  if (error) return 'An error occurred: ' + error.message;
  if (!Array.isArray(data)) return 'Data is not an array';

return (
  <div className="posts">
    {data.map((post) => <SinglePost key={post.PostID} post={post} />)}
  </div>
);

}

export default PostsForChannel