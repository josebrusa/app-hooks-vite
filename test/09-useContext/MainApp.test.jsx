const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");

describe("Prueba en el componente <MainApp />", () => {
    test("debes de mostrar el HomePage", () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("HomePage")).toBeTruthy();
    });

    test("debes de mostrar el LoginPage", () => {
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("LoginPage")).toBeTruthy();
    });

    test("debes de mostrar el AboutPage", () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("AboutPage")).toBeTruthy();
    });
});
