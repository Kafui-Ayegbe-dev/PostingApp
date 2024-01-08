import React, { useState, useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient} from "react-query";
import { makeRequest } from "../../axios";



const Comments = (props) => {
  const [description, setDescription] = useState("");
  const { currentUser } = useContext(AuthContext);

  const userFromStorage = localStorage.getItem('user');
  const parsedUser = JSON.parse(userFromStorage);

  const name = parsedUser.Username

  const serverUrl = 'http://localhost:8081/beFileStore/';

  // get all comments for a post
  const { isLoading, error, data } = useQuery(["comments", props.PostID], () =>
    makeRequest.get(`/comments/${props.PostID}`).then((res) => {
      return res.data;
    })
  );

  

  const queryClient = useQueryClient();

    // mutation allows other query to be executed
    // when this query succeeds
    const mutation = useMutation(
        (newComment) => {
          return makeRequest.post(`/comments`, newComment);
        },
        {
          onSuccess: () => {
            // get comments under the post
            queryClient.invalidateQueries(["comments", props.PostID]);
          },
          onError: (error) => {
            // Set the error message in the state
            console.log(error.message);
          },
        }
      );

    const handleClick = async (e) => {
      e.preventDefault();

      if(!description){
        alert("Please enter something to comment");
        return
      }

      // const { UserID, ChannelID, PostID, Content } = req.body;
      // make a new comment to a post
      mutation.mutate({
        UserID: props.UserID,
        ChannelID: props.ChannelID,
        PostID: props.PostID,
         Content: description});
      setDescription("");

    };

  

  return (
    <div className="commentsz">
      <div className="writez">
        <img src={serverUrl+props.AvatarURL} alt="" />
        <input 
          type="text" 
          placeholder="write a comment" 
          value={description}
          onChange={e=>setDescription(e.target.value)}

        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? console.log("Loading Comments")
        :
        data.map((comment) => (
          <div className="commentz">
            <img src={serverUrl + comment.AvatarURL} alt="" />
            <div className="infoz">
              <span>{comment.Username}</span>
              <p>{comment.Content}</p>
            </div>
            <span className="datez">{comment.CreatedAt}</span>
          </div>
        ))}
    </div>
  );
};

export default Comments;
