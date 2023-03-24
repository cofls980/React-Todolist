import React, {useState, useRef} from 'react';
import {BsTrash} from 'react-icons/bs'
import Header from '../../components/Header';
import '../../styles/todolist/todolist.css'

interface TodolistProps {
    id: number;
    text: string;
    // completed: boolean;
}

const TodolistPage = () => {
    const [todoInputText, setTodoInputText] = useState('');
    const [todoItems, setItems] = useState<TodolistProps[]>([]);
    const nextItem = useRef(0);

    const onChangeTodoInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoInputText(e.target.value);
    }

    const onClickCreateItem = () => {
        const newItem: TodolistProps = {
            id: nextItem.current,
            text: todoInputText
        }
        setItems(todoItems.concat(newItem));
        nextItem.current += 1;
    }

    const onCliCkDeleteItem = (id: number) => {
        setItems(todoItems.filter(item => item.id !== id));
    }

    return (
        <>
            <Header inLoginPage={false}/>
            <div className='emp'></div>
            <div className='todoCreateWrapper'>
                <input
                    type='text'
                    className='todoInputText'
                    placeholder='내용 입력하시오.'
                    onChange={onChangeTodoInputText}/>
                <div className='todoCreateButton' onClick={onClickCreateItem}>입력</div>
            </div>
            <div>
                {todoItems.map(item =>
                    <div className='todoListWrapper'>
                        <div className='todoItem'>
                            {item.text}
                        </div>
                        <div className='todoItemDelete' onClick={(e)=>onCliCkDeleteItem(item.id)}>
                            <BsTrash />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TodolistPage;