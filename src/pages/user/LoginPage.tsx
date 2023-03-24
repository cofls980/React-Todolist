import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import '../../styles/user/login.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginId(e.target.value);
    }

    const onChangeLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginPassword(e.target.value);
    }

    const onClick = () => {
        localStorage.setItem('userId', loginId);
        navigate('/');
    }

    return (
        <>
            <Header inLoginPage={true}/>
            <div className='loginContainer'>
                <div className='loginWrapper'>
                    <div className='loginLogo'>Login</div>
                    <input
                        type='text'
                        className='loginItem'
                        placeholder='아이디'
                        onChange={onChangeLoginId}/>
                    <input
                        type='text'
                        className='loginItem'
                        placeholder='비밀번호'
                        onChange={onChangeLoginPassword}/>
                    <div className='loginButton' onClick={onClick}>로그인</div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;