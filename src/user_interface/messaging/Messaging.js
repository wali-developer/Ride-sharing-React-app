import React, { useState, useEffect, useRef } from "react";
import { GoSearch } from "react-icons/go";
import Conversation from "./Conversation";
import Message from "./Message";
import "./messaging.css";
import axios from "axios";
import { io } from "socket.io-client";
import API from "../../API";

const Messaging = () => {
  const [user, setUser] = useState({});
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();
  const [ConnectedRider, setConnectedRider] = useState([]);
  let socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        date: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
      if (users) {
        setOnlineUsers(users);
      }
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      const { data } = await API.get(
        `conversations/${user._id}`
      );
      setConversations(data);
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await API.get(
        `messages/${currentChat?._id}`
      );
      setMessages(data);
    };
    getMessages();
  }, [currentChat]);

  // handle send message
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") {
      alert("Empty message cannot be sent!");
    } else {
      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat?._id,
      };

      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );

      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId: receiverId,
        text: newMessage,
      });

      try {
        const { data } = await API.post(
          "messages",
          message
        );
        setMessages([...messages, data]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="col-md-9 userProfile-main messaging">
        <div className="row messagingRow">
          <div className="connectRiders-section col-12 col-md-5">
            <div className="topBar">
              <span className="topBar-heading">Connected Riders</span>
            </div>
            <div className="SearchBox">
              <GoSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search messages"
                className="search-riders-input"
              />
            </div>
            <div className="connectedRiders">
              {conversations.map((conversation, index) => {
                return (
                  <div
                    onClick={() => {
                      setCurrentChat(conversation);
                      setConnectedRider(
                        JSON.parse(localStorage.getItem("connectRider"))
                      );
                    }}
                    key={index}
                  >
                    <Conversation
                      conversation={conversation}
                      currentUser={user}
                      onlineUsers={onlineUsers}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="messagesBody-section col-12 col-md-7">
            {currentChat ? (
              <>
                <div className="topBar">
                  <span className="topBar-heading">
                    <img
                      src="/images/user-icon.png"
                      alt="Rider profile"
                      className="user-icon img-fluid"
                    />
                    {/* Message receiver Name */}
                    {ConnectedRider.fullName}
                  </span>
                </div>
                <div className="messagesContainer">
                  {messages.map((message) => {
                    return (
                      <div ref={scrollRef}>
                        <Message
                          message={message}
                          ownMessage={message.sender === user._id}
                          OwnUser={user}
                          ConnectedRider={ConnectedRider}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="newMessage">
                  <textarea
                    class="form-control"
                    placeholder="Write a message... "
                    rows="3"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn primmaryBtn sendMessageBtn my-2"
                    onClick={(e) => handleSendMessage(e)}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="EmptyConversation">
                Open connected Riders conversation to start <br /> a chat
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messaging;
