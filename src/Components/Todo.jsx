import { useState } from 'react';
import styles from './CSS/Todo.module.css';
import { TodoItems } from './TodoItems.jsx';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const addTodo = () => {
        setTodos([...todos, {text: inputRef.current.value, status: false}]);
        inputRef.current.value = '';
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
    },[]);

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }, 100);
    }, [todos]);
  return (
    <div className={styles.todo}>
        <div className={styles.todoHeader}>Todo List</div>
        <div className={styles.todoAdd}>
            <input ref={inputRef} type="text" placeholder="Add your todo here..." className={styles.todoInput} />
            <button onClick={() => {addTodo()}} className={styles.todoButton}>Add Todo</button>
        </div>
        <div className={styles.todoItems}>
            {
                todos.map((item, index) => {
                    return <TodoItems key={index} setTodos={setTodos} todoNo={index} todoText={item['text']} status={item['status']} />
                })
            }
        </div>
    </div>
  )
}
