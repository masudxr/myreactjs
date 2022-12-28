/* eslint-disable no-undef */

// function Todo() {
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState(null);

//     const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const updatedwarning = inputValue.includes('.js') ? 'You need JS Knowlage' : null;

//         setTodo(inputValue);

//         setWarning(updatedwarning);
//     };
//     return (
//         <div>
//             <p> {todo} </p>
//             <p>
//                 <textarea name="todo" value={todo} onChange={handleInput} />
//             </p>
//             <hr />
//             <h2>{warning || 'Good Choice'}</h2>
//         </div>
//     );
// }
// -----------------------------------------------

// useState with object/Array

function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;
    return (
        <div>
            <p> {title} </p>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            // ...todo,
                            title: e.target.value,
                        })
                    }
                />
            </p>
            <p> {description} </p>
            <p>
                <textarea
                    name="todo"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            // ...todo,
                            description: e.target.value,
                        })
                    }
                />
            </p>
        </div>
    );
}

export default Todo;
