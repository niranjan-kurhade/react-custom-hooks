import { useFetch } from "../hooks/useFetch";

export default function Posts() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>📄 Posts</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}><b>{post.title}</b></li>
        ))}
      </ul>
    </div>
  );
}
