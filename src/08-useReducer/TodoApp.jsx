import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    } = useTodos();

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
                    Todo App: {todosCount} -
                    <small> pendientes: {pendingTodosCount}</small>
                </h2>
                <hr />

                <div className="row">
                    <div className="col-7">
                        <TodoList
                            todos={todos}
                            onDeleteTodo={handleDeleteTodo}
                            onToggleTodo={handleToggleTodo}
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
