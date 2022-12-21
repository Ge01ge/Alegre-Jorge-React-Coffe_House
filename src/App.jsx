import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import  CartContext  from "./components/Context/CartContext";
import  { CartContextProvider } from "./components/Context/CartContext";
import { Layout } from "./components/Layout";



// alt + 96 = ` (acento grave)

function App() {
  // esto es un react fragmet <></>
  return (
   
      <Layout>
        <ItemListContainer greeting='"Coffe House una tienda online para los amantes del cafe"' />
        {/* <CartWidget />  */}
      </Layout>
    
  );
}

export default App;
