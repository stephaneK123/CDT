/* This is the main app component for the ChatApp.
   @author Phillip Vickers 
*/

import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import "./App.css";
import ChatSettings from "./components/ChatSettings/ChatSettings";
import MediaCard from "./components/helper/MediaCard.js";
import { EmailSender } from "./components/helper/EmailSender.js";
import { sendMessage } from "react-chat-engine";
import axios from "axios";
import { Report } from "@material-ui/icons";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import SimpleAccordion from "./components/helper/Accordion_mini.js";
import DirectChatPage from "./components/helper/OnetoOne.js";
import { sendMsg, getChatID } from "./components/helper/sendSKMsg.js";
const App = () => {
  localStorage.clear();
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="6c0acb84-1640-40bb-861c-7cb8cb4ac5e1" //Project ID from the chatEngine.io project settings
      // userName={localStorage.getItem('username')}       //userName- get from localstorage
      // userSecret={localStorage.getItem('password')}     //userSecret- get from localstorage

      userName="StephaneK"
      userSecret="1234"
      // audio for new messages
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
      //sending a message from "test" to "StephaneK"
      //this will trigger when "StephaneK" is connected
      onConnect={(creds) => {
        getChatID();
        // sendMsg(77863);
      }}
      // one to one chat

      // Chat List
      // Chat Card

      //New Chat Form
      //   renderNewChatForm={(creds) => DirectChatPage(creds)}
      //Chat Feed

      //Chat Header

      //Message Bubble

      //Scroll Down Bar

      //New Message Form

      //Chat Settings

      //Chat Settings Top

      //People Settings

      //Photo Settings
      renderPhotosSettings={(chat) => {}}
      //Options Settings

      //improved chat settings
      renderChatSettings={(chatAppProps) => <ChatSettings {...chatAppProps} />}
      //people's setting
      renderPeopleSettings={(creds, chat) => {}}

      //removing photos setion
    />
  );
};

export default App;
