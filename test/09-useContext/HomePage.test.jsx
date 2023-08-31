const { render, screen } = require("@testing-library/react");
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <HompePage />", () => {
    const user = {
        id: 1,
        name: "jose",
    };

    test("debe de mostrar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");

        // screen.debug();
    });

    test("debe de mostrar el componente con el usuario", () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);

        // screen.debug();
    });
});
