import { useWindowSize } from "../hooks/useWindowSize";

export default function WindowInfo() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>📏 Window Size</h2>
      <p>{width} x {height}</p>
      <p>{width < 768 ? "Mobile View 📱" : "Desktop View 💻"}</p>
    </div>
  );
}
