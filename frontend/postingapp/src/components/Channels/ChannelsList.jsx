import React from "react";
import "./ChannelsList.scss";
import ChannelUnit from "./ChannelUnit";
import { useQuery} from "react-query";
import { makeRequest } from "../../axios";

const ChannelsList = () => {
  
  //get channel name and description
  const { isLoading, error, data } = useQuery(["channelsAllInfo"], () =>
    makeRequest.get('/channels/all').then((res) => {
        return res.data;
    })
  );

  if (isLoading) return 'Loading...';
  if (error) return 'An error occurred: ' + error.message;
  if (!Array.isArray(data)) return 'Data is not an array';

  return (
    <div className="poste">
      <h1>List of All Channels</h1>
      <div className="channels-list">
        {data.map((channel) => (
          <ChannelUnit key={channel.ChannelID} number={channel.ChannelID} name={channel.ChannelName} />
        ))}
      </div>
    </div>
  );
};

export default ChannelsList;
