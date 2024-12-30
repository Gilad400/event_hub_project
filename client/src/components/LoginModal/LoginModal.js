import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ onClose, onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onLogin(username);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Log In</h2>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Log In</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default LoginModal;
