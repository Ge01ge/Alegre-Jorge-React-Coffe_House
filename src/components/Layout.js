import NavBar from "../components/NavBar";

export const Layout = ({ children }) => {
  return (
    <main className="bg-secondary p-2 text-dark bg-opacity-10">
      <NavBar />
      {children}
      <footer>
        <h5 className="container-fluid bg-dark p-4">
          <div className="text-decoration-none text-white d-flex justify-content-center">
            © 2020 Copyright
            <i className="bi bi-github px-2 text-decoration-none text-white ">
            {" "}
            <a
              href="https://github.com/Ge01ge"
              target="blank"
              className="text-decoration-none"
            >
              <span className="text-decoration-none pb-4 text-white ">
                Alegre Jorge
              </span>
            </a>
          </i>
          </div>
        </h5>
      </footer>
    </main>
  );
};
