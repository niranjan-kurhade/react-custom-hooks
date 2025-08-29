import { useForm } from "../hooks/useForm";

export default function Signup() {
  const { values, handleChange, resetForm } = useForm({ name: "", email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Signup submitted: " + JSON.stringify(values));
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>📝 Signup</h2>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      /><br />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      /><br />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      /><br />
      <button type="submit">Signup</button>
    </form>
  );
}
