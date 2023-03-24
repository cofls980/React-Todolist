import React, {useState} from 'react';
import Header from '../components/Header';
import '../styles/home/home.css';
import HeaderAppList from '../components/HeaderAppList';

const Home = () => {

    return (
        <>
            <Header inLoginPage={false}/>
            <HeaderAppList />
        </>
    );
};

export default Home;