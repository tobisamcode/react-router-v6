import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  console.log(productId);

  return (
    <section className="section product">
      <h1>
        {productId}
      </h1>
      <h2>single product</h2>
      <Link to="/products" className="btn">
        Back To Products
      </Link>
    </section>
  );
}
