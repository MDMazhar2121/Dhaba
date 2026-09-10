import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PublicNavbar() {
  const navigate = useNavigate(); const [open,setOpen]=useState(false);
  const token=localStorage.getItem("token"); const user=JSON.parse(localStorage.getItem("user")||"null");
  const logout=()=>{localStorage.removeItem("token");localStorage.removeItem("user");navigate("/");setOpen(false);};
  return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#dce5dc]">
    <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
      <Link to="/" onClick={()=>setOpen(false)} className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-[#2f6b4f] text-white grid place-items-center font-bold">F</div>
        <div><div className="font-bold text-xl text-[#254c3a]">FLAVORA</div><div className="text-[9px] uppercase tracking-[.18em] text-[#7a887e]">Food &amp; Table</div></div>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-[#2f6b4f]">Home</Link><Link to="/menu" className="hover:text-[#2f6b4f]">Menu</Link>
        {token&&user ? <>{user.role==="admin"&&<Link to="/admin" className="hover:text-[#2f6b4f]">Dashboard</Link>}<span className="text-[#718077]">Hi, {user.name}</span><button onClick={logout} className="border border-[#bfcfc4] px-4 py-2 rounded-lg hover:bg-[#eef4ef]">Sign out</button></> : <><Link to="/login" className="hover:text-[#2f6b4f]">Login</Link><Link to="/register" className="bg-[#2f6b4f] text-white px-4 py-2 rounded-lg hover:bg-[#25573f]">Create account</Link></>}
      </nav>
      <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button>
    </div>
    {open&&<div className="md:hidden border-t border-[#dce5dc] bg-white px-5 py-4 space-y-3">
      <Link className="block" to="/" onClick={()=>setOpen(false)}>Home</Link><Link className="block" to="/menu" onClick={()=>setOpen(false)}>Menu</Link>
      {token&&user?<><div className="text-[#718077]">Hi, {user.name}</div>{user.role==="admin"&&<Link className="block" to="/admin" onClick={()=>setOpen(false)}>Dashboard</Link>}<button onClick={logout} className="w-full bg-[#2f6b4f] text-white py-2.5 rounded-lg">Sign out</button></>:<div className="flex gap-2"><Link className="flex-1 text-center border py-2.5 rounded-lg" to="/login" onClick={()=>setOpen(false)}>Login</Link><Link className="flex-1 text-center bg-[#2f6b4f] text-white py-2.5 rounded-lg" to="/register" onClick={()=>setOpen(false)}>Register</Link></div>}
    </div>}
  </header>;
}
export default PublicNavbar;
