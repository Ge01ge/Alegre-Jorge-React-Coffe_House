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
    <CartContextProvider value={[]}>
      <Layout>
        <ItemListContainer greeting='"Mi Tienda Online"' />
        {/* <ItemDetailContainer /> */}
      </Layout>
    </CartContextProvider>
  );
}

export default App;
