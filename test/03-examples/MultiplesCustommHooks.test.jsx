import { render, screen, fireEvent } from "@testing-library/react";
import { MultiplesCustommHooks } from "../../src/03-examples/MultiplesCustommHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas al component MultiplesCustommHooks", () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el component por defecto", () => {
        useFetch.mockReturnValue({
            data: "",
            isLoading: true,
            hasError: null,
        });

        render(<MultiplesCustommHooks />);

        expect(screen.getByText("Cargando..."));
        expect(screen.getByText("Rick and Morty Character"));

        const nextButton = screen.getByRole("button", { name: "next" });
        expect(nextButton.disabled).toBeTruthy();
        const resetButton = screen.getByRole("button", { name: "reset" });
        expect(resetButton.disabled).toBeTruthy();
        const prevButton = screen.getByRole("button", { name: "prev" });
        expect(prevButton.disabled).toBeTruthy();
    });

    test("debe de mostrar un character", () => {
        useFetch.mockReturnValue({
            data: {
                name: "jose",
                species: "human",
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },

            isLoading: false,
            hasError: null,
        });

        render(<MultiplesCustommHooks />);

        expect(screen.getByText("jose"));
        expect(screen.getByText("human"));
        expect(
            screen.queryByText(
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            )
        );

        const nextButton = screen.getByRole("button", { name: "next" });
        expect(nextButton.disabled).toBeFalsy();
        const resetButton = screen.getByRole("button", { name: "reset" });
        expect(resetButton.disabled).toBeFalsy();
        const prevButton = screen.getByRole("button", { name: "prev" });
        expect(prevButton.disabled).toBeFalsy();
    });

    test("debe de llamar la funcion de incrementar", () => {
        useFetch.mockReturnValue({
            data: {
                name: "jose",
                species: "human",
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },

            isLoading: false,
            hasError: null,
        });

        render(<MultiplesCustommHooks />);

        const nextButton = screen.getByRole("button", { name: "next" });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});
