import axios from "axios";
import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import { IoLogoIonic } from "react-icons/io5";
import API from "../../API";

const Conversation = ({ conversation, currentUser, onlineUsers }) => {
  const [connectRider, setConnectRider] = useState([]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const connectRiderId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getConnectRider = async () => {
      const { data } = await API.get(
        "user/" + connectRiderId
      );
      setConnectRider(data);
    };
    getConnectRider();
    localStorage.setItem("connectRider", JSON.stringify(connectRider));
  }, [currentUser, conversation, connectRider]);

  useEffect(() => {
    onlineUsers.some((user) => user.userId === connectRider._id)
      ? setOnline(true)
      : setOnline(false);
  }, [onlineUsers, connectRider]);

  return (
    <>
      <div className="singleRider row d-flex align-items-center">
        <div className="profilePic col-3">
          <div className="converUser">
            <img
              src={
                connectRider.picture
                  ? connectRider.picture
                  : "/images/user-icon.png"
              }
              className="user-icon img-fluid"
              alt="Rider Profile"
            />
            {online ? <IoLogoIonic className="onlineUserIcon" /> : null}
          </div>
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
