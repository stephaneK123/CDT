/** This is the coponent that represents the new message form for the chat application 
   @author Phillip Vickers
*/
import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { sendMessage, isTyping} from 'react-chat-engine';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ChromePicker } from 'react-color';
import Picker from 'emoji-picker-react';
import { blue } from '@mui/material/colors';

/* The new message form */
const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

    /* Handles the chaged in the text entry box */
    const handleChange = (event) => {
      setValue(event.target.value);

      isTyping(props, chatId);
    };
  
    /* Handles the submission of a message */
    const handleSubmit = (event) => {
      event.preventDefault();

      const text = value.trim();

      if (text.length > 0) {
        sendMessage(creds, chatId, {text});
      }
      setValue('');
    };

    /* Handles the upload of a file */
   const handleUpload = (event) => {
      sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };
 

/*-------------------Input Formatting-------------------------------*/

  /* text formats usestates */
 
  /* Color Picker usestates */
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  /* Emoji use states */
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  /* onClick for the emoji picker */
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    handleEmojiUpload(event);
  };

   /* Handles the upload of a emoji */
   const handleEmojiUpload = (event) => {
    sendMessage(creds, chatId, {chosenEmoji});
  };

  
/*-------------------List and Poll-------------------------------*/
 
   /* Build a poll */
   function buildPoll() {
    const url ="https://strawpoll.com/embed/1fjszdcbd";
    window.open(url, '_isBlank');
  }

  /* Build a list */
  function buildList() {
    alert('Build a List');
  }

  /*------------------------------------------------------------ */

   /* Styling for the upload button */
   const Input = styled('input')({
    display: 'none',
  });

 

  /* Custom Message Form */
  return (
    <form className="message-form" onSubmit={handleSubmit}>

      {/* Text input */}
      <input
        style= {styles.MessageText}
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      
      <div>
      <IconButton color="primary" aria-label="List">
          <FormatBoldIcon />
        </IconButton>
      
        <IconButton color="primary" aria-label="List" >
          <FormatItalicIcon />
        </IconButton>
       
        <IconButton color="primary" aria-label="List">
          <FormatUnderlinedIcon />
        </IconButton>

        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span" size="large">
            <PhotoCamera />
          </IconButton>
          <Input accept="image/*" id="icon-button-file" type="file" onChange={handleUpload.bind(this)} />
        </label>

        <IconButton color="primary" aria-label="List" onClick={buildList} >
          <FormatListNumberedIcon />
        </IconButton>

        <IconButton color="primary" aria-label="Poll" onClick={buildPoll}>
          <PollIcon />
        </IconButton>

        <IconButton color="primary" aria-label="emoji" onClick={() => setShowPicker(showPicker=> !showPicker)}>
          <EmojiEmotionsIcon />
        </IconButton>

        {
         showPicker &&(<Picker onEmojiClick={onEmojiClick} />)
        }
       
        <IconButton color="primary" aria-label="emoji" onClick={() => setShowColorPicker(showColorPicker=> !showColorPicker)}>
          <ColorLensIcon />
        </IconButton>

        {
          showColorPicker && ( <ChromePicker color={color} onChangeComplete={color => {
            setColor(color.hex);
          }}/>)
        }
        <div  style={{ position: 'absolute', right: '20px', bottom: '20px' }} >
        <IconButton color="primary" aria-label="Send" onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
        </div>
     </div>
    </form>
  );
};



const styles = {
    MessageText: { 
      Color: blue,
    },
  }

export default MessageForm;