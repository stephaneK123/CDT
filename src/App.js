/* This is the main app component for the ChatApp.
   @author Phillip Vickers 
*/

import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
// import ChatFeed from './components/ChatFeed/ChatFeed.jsx';
import "./App.css";
//import PollSettings from './components/Poll/PollSettings.js';
import ChatSettings from "./components/ChatSettings/ChatSettings";
import MediaCard from "./components/helper/MediaCard.js";
import { EmailSender } from "./components/helper/EmailSender.js";
import { sendMessage } from "react-chat-engine";
import axios from "axios";
import { Report } from "@material-ui/icons";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
// import { htmlToText } from 'html-to-text';
/* App- Functional component that is the chat application 
   Returns- ChatEngine component
*/

//styling

const App = () => {
    localStorage.clear();
    // if (!localStorage.getItem('username')) return <LoginForm />;

    return (<
        ChatEngine
        //app overall set up
        height="100vh"
        projectID="6c0acb84-1640-40bb-861c-7cb8cb4ac5e1" //Project ID from the chatEngine.io project settings
        // userName={localStorage.getItem('username')}       //userName- get from localstorage
        // userSecret={localStorage.getItem('password')}     //userSecret- get from localstorage

        //for testing purposes
        //StephaneK
        //SeanG
        userName="StephaneK"
        userSecret="1234"
        onNewMessage={
            () =>
                new Audio(
                    "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
                ).play()
        } //Audio notification for new message
        //improved chat settings
        renderChatSettings={
            (chatAppProps) => < ChatSettings {...chatAppProps}
            />}
        // // sending emails to new users //not possible dynmacally

        //     onConnect={(creds) => {
        //          const chatID = ""
        //         //get the chat ID
        //         try {
        //             axios.get('/user?ID=12345')
        //                 .then(function (response) {
        //                     chatID = response.data.chatID
        //                     console.log(response);
        //                 })
        //                 .catch(function (error) {
        //                     // handle error
        //                     console.log(error);
        //                 })
        //                 .then(function () {
        //                     // always executed
        //                 });

        //         } catch (error) {
        //             // handle error
        //         }
        //         const url = "https://api.chatengine.io/chats/" + { chatID } + "/messages/"
        //         const data = {
        //             "text": "Welcome StephaneK! The CDT Team hopes you like your stay!",
        //             "attachment_urls": ["https://banner2.cleanpng.com/20190702/fpe/kisspng-world-emoji-day-smiley-clip-art-portable-network-g-5d1b59289244a0.4991787115620733845991.jpg"]
        //         }

        //         // send a message
        //         axios.post(url, data, {
        //             headers: {
        //                 "Project-ID": creds.projectID,
        //                 "User-Name": creds.userName,
        //                 "User-Secret": creds.userSecret
        //             }
        //         })
        //     }
        // }

        //     // sendMessage(creds, "6c0acb84-1640-40bb-861c-7cb8cb4ac5e1", data, () => {console.log("Error Sending message")})

        // }}

        // onEditChat={(chat) => {
        //     EmailSender()
        // }}

        //removing photos setion
        renderPhotosSettings={
            (chat) => { }
        }
        // improved chat card
        // renderChatCard = {
        //     (chat, index) => {
        //         console.log(chat);
        //         // let lastMessage = htmlToText(chat.lastMessage.text, {})
        //         return <MediaCard title = { chat.title }
        //         lastMessage = { chat.lastMessage }
        //         />;
        //     }
        // }

        //improved check chat form
        // renderNewChatForm={(creds) => {
        //     // button x = creds.button

        // }}

        //better chat header
        //   renderChatHeader={(chat) => {
        //     return (
        //       <Box sx={{ width: "100%", maxWidth: 500 }}>
        //         {" "}
        //         <Typography variant="h3" component="div" gutterBottom>
        //           {" "}
        //           Testing{" "}
        //         </Typography>
        //       </Box>
        //     );
        //   }}

        //improved chat list
        // renderChatList={(chatAppState) => {

        //     return (
        //         <MediaCard />
        //     )
        // }}

        //improved people settings
        renderPeopleSettings={
            (creds, chat) => { }
        }
    //improved chat settings
    />
    );
};

export default App;