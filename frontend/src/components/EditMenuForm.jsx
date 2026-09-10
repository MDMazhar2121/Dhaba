import { useState } from "react";
import { updateMenuItem } from "../services/menuService";

function EditMenuForm({item,onItemUpdated,onCancel}){
 const [form,setForm]=useState({name:item.name,description:item.description,category:item.category,price:item.price,availability:item.availability});
 const [image,setImage]=useState(null),[preview,setPreview]=useState(item.image||""),[loading,setLoading]=useState(false),[error,setError]=useState("");
 const update=(k,v)=>setForm({...form,[k]:v});
 const submit=async e=>{e.preventDefault();setLoading(true);setError("");try{const fd=new FormData();Object.entries(form).forEach(([k,v])=>fd.append(k,v));if(image)fd.append("image",image);const d=await updateMenuItem(item._id,fd);onItemUpdated(d.menuItem)}catch(err){setError(err.response?.data?.message||"Could not update dish.")}finally{setLoading(false)}};
 return <div className="bg-[#e8dfd1] border border-[#cfc4b4] rounded-[2rem] p-7 sm:p-9"><div className="flex justify-between"><div><p className="text-[#2f6b4f] text-xs uppercase tracking-[.25em] font-bold">Edit recipe</p><h2 className="font-serif text-3xl mt-2">Refine the dish</h2></div><button onClick={onCancel} className="text-2xl text-[#756b60]">×</button></div>
 <form onSubmit={submit} className="grid md:grid-cols-2 gap-5 mt-8">{[
  ["name","Dish name"],["price","Price"]
 ].map(([k,l])=><label key={k}><span className="text-xs uppercase tracking-widest font-bold">{l}</span><input required type={k==="price"?"number":"text"} value={form[k]} onChange={e=>update(k,e.target.value)} className="mt-2 w-full bg-[#fbf8f1] border border-[#cfc4b4] rounded-xl px-4 py-3 outline-none focus:border-[#2f6b4f]"/></label>)}
 <label><span className="text-xs uppercase tracking-widest font-bold">Category</span><select value={form.category} onChange={e=>update("category",e.target.value)} className="mt-2 w-full bg-[#fbf8f1] border border-[#cfc4b4] rounded-xl px-4 py-3">{["Starter","Main Course","Dessert","Beverage"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label><span className="text-xs uppercase tracking-widest font-bold">New image</span><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0];if(f){setImage(f);setPreview(URL.createObjectURL(f))}}} className="mt-2 w-full text-sm"/></label>
 {preview&&<img src={preview} alt="Preview" className="md:col-span-2 w-36 h-24 rounded-xl object-cover"/>}
 <label className="md:col-span-2"><span className="text-xs uppercase tracking-widest font-bold">Description</span><textarea required rows="4" value={form.description} onChange={e=>update("description",e.target.value)} className="mt-2 w-full bg-[#fbf8f1] border border-[#cfc4b4] rounded-xl px-4 py-3 outline-none focus:border-[#2f6b4f] resize-none"/></label>
 <label className="md:col-span-2 flex gap-3 items-center text-sm"><input type="checkbox" checked={form.availability} onChange={e=>update("availability",e.target.checked)} className="accent-[#2f6b4f]"/> Available on the menu</label>
 {error&&<div className="md:col-span-2 bg-[#ead7d2] text-[#8e3525] p-3 rounded-xl text-sm">{error}</div>}
 <div className="md:col-span-2 flex gap-3"><button disabled={loading} className="bg-[#254c3a] text-white px-6 py-3 rounded-full font-bold">{loading?"Saving…":"Save changes"}</button><button type="button" onClick={onCancel} className="border border-[#24322a] px-6 py-3 rounded-full font-semibold">Cancel</button></div>
 </form></div>
}
export default EditMenuForm;
