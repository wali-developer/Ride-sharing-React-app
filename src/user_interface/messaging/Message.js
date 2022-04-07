import React from "react";
import { format } from "timeago.js";

const Message = ({ message, ownMessage, OwnUser, ConnectedRider }) => {
  return (
    <>
      <div className="messagesList">
        <div className={ownMessage ? "singleMessage own" : "singleMessage"}>
          <div className="row singleMessageRow d-flex align-items-start">
            <div className="col-2 my-2">
              <img
                src="/images/user-icon.png"
                className="user-icon img-fluid "
                alt="user"
              />
            </div>
            <div
              className={
                !ownMessage
                  ? "message-text col-md-10 "
                  : "message-text col-md-10"
              }
              id={ownMessage ? "ownMessageText" : ""}
            >
              <span>{message.text}</span>
            </div>
          </div>
          <div className="messager-details d-flex flex-row justify-content-between">
            <div className="messagerName">
              {ownMessage ? OwnUser.fullName : ConnectedRider.fullName}
            </div>
            <div className="messageDate">{format(message.date)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
