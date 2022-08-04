import { Link } from "react-router-dom";
import products from "../data";

function Products() {
  return (
    <section className="section">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => {
          return (
            <article key={product.id}>
              <h5>
                {product.name}
              </h5>
              <Link to={`/products/${product.id}`} className="btn">
                More info
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
