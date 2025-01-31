import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <section>
      <h2>{post.title}</h2>
      <p>post by{post.userId}</p>
      <h4>{post.body}</h4>
    </section>
  );
};

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (response.ok) {
    const product = await response.json();
    return product;
  } else {
    throw json({ message: `Post not found`, status: 404 });
  }
};

export default ProductDetail;
