import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderAppList = () => {
    const navigate = useNavigate();

    return (
        <div className='homeContainer'>
            <div className='homeItem' onClick={()=>navigate('/todo')}>TodoList</div>
            <div className='homeItem'>|</div>
            <div className='homeItem'>Continued</div>
        </div>
    );
};

export default HeaderAppList