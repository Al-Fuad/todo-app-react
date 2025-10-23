import styles from './CSS/TodoItems.module.css'
import tick from './Assets/tick.png'
import notTick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

export const TodoItems = ({ todoText, todoNo, status, setTodos }) => {

    const toggle = (no) => {
        console.log(no);
        let data = (JSON.parse(localStorage.getItem('todos')));
        for (let i = 0; i < data.length; i++) {
            if (i === no) {
                data[i].status = !data[i].status;
                break;
            }
        }
        setTodos(data);
    }

    const deleteTodo = (no) => {
        let data = (JSON.parse(localStorage.getItem('todos')));
        data = data.filter((item, index) => index !== no);
        setTodos(data);
    }

    return (
        <div className={styles.todoItems}>
            <div className={styles.todoItemsContainer}>
                <div onClick={() => toggle(todoNo)}>
                    {status ?
                        <img src={tick} alt="" />
                        : <img src={notTick} alt="" />
                    }
                </div>
                <div className={status ? styles.todoItemTextDone : styles.todoItemText}>
                    {todoText}
                </div>
            </div>
            <img onClick={() => {deleteTodo(todoNo)}} className={styles.cross} src={cross} alt="" />
        </div>
    )
}
