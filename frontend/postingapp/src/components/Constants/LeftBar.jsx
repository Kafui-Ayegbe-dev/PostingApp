import {React, useContext, useState} from 'react';
import './LeftBar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { AuthContext } from "../../context/authContext";
import { Link } from 'react-router-dom';
import axios from "axios";


const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  const [createChannel, setCreateChannel] = useState(false);

  const [inputs, setInputs] = useState({
    ChannelName: "",
    Description: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [err, setErr] = useState(null);


  const handleCreateChannel = async () => {
    // Handle the creation of the channel here
    // After creating the channel, hide the textbox and button
    if(inputs.ChannelName === '' || inputs.Description === ''){
      alert("Please fill both fields");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/channels/new", inputs);
      alert("Channel Created successfully");
      setCreateChannel(prevState => !prevState);
    } catch (error) {
      setErr(err.response.data);
    }
    
  };



  return (
    <div className="myleftBar1">
      <div className="mycontainer1">
        <div className="mymenu1">
          <div className="myuser1">
            <img
              src={currentUser.AvatarURL}
              alt=""
            />
            <span>{currentUser.Username}</span>
          </div>
          <Link className="myitem1" to="/mainFeed/pubFeed" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="myitem1">
              <HomeIcon/>
              <span>Timeline</span>
            </div>
          </Link>

          <Link className="myitem1" to="/mainFeed/channelslist" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="myitem1">
              <ViewDayIcon/>
              <span>View Channels</span>
            </div>
          </Link>

          <div className="myitem1" onClick={() => setCreateChannel(prevState => !prevState)}>
            <AddToQueueIcon/>
            <span>Create Channel</span>
          </div>
          {createChannel && (
            <div className="myitem1aa">
              {/* <form action=""></form> */}
              <input type="text" placeholder="New channel name" name='ChannelName' onChange={handleChange}/>
              <input type="text" placeholder="Description..." name='Description' onChange={handleChange}/>
              {err && err}
              <button onClick={handleCreateChannel}>Create Channel</button>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default LeftBar