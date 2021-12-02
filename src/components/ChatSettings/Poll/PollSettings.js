import React, { useContext } from 'react'

import { ChatEngineContext, Button } from 'react-chat-engine'

import Thumbnail from './Thumbnail'

import SettingsBlock from './SettingsBlock'



const PollSettings = () => {
    const { chats, activeChat } = useContext(ChatEngineContext)  
    const chat = chats && chats[activeChat] 


     /* Build a poll */
   function buildPoll() {
    const url ="https://strawpoll.com/en/create/";
    window.open(url, '_isBlank');
  }

    return (
        <div style={{ borderTop: '1px solid #f0f0f0' }} className='ce-photo-section'>
            <SettingsBlock
                label='Polls'
                className='ce-section-title-container ce-photo-title-container'
            >

                    <Button 
                        onClick={buildPoll}
                        value="Create Poll" 
                        id='poll-button'
                        style={{ width: '100%', marginBottom: '12px' }}
                    />  
              
            </SettingsBlock>
        </div>
    )
}

export default PollSettings