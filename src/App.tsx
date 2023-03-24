import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from './pages/user/LoginPage';
import TodolistPage from './pages/todolist/TodolistPage';
import './styles/app.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/todo" element={<TodolistPage/>} />
                </Routes>
            </Router>
        </>
        // <div className="App" style={{ padding: 16, backgroundColor: '#282c34' }}>
        //     <header className="App-header">
        //         <p>
        //             Edit and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //                 Learn React
        //         </a>
        //     </header>
        //     <div>
        //         <Comment name={'Chaekim'} content={"!!!!"} />
        //     </div>
        // </div>

        // <>
        //     <div className="mainContainer">
        //         <div className="appContainer">
        //             <TodoList/>
        //             {/* <Item text="할일 1"/>
        //             <Item text="할일 2"/>
        //             <Item text="완료한 일 1" completed/> */}
        //             {/* <input type="text"
        //                 className="inputText"
        //                 placeholder="내용을 입력 후 엔터"
        //             /> */}
        //         </div>
        //     </div>
        // </>
    );
}
export default App;