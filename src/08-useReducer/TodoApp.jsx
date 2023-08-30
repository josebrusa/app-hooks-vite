import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: "recolectar la piedra del alma",
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: "recolectar la piedra del poder",
        done: false,
    },
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo });
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
                        <TodoList todos={todos} />
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
