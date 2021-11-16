/* This is the main app component for the ChatApp.
   @author Phillip Vickers 
*/

import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

/* App- Functional component that is the chat application 
   Returns- ChatEngine component
*/
const App =() => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height="100vh"
            projectID="6c0acb84-1640-40bb-861c-7cb8cb4ac5e1"  //Project ID from the chatEngine.io project settings
            userName={localStorage.getItem('username')}       //userName- get from localstorage
            userSecret={localStorage.getItem('password')}     //userSecret- get from localstorage
            
        />    
    );
};

export default App;