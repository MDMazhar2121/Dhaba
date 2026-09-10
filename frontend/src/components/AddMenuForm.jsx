import { useState } from "react";
import { createMenuItem } from "../services/menuService";

function AddMenuForm({ onItemAdded, onCancel }) {
 const [form,setForm]=useState({name:"",description:"",category:"Main Course",price:"",availability:true});
 const [image,setImage]=useState(null),[loading,setLoading]=useState(false),[error,setError]=useState("");
 const update=(k,v)=>setForm({...form,[k]:v});
 const submit=async e=>{e.preventDefault();setLoading(true);setError("");try{const fd=new FormData();Object.entries(form).forEach(([k,v])=>fd.append(k,v));if(image)fd.append("image",image);const d=await createMenuItem(fd);onItemAdded(d.menuItem)}catch(err){setError(err.response?.data?.message||"Could not create dish.")}finally{setLoading(false)}};
 return <div className="bg-[#254c3a] text-white rounded-[2rem] p-7 sm:p-9"><div className="flex justify-between"><div><p className="text-[#9bc7aa] text-xs uppercase tracking-[.25em] font-bold">New recipe</p><h2 className="font-serif text-3xl mt-2">Add a dish</h2></div><button onClick={onCancel} className="text-2xl text-[#9f9489]">×</button></div>
 <form onSubmit={submit} className="grid md:grid-cols-2 gap-5 mt-8">{[
  ["name","Dish name","Chicken Biryani","text"],["price","Price","299","number"]
 ].map(([k,l,p,t])=><label key={k}><span className="text-xs uppercase tracking-widest text-[#b9afa5]">{l}</span><input required type={t} value={form[k]} onChange={e=>update(k,e.target.value)} placeholder={p} className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-[#9bc7aa]"/></label>)}
 <label><span className="text-xs uppercase tracking-widest text-[#b9afa5]">Category</span><select value={form.category} onChange={e=>update("category",e.target.value)} className="mt-2 w-full bg-[#302924] border border-white/15 rounded-xl px-4 py-3 outline-none">{["Starter","Main Course","Dessert","Beverage"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label><span className="text-xs uppercase tracking-widest text-[#b9afa5]">Image</span><input type="file" accept="image/*" onChange={e=>setImage(e.target.files[0]||null)} className="mt-2 w-full text-sm"/></label>
 <label className="md:col-span-2"><span className="text-xs uppercase tracking-widest text-[#b9afa5]">Description</span><textarea required rows="4" value={form.description} onChange={e=>update("description",e.target.value)} className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-[#9bc7aa] resize-none"/></label>
 <label className="md:col-span-2 flex gap-3 items-center text-sm"><input type="checkbox" checked={form.availability} onChange={e=>update("availability",e.target.checked)} className="accent-[#d7a642]"/> Available on the menu</label>
 {error&&<div className="md:col-span-2 bg-[#7d352b] p-3 rounded-xl text-sm">{error}</div>}
 <div className="md:col-span-2 flex gap-3"><button disabled={loading} className="bg-[#d7a642] text-[#254c3a] px-6 py-3 rounded-full font-bold">{loading?"Saving…":"Publish dish"}</button><button type="button" onClick={onCancel} className="border border-white/20 px-6 py-3 rounded-full font-semibold">Cancel</button></div>
 </form></div>
}
export default AddMenuForm;
