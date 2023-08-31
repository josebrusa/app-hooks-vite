import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "@testing-library/react";

describe("Pruebas en useForm", () => {
    const initialForm = {
        name: "jose brusa",
        email: "jose@test.com",
    };

    test("debe regresar los valores por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test("debe de cambiar el nombre del formulario ", () => {
        const newValue = "mario";

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test("debe de reniciar el formulario ", () => {
        const newValue = "Mario";

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
