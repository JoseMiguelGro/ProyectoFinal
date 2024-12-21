import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (password && confirmPassword) {
            console.log(`Password: ${password}, Confirm Password: ${confirmPassword}`);
        }
    }, [password, confirmPassword]);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setMessage('Las contraseñas coinciden');
        } else {
            setMessage('Las contraseñas no coinciden');
        }
    };

    return (
        <div className="login-container">
            <h1>Registro</h1>
            <form onSubmit={handleRegister}>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Ingrese su contraseña" 
                />
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder="Confirme su contraseña" 
                />
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;