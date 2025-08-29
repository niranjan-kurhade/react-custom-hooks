import { useForm } from "../hooks/useForm";

export default function Login() {
  const { values, handleChange, resetForm } = useForm({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login submitted: " + JSON.stringify(values));
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>🔑 Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}
