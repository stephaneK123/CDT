
import { Button } from 'react-chat-engine'

import SettingsBlock from './SettingsBlock'



const PollSettings = () => {
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
                        OnClick= {buildPoll}
                    />  

                    <p>Create a poll and then enter the link to the poll with the link button in the message box.</p>
              
            </SettingsBlock>
        </div>
    )
}

export default PollSettings