const { render, screen, fireEvent } = require("@testing-library/react");
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <LoginPage/>", () => {
    test("debe de renderizar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });

    test("debe de llamar el setUser cuando se hace click en el boton", () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const loginBtn = screen.getByRole("button");
        fireEvent.click(loginBtn);

        expect(setUserMock).toHaveBeenCalledWith({
            email: "jose@text.com",
            id: 123,
            name: "jose brusa",
        });
    });
});
