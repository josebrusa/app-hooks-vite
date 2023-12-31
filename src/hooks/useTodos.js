import { useReducer } from "react";
import { useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
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

    const handleToggleTodo = (id) => {
        dispatch({
            type: "Toggle Todo",
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};
