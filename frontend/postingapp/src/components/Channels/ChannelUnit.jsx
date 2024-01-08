import React, { useState } from "react";
//import "./ChannelUnit.scss";
import { Link } from "react-router-dom";


const ChannelUnit = (props) => {
  return (
    <>
      <div className="ch-detail" style={{marginBottom: '10px'}}>
        <Link
                to={`/mainFeed/channels/${props.number}`}
                style={{ color: "inherit" }}
            > <span className="name">{props.number}: {props.name}</span> </Link>
      </div>
    </>
  );
};

export default ChannelUnit;
