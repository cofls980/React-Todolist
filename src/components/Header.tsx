import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/common/header.css'
import HeaderAppList from './HeaderAppList';
import HeaderLogin from './HeaderLogin';

interface HeaderProps {
    inLoginPage: boolean;
}

const Header = ({inLoginPage}: HeaderProps) => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className='containerHeader'>
                <div className='wrapperHeader'>
                    <div className='logo' onClick={()=>navigate('/')}>Pong?!</div>
                    {inLoginPage === true ? (
                        null
                    ) : (
                        <HeaderLogin />
                    )}
                    
                </div>
            </div>
            <div className='empty'/>
            {inLoginPage === true ? (
                null
            ) : (
                <HeaderAppList />
            )}
        </>
    );
};

export default Header;