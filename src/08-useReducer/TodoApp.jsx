import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useEffect } from "react";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "Add Todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "Delete Todo",
            payload: id,
        });
    };

    return (
        <>
            <div
                className="m-4 p-4 border border-2 rounded "
                style={{
                    width: "58rem",
                    height: "28rem",
                }}
            >
                <h2 className="text-center">
                    Todo App: (10) - <small>pendientes: 2</small>
                </h2>
                <hr />

                <div className="row">
                    <div className="col-7">
                        <TodoList
                            todos={todos}
                            onDeleteTodo={handleDeleteTodo}
                        />
                    </div>
                    <div className="col-5">
                        <h4>Agregar TODO</h4>
                        <hr />
                        <TodoAdd onNewTodo={handleNewTodo} />
                    </div>
                </div>
            </div>
        </>
    );
};
