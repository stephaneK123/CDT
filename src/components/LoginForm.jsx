/* This is the coponent that represents the login form for the chat application 
   @author Phillip Vickers
*/

import { useState } from 'react';
import axios from 'axios';

/* Unique project ID from ChatEngine.io project settings page */
const projectID = '6c0acb84-1640-40bb-861c-7cb8cb4ac5e1';

/* LoginForm- Functional component that is the loginForm page
   Returns- form: the login page
*/
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      /*places the username and password into local storage */
      localStorage.setItem('username', username); 
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Username or password is incorrect');
    }
  };

  /* The form that makes up the login page */
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;