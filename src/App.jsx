import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  // esto es un react fragmet <></>
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='"Mi Tienda Online"'/>
    </>
    
  );
}

export default App;
