import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  // esto es un react fragmet <></>
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='"Mi Tienda Online"'/>
      <ItemDetailContainer />
    </>
    
  );
}

export default App;
