import React, { useContext } from 'react'

import { ChatEngineContext } from 'react-chat-engine'

import {PeopleSettings} from 'react-chat-engine'
import {PhotosSettings} from 'react-chat-engine'
import {OptionsSettings} from 'react-chat-engine'
import {ChatSettingsTop} from 'react-chat-engine'
import PollSettings from './Poll/PollSettings'
import ListsSettings from './List/ListsSettings'

const ChatSettings = props => {
    const { conn, chats, activeChat } = useContext(ChatEngineContext)  
    const chat = chats && chats[activeChat] 

    if (conn === null) return <div />

    return (
        <div style={styles.settingsContainer} className='ce-settings'>
            <div style={{ width: '90%', paddingLeft: '5%' }} className='ce-settings-container'>
                {
                    props.renderChatSettingsTop ?
                    props.renderChatSettingsTop(conn, chat) :
                    <ChatSettingsTop />
                }

                {
                    props.renderPeopleSettings ?
                    props.renderPeopleSettings(conn, chat) :
                    <PeopleSettings />
                }

                {
                    props.renderPhotosSettings ?
                    props.renderPhotosSettings(chat) :
                    <PhotosSettings />
                }

                {
                    props.renderPollSettings ?
                    props.renderPollSettings(chat) :
                    <PollSettings />
                }

{
                    props.renderListsSettings ?
                    props.renderListsSettings(chat) :
                    <ListsSettings />
                }

                {
                    conn && chat && conn.userName === chat.admin.username  &&
                    <div>
                        {
                            props.renderOptionsSettings ?
                            props.renderOptionsSettings(conn, chat) :
                            <OptionsSettings />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ChatSettings

const styles = {
    settingsContainer: { 
        height: '100%',
        overflow: 'scroll',
        overflowX: 'hidden',
        borderLeft: '1px solid #afafaf',
        backgroundColor: 'white',
        fontFamily: 'Avenir'
    }
}