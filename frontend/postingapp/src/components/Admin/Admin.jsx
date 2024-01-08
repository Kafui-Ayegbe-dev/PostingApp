import React, {useState} from 'react';
import './Admin.scss';
import TopBar from '../Constants/TopBar';

const Admin = () => {

    const sampleData = {
        users: ["User 1", "User 2", "User 3"],
        channels: ["Channel 1", "Channel 2", "Channel 3"],
        posts: ["Post 1", "Post 2", "Post 3"],
        comments: ["Comment 1", "Comment 2", "Comment 3"],
    };

    const [selectedUser, setSelectedUser] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleDelete = (type) => {
    switch (type) {
      case 'user':
        console.log(`Deleting user: ${selectedUser}`);
        setSelectedUser(null);
        break;
      case 'channel':
        console.log(`Deleting channel: ${selectedChannel}`);
        setSelectedChannel(null);
        break;
      case 'post':
        console.log(`Deleting post: ${selectedPost}`);
        setSelectedPost(null);
        break;
      case 'comment':
        console.log(`Deleting comment: ${selectedComment}`);
        setSelectedComment(null);
        break;
      default:
        break;
    }
  };


      
  return (
    <div className='admin-panel'>
      <h1>Admin Panel</h1>

      <div>
        <h2>Users</h2>
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select a user</option>
          {sampleData.users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button className={!selectedUser ? '' : 'red'} onClick={() => handleDelete('user')}>Delete User</button>
      </div>

      <div>
        <h2>Channels</h2>
        <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
          <option value="">Select a channel</option>
          {sampleData.channels.map((channel) => (
            <option key={channel} value={channel}>
              {channel}
            </option>
          ))}
        </select>
        <button className={!selectedChannel ? '' : 'red'} onClick={() => handleDelete('channel')}>Delete Channel</button>
      </div>

      <div>
        <h2>Posts</h2>
        <select value={selectedPost} onChange={(e) => setSelectedPost(e.target.value)}>
          <option value="">Select a post</option>
          {sampleData.posts.map((post) => (
            <option key={post} value={post}>
              {post}
            </option>
          ))}
        </select>
        <button className={!selectedPost ? '' : 'red'} onClick={() => handleDelete('post')}>Delete Post</button>
      </div>

      <div>
        <h2>Comments</h2>
        <select value={selectedComment} onChange={(e) => setSelectedComment(e.target.value)}>
          <option value="">Select a comment</option>
          {sampleData.comments.map((comment) => (
            <option key={comment} value={comment}>
              {comment}
            </option>
          ))}
        </select>
        <button className={!selectedComment ? '' : 'red'} onClick={() => handleDelete('comment')}>Delete Comment</button>
      </div>
    </div>
  )
}

export default Admin