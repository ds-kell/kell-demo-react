import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error, userData } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            {userData && (
                <div>
                    <h3>Welcome, {userData.username}!</h3>
                    <p>Authorities: {userData.authorities.join(', ')}</p>
                    <p>Access Token: {userData.accessToken}</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
