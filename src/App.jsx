import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  // esto es un react fragmet <></>
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
    
  );
}

export default App;
