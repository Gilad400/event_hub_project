import React, { useState } from 'react';
import './SignInModal.css';

function SignInModal({ onClose, onSignIn }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [favoriteStyle, setFavoriteStyle] = useState('');

    const handleSubmit = () => {
        onSignIn({ username, email, password, favoriteStyle });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Sign in</h2>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Favorite Event Style:</label>
                <input type="text" value={favoriteStyle} onChange={(e) => setFavoriteStyle(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default SignInModal;
