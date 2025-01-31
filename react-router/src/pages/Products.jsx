import { Link, useLoaderData } from "react-router-dom";
const Products = () => {
  const products = useLoaderData();
  return (
    <section>
      {products.map((product) => (
        <Link
          to={`/productDetail/${product.id}`}
          key={product.id}
          className="product"
        >
          <div>{product.title}</div>
          <div>{product.userId}</div>
        </Link>
      ))}
    </section>
  );
};

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (response.ok) {
    const products = await response.json();
    return products;
  } else {
    throw json({ message: "Can't get posts now." }, { status: 500 });
  }
};

export default Products;
