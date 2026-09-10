import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { getUsers, deleteUser } from "../services/userService";

function AdminUsers(){
 const [users,setUsers]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState("");
 useEffect(()=>{let ignore=false;getUsers().then(d=>{if(!ignore)setUsers(d.users||[])}).catch(e=>{if(!ignore)setError(e.response?.data?.message||"Could not load guests.")}).finally(()=>{if(!ignore)setLoading(false)});return()=>{ignore=true}},[]);
 const remove=async(id)=>{if(!window.confirm("Remove this guest?"))return;try{await deleteUser(id);setUsers(x=>x.filter(u=>u._id!==id))}catch(e){setError(e.response?.data?.message||"Delete failed.")}};
 return <div className="min-h-screen bg-[#f5f7f3] text-[#24322a]"><AdminNavbar/><main className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
  <div><p className="text-[#2f6b4f] text-xs font-bold tracking-[.3em] uppercase">People / {users.length}</p><h1 className="font-serif text-5xl mt-2">Guest book</h1><p className="text-[#756b60] mt-3">Everyone who has joined the table.</p></div>
  {error&&<div className="mt-7 bg-[#ead7d2] text-[#8e3525] p-4 rounded-2xl">{error}</div>}
  {loading?<div className="py-24 text-center text-[#756b60]">Opening the guest book…</div>:<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{users.map((u,i)=><div key={u._id} className="bg-[#fbf8f1] border border-[#d9d0c2] rounded-3xl p-6">
   <div className="flex justify-between items-start"><div className="w-12 h-12 rounded-2xl bg-[#254c3a] text-[#9bc7aa] grid place-items-center font-serif text-xl">{u.name?.charAt(0).toUpperCase()}</div><span className="text-[10px] uppercase tracking-widest font-bold text-[#2f6b4f]">{u.role}</span></div>
   <h2 className="font-serif text-2xl mt-7">{u.name}</h2><p className="text-[#756b60] text-sm mt-1 break-all">{u.email}</p><div className="border-t border-[#ddd3c5] mt-6 pt-4 flex justify-between items-center"><span className="text-xs text-[#8a7d6d]">{u.createdAt?new Date(u.createdAt).toLocaleDateString():"—"}</span>{u.role==="guest"?<button onClick={()=>remove(u._id)} className="text-sm font-bold text-[#8e3525]">Remove</button>:<span className="text-xs text-[#8a7d6d]">Protected</span>}</div>
  </div>)}</div>}
 </main></div>
}
export default AdminUsers;
