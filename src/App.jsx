import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ThemeToggle from "./components/ThemeToggle";
import WindowInfo from "./components/WindowInfo";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/posts">📄 Posts</Link>
        <Link to="/users">👤 Users</Link>
        <Link to="/login">🔑 Login</Link>
        <Link to="/signup">📝 Signup</Link>
        <Link to="/theme">🎨 Theme</Link>
        <Link to="/window">📏 Window</Link>
      </nav>

      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/theme" element={<ThemeToggle />} />
        <Route path="/window" element={<WindowInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
