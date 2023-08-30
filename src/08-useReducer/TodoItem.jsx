export const TodoItem = ({ todo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between p-2">
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-outline-danger m-2">X</button>
            </li>
        </>
    );
};
