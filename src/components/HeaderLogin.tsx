import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/user/LoginPage';
import '../styles/common/header.css'

const HeaderLogin = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const onClickLogin = () => {
        navigate('/login');
        <LoginPage />
    }

    const onClickLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    
    return (
        <>
            {userId ? (
                <div className='homeLoginButton' onClick={onClickLogout}>{userId}</div>
            ) : (
                <div className='homeLoginButton' onClick={onClickLogin}>
                    login
                </div>
            )}
        </>
    );
};

export default HeaderLogin;