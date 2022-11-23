import './App.css';

import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { Layout } from "./components/Layout";

// alt + 96 = ` (acento grave)

function App() {
  // esto es un react fragmet <></>
  return (
    <Layout>
      <ItemListContainer greeting='"Mi Tienda Online"'/>
      {/* <ItemDetailContainer /> */}
    </Layout>
    
  );
}

export default App;
