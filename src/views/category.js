// import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

import ItemListContainer from "../components/ItemListContainer";

const CategoryView = () => {
  // const { category } = useParams();
  // const categories = items.filter((product) => product.category === category);

  // console.log(category);

  return (
    <Layout>
      {/* {categories.map((product)=> (
            <Item product={product}/>))} */}
      <ItemListContainer />
    </Layout>
  );
};

export default CategoryView;
