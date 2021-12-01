import React, { useContext } from 'react'

import { ChatEngineContext, Button } from 'react-chat-engine'

import Thumbnail from '../Poll/Thumbnail'

import SettingsBlock from '../Poll/SettingsBlock'



const ListsSettings = () => {
    const { chats, activeChat } = useContext(ChatEngineContext)  
    const chat = chats && chats[activeChat] 

    if (!chat) return <div />

    function renderLists(attachments) {
        return attachments.map((attachment, index) => {
            return <Thumbnail key={`person_${index}`} attachment={attachment} />
        })
    }

    return (
        <div style={{ borderTop: '1px solid #f0f0f0' }} className='ce-photo-section'>
            <SettingsBlock
                label='Lists'
                className='ce-section-title-container ce-photo-title-container'
            >

                    <Button 
                        value="Create List" 
                        id='list-button'
                        style={{ width: '100%', marginBottom: '12px' }}
                    />  
                <div className='list-feed'>
                    <div style={{ height: '12px' }} />

                    { renderLists(chat.attachments) }
                </div>
            </SettingsBlock>
        </div>
    )
}

export default ListsSettings