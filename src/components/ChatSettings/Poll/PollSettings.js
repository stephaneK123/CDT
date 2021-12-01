import React, { useContext } from 'react'

import { ChatEngineContext, Button } from 'react-chat-engine'

import Thumbnail from './Thumbnail'

import SettingsBlock from './SettingsBlock'



const PollSettings = () => {
    const { chats, activeChat } = useContext(ChatEngineContext)  
    const chat = chats && chats[activeChat] 

    if (!chat) return <div />

    function renderPolls(attachments) {
        return attachments.map((attachment, index) => {
            return <Thumbnail key={`person_${index}`} attachment={attachment} />
        })
    }

    return (
        <div style={{ borderTop: '1px solid #f0f0f0' }} className='ce-photo-section'>
            <SettingsBlock
                label='Polls'
                className='ce-section-title-container ce-photo-title-container'
            >

                    <Button 
                        value="Create Poll" 
                        id='poll-button'
                        style={{ width: '100%', marginBottom: '12px' }}
                    />  
                <div className='poll-feed'>
                    <div style={{ height: '12px' }} />

                    { renderPolls(chat.attachments) }
                </div>
            </SettingsBlock>
        </div>
    )
}

export default PollSettings