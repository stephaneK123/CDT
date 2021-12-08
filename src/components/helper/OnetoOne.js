import React, { useState } from "react";
import UnstyledInput from "./Input";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AlertDialog from "./LDialog";
const DirectChatPage = (creds) => {
  const errMsg = "This feature is still being worked on, sorry!";
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    alert("Sorry! This is still in development");
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  return (
    <Stack direction="column" spacing={2}>
      <Input
        // defaultValue="Enter user name.."
        placeholder="Enter user name.."
        error
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <AlertDialog title={"CDT Team News"} body={errMsg} />
    </Stack>
  );
};

export default DirectChatPage;
