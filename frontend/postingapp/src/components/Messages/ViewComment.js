import React, { useState } from "react";
//import "./ViewComment.css";


const Comment = () => {
    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      // Add logic to submit the comment to the server
      //setComments([...comments, newComment]);
      console.log("Comment submitted:", newComment);
      setNewComment("");
    };
  
    return (
      <>
        <div className="comment-box">
          <div className="user-time-info">
            <div className="left">
              <label className="uname">Username: </label>
              <label className="level">Level</label>
            </div>
            <div className="right">
              <label className="time">2:32 PM, mm-dd-yyyy</label>
            </div>
          </div>
          <div className="comment-form">
            <textarea
              classname="view-comment"
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={handleCommentChange}
              disabled={true}
            />
          </div>
          <div className="interaction">
            <button>Like</button>
            <label>337</label>
            <button>Dislike</button>
            <label>2</label>
            <button onClick={handleCommentSubmit}>Reply</button>
          </div>
        </div>
      </>
    );
}

export default Comment;