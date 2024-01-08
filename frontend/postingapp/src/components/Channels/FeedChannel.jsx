import React, { useState } from "react";
import PostsForChannel from "../../components/Posts/PostsForChannel"
import NewPost from "../../components/Posts/NewPost"
import "./FeedChannel.scss";
import { useQuery} from "react-query";
import { makeRequest } from "../../axios";
import { useParams } from 'react-router-dom';



const FeedChannel = () => {

  let { ChannelID } = useParams();

  const [createPost, setCreatePost] = useState(false);

  const handleCreatePost = () => {
    // Handle the creation of the channel here
    // After creating the channel, hide the textbox and button
    setCreatePost(false);
  };


  //get channel name and description
  const { isLoading, error, data } = useQuery(["channelsInfo"], () =>
    makeRequest.get(`/channels/info/${ChannelID}`).then((res) => {
        return res.data;
    })
  );

  
  
  return (
    <div className="housed">
      <div className="desc">
        <h1>{data?.ChannelName}</h1>
        <hr />
        <p>{data?.Description}</p>
      </div>
      <div className="desc">
        <button onClick={()=>setCreatePost(prevState => !prevState)}>+ Create a post</button>
      </div>
      
      {createPost && (
            <div className="myitem1aa">
              <NewPost chId={ChannelID}/>
            </div>
          )}
      <PostsForChannel ChannelID={ChannelID}/>
    </div>
  );
};

export default FeedChannel;
