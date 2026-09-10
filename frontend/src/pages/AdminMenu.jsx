import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AddMenuForm from "../components/AddMenuForm";
import EditMenuForm from "../components/EditMenuForm";
import { getMenuItems, deleteMenuItem } from "../services/menuService";

function AdminMenu() {
  const [items,setItems]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState(""); const [mode,setMode]=useState(null);

  useEffect(()=>{ let ignore=false; getMenuItems().then(d=>{if(!ignore)setItems(d.menuItems||[])}).catch(e=>{if(!ignore)setError(e.response?.data?.message||"Could not load menu.")}).finally(()=>{if(!ignore)setLoading(false)}); return()=>{ignore=true}},[]);

  const remove = async(id)=>{if(!window.confirm("Delete this menu item?"))return; try{await deleteMenuItem(id);setItems(x=>x.filter(i=>i._id!==id))}catch(e){setError(e.response?.data?.message||"Delete failed.")}};
  return <div className="min-h-screen bg-[#f5f7f3] text-[#24322a]"><AdminNavbar/><main className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5"><div><p className="text-[#2f6b4f] text-xs font-bold tracking-[.3em] uppercase">Catalogue / {items.length} dishes</p><h1 className="font-serif text-5xl mt-2">Kitchen menu</h1><p className="text-[#756b60] mt-3">Shape what guests see.</p></div><button onClick={()=>setMode("add")} className="bg-[#254c3a] text-white px-6 py-3 rounded-full font-bold">+ New dish</button></div>
    {error&&<div className="mt-7 bg-[#ead7d2] text-[#8e3525] p-4 rounded-2xl">{error}</div>}
    {mode==="add"&&<div className="mt-8"><AddMenuForm onItemAdded={i=>{setItems(x=>[i,...x]);setMode(null)}} onCancel={()=>setMode(null)}/></div>}
    {mode?.type==="edit"&&<div className="mt-8"><EditMenuForm item={mode.item} onItemUpdated={i=>{setItems(x=>x.map(old=>old._id===i._id?i:old));setMode(null)}} onCancel={()=>setMode(null)}/></div>}
    {loading?<div className="py-24 text-center text-[#756b60]">Reading the menu…</div>:items.length===0?<div className="py-24 text-center">No dishes yet.</div>:
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">{items.map(item=><article key={item._id} className="bg-[#fbf8f1] border border-[#d9d0c2] rounded-[1.5rem] overflow-hidden">
        <div className="aspect-[5/3] bg-[#ddd0bd] relative">{item.image?<img src={item.image} alt={item.name} className="w-full h-full object-cover"/>:<div className="w-full h-full grid place-items-center text-6xl">🍛</div>}<span className="absolute top-4 left-4 bg-[#fbf8f1] text-xs font-bold px-3 py-1.5 rounded-full">{item.availability?"LIVE":"PAUSED"}</span></div>
        <div className="p-6"><div className="flex justify-between gap-4"><div><p className="text-[#2f6b4f] text-[10px] uppercase tracking-widest font-bold">{item.category}</p><h2 className="font-serif text-2xl mt-1">{item.name}</h2></div><b>₹{item.price}</b></div><p className="text-[#756b60] text-sm mt-3 line-clamp-2">{item.description}</p><div className="flex gap-2 mt-6"><button onClick={()=>setMode({type:"edit",item})} className="flex-1 border border-[#24322a] py-2.5 rounded-full font-semibold">Edit</button><button onClick={()=>remove(item._id)} className="px-5 border border-[#c9aaa1] text-[#8e3525] py-2.5 rounded-full font-semibold">Delete</button></div></div>
      </article>)}</div>}
  </main></div>
}
export default AdminMenu;
