import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "@testing-library/react";

describe("Pruebas en el useCounter", () => {
    test("debes de rertornar los valores por defecto ", () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test("debe de generar el counter con el valor de 100", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test("debe de incrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        act(() => {
            increment();
        });
        expect(result.current.counter).toBe(101);
    });

    test("debe de decrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
        });
        expect(result.current.counter).toBe(99);
    });

    test("debe de reiniciar el contador", () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();
        });
        expect(result.current.counter).toBe(100);
    });
});
