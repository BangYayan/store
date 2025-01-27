import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

const Homepage = async () => {
  const latestProduct = await getLatestProducts();
  return ( <ProductList data={latestProduct} title="Newest Arrival" limit={4}/> );
}
 
export default Homepage;