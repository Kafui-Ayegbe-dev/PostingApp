import {React, useState } from "react";
import "./SinglePost.scss";
import axios from "axios";


import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Link } from "react-router-dom";
import Comments from "../Messages/Comments";



const SinglePost = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [likes, setLikes] = useState(post.Likes);
    const [dislikes, setDislikes] = useState(post.Dislikes);


    const handleLike = async () => {
      try {
        const userHasLikedPost = JSON.parse(localStorage.getItem(`userHasLikedPost${post.PostID}`));
        const userHasDislikedPost = JSON.parse(localStorage.getItem(`userHasDislikedPost${post.PostID}`));
    
        if (userHasLikedPost) {
          console.log('You have already liked this post.');
        } else if (userHasDislikedPost) {
          console.log('You cannot like a post you have disliked.');
        } else {
          await axios.put(`http://localhost:8081/api/reactions/like/${post.PostID}`);
          setLikes(likes + 1);
          localStorage.setItem(`userHasLikedPost${post.PostID}`, true);
          console.log('Post liked successfully.');
        }
      } catch (error) {
        console.log(error);
      }
    };


    const handleDislike = async () => {
      try {
        const userHasLikedPost = JSON.parse(localStorage.getItem(`userHasLikedPost${post.PostID}`));
        const userHasDislikedPost = JSON.parse(localStorage.getItem(`userHasDislikedPost${post.PostID}`));
    
        if (userHasDislikedPost) {
          console.log('You have already disliked this post.');
        } else if (userHasLikedPost) {
          console.log('You cannot dislike a post you have liked.');
        } else {
          await axios.put(`http://localhost:8081/api/reactions/dislike/${post.PostID}`);
          setDislikes(dislikes + 1);
          localStorage.setItem(`userHasDislikedPost${post.PostID}`, true);
          console.log('Post disliked successfully.');
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const serverUrl = 'http://localhost:8081/beFileStore/';


  return (
    <div className="postx">
      <div className="containerx">
        <div className="channelx">
            <Link
                to={`/mainFeed/channels/${post.ChannelID}`}
                style={{ color: "inherit" }}
            > <span className="name">Channel: {post.ChannelName}</span> </Link>
        </div>
        <hr />
        <div className="userx">
          <div className="userInfox">
            <img src={post.AvatarURL} alt="" />
            <div className="detailsx">
                <span className="namex">{post.Username} (~{post.Level})</span>
              <span className="datex">{post.CreatedAt}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="contentx">
          <p>{post.Content}</p>
          <img src={serverUrl + post.ImageURL} alt="" />
        </div>
        <div className="infox">
          <div className="itemx">
            <ThumbUpIcon onClick={handleLike}/>
            {likes}
          </div>
          <div className="itemx">
            <ThumbDownIcon onClick={handleDislike}/>
            {dislikes}
          </div>
          <div className="itemx" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
          </div>
          <div className="itemx">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments {...post}/>}
      </div>
    </div>
  )
}

export default SinglePost