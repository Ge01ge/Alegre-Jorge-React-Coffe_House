import { Layout } from "../components/Layout";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const ItemView = () => {
    // const { category } = useParams();
    // const categories = item.filter((product) => product.category === category);
  
    return (
        <Layout>
            <ItemDetailContainer />
        </Layout>
    );
  };
  
  export default ItemView;