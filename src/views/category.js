import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import Item from "../components/Item/Item";
import { items } from "../Mocks/Item.mock"; 
import ItemListContainer from '../components/ItemListContainer';

const CategoryView = () => {
    
    const { category } = useParams();
    // const categories = items.filter((product) => product.category === category);

  // console.log(category);

    return (
        <Layout>
            {/* {categories.map((product)=> (
            <Item product={product}/>))} */}
            <ItemListContainer />
        </Layout>
    //   <Layout>
    //     
    //   </Layout>
    );
  };
  
  export default CategoryView;