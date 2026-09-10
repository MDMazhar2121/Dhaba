import { Link, useNavigate, useLocation } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const active = (path) => location.pathname === path ? "bg-[#d7a642] text-[#254c3a]" : "text-[#d9d0c2] hover:bg-white/10";

  return (
    <header className="bg-[#254c3a] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/admin" className="font-serif text-2xl">FLAVORA<span className="text-xs font-sans text-[#8d8379] ml-2">/ STUDIO</span></Link>
        <nav className="hidden md:flex items-center gap-2">
          <Link className={`px-4 py-2 rounded-full text-sm font-semibold ${active("/admin")}`} to="/admin">Overview</Link>
          <Link className={`px-4 py-2 rounded-full text-sm font-semibold ${active("/admin/menu")}`} to="/admin/menu">Menu</Link>
          <Link className={`px-4 py-2 rounded-full text-sm font-semibold ${active("/admin/users")}`} to="/admin/users">Guests</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-[#a79c91]">{user?.name || "Admin"}</span>
          <button onClick={logout} className="text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-[#254c3a] transition">Exit</button>
        </div>
      </div>
    </header>
  );
}
export default AdminNavbar;
