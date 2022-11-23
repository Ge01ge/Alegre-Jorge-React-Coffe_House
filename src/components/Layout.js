import NavBar from "../components/NavBar";

export const Layout = ({ children }) => {
    return (
      <main className="bg-secondary p-2 text-dark bg-opacity-10">
        <NavBar />
        {children}
        <footer>
            <h3>Derechos Reservados</h3>
        </footer>
      </main>
    );
  };