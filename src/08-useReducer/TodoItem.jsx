export const TodoItem = ({ todo, onDeleteTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between p-2">
                <span className="align-self-center">{todo.description}</span>
                <button
                    className="btn btn-outline-danger m-2"
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    X
                </button>
            </li>
        </>
    );
};
