import React, { useState , useEffect} from 'react';
import './NewPost.scss';
import Image from "../../assets/img.png";
import { useMutation, useQueryClient} from "react-query";
import { makeRequest } from "../../axios";




function NewPost(props) {
    const [userID, setUserID] = useState('');
    const [userName, setuserName] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
          const parsedUser = JSON.parse(userFromStorage);
          setUserID(parsedUser.UserID);
        }
    }, []);


    useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
        const parsedUser = JSON.parse(userFromStorage);
        setuserName(parsedUser.Username);
    }
    }, []);



    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", image)
        const res = await makeRequest.post('/upload', formData);
        return res.data;
      }
      catch(error) {
        console.log(error);
        setError('An error occurred while uploading the image.');
      }
    }

    const queryClient = useQueryClient();

    // mutation allows other query to be executed
    // when this query succeeds
    const mutation = useMutation(
        (newPost) => {
          return makeRequest.post(`/posts/addPost/${props.chId}`, newPost);
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["channelsPosts"]);
          },
          onError: (error) => {
            // Set the error message in the state
            setError(error.message);
          },
        }
      );

    const handleClick = async (e) => {
      e.preventDefault();

      if(!content){
        alert("Please enter content");
        return
      }

      let imgURL = "";

      if (image) imgURL = await upload();

      mutation.mutate({UserID: userID, Content: content, ImageURL: imgURL});
      setContent("");
      setImage(null);
    };



    return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <input
              type="text"
              placeholder={`What's on your mind ${userName} ?`}
              onChange={(e) => setContent(e.target.value)} required
              value={content}
            />
          </div>
          <div className="right">
            {image && (
              <img className="file" alt="" src={URL.createObjectURL(image)} />
            )}
          </div>
        </div>
        <hr />
        {error && <p className="error">{error}</p>}
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              name='file'
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={handleClick}>Post</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewPost;
