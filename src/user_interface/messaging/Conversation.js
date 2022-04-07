import axios from "axios";
import React, { useState, useEffect } from "react";
import { format } from "timeago.js";

const Conversation = ({ conversation, currentUser }) => {
  const [connectRider, setConnectRider] = useState([]);

  useEffect(() => {
    const connectRiderId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getConnectRider = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/user/" + connectRiderId
      );
      setConnectRider(data);
    };
    getConnectRider();
    localStorage.setItem("connectRider", JSON.stringify(connectRider));
  }, [currentUser, conversation, connectRider]);

  return (
    <>
      <div className="singleRider row d-flex align-items-center">
        <div className="profilePic col-3">
          <img
            src={
              connectRider.picture
                ? connectRider.picture
                : "/images/user-icon.png"
            }
            className="user-icon img-fluid"
            alt="Rider Profile"
          />
        </div>
        <div className="rider col-9 d-flex flex-row justify-content-between align-items-center">
          <h5>{connectRider.fullName}</h5>
          <span>{format(conversation.date)}</span>
        </div>
      </div>
    </>
  );
};

export default Conversation;
