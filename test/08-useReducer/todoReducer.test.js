import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
    const initialState = [
        {
            id: 1,
            description: "demo todo",
            done: false,
        },
    ];

    test("debe de regresar el estado inicial", () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test("debe de agregar un TODO", () => {
        const action = {
            type: "Add Todo",
            payload: {
                id: 2,
                description: " new todo",
                done: false,
            },
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test("debe de eliminar un TODO", () => {
        const action = {
            type: "Delete Todo",
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test("debe de realizar un toggle del TODO", () => {
        const action = {
            type: "Toggle Todo",
            payload: 1,
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
    });
});
