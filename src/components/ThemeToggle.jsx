import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "10px" }}>
      <h2>🎨 Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
