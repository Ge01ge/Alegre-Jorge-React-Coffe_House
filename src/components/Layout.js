import NavBar from "../components/NavBar";

export const Layout = ({ children }) => {
    return (
      <main className="bg-secondary text-dark">
        <NavBar />
        {children}
        <footer>
            <h3>Derechos Reservados</h3>
        </footer>
      </main>
    );
  };