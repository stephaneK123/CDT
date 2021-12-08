import React from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";

export const getPeoplesName = () => {};

export const getChatID = () => {
  const cchatID = 0;
  const headers = {
    "Project-ID": "6c0acb84-1640-40bb-861c-7cb8cb4ac5e1",
    "User-Name": "StephaneK",
    "User-Secret": "1234",
  };

  axios
    .get("https://api.chatengine.io/chats/latest/1", {
      headers: headers,
    })
    .then((res) => {
      //   cchatID = response.data.chatID;
      //   debugger;
      //   console.log();
      let id = res.data[0].id;
      sendMsg(id);
    })
    .catch((err) => {
      console.log("Something went wrong with fetching chat id");
      console.log(err);
    });
};

export const sendMsg = (id) => {
  localStorage.setItem("welcome", "true");
  //   debugger;
  const link = "https://api.chatengine.io/chats/" + id + "/messages/";
  const headers = {
    "Project-ID": "6c0acb84-1640-40bb-861c-7cb8cb4ac5e1",
    "User-Name": "StephaneK",
    "User-Secret": "1234",
  };

  axios
    .post(link, "text=Hello StephaneK! Welcome to the CDT app.", {
      headers: headers,
    })
    .then((response) => {})
    .catch((err) => {
      console.log("Something went wrong with sending message");
      console.log(err);
    });
};

// export function{ sendMsg,  };
