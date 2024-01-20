import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { fetchProducts } from "../../../components/State/Action/productActions";
import Styles from './Product.module.css';



interface Product {
   id: number;
   image: string;
   name: string;
   description: string;
   price: number;
   discountedPrice: number;
}

const ProductComponent: React.FC = () => {
   const dispatch = useDispatch();
  const products = useSelector((state: { products: Product[] }) => state.products);

  useEffect(() => {
   dispatch(fetchProducts());
 }, [dispatch]);


  return (
    <div className={Styles.SectionBContainer}>
      <div className={Styles.SectionBHeader}>
        <h4 className={Styles.HeaderLine}>Featured Products</h4>
        <h2 className={Styles.HeaderLine2}>BESTSELLER PRODUCTS</h2>
        <p className={Styles.HeaderLineP}>Problems trying to resolve the conflict between</p>
      </div>
      <div className={Styles.ContainerCards}>
        {products.map((product) => (
          <div key={product.id} className={Styles.CardsLists}>
            <Image src={product.image} alt={product.name} />
            <div className={Styles.CardsItems}>
              <h3 className={Styles.styleH3}>{product.name}</h3>
              <p className={Styles.styleP}>{product.description}</p>
              <div className={Styles.CardsPayment}>
                <p className={Styles.PaymentColor1}>{product.price}</p>
                <p className={Styles.PaymentColor2}>{product.discountedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;












