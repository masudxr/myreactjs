/* eslint-disable no-undef */
import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedwarning = inputValue.includes('.js') ? 'You need JS Knowlage' : null;

        setTodo(inputValue);

        setWarning(updatedwarning);
    };
    return (
        <div>
            <p> {todo} </p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}

export default Todo;
