import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import { getMenuItems } from "../services/menuService";

function MenuDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMenuItems()
      .then((data) => {
        const found = (data.menuItems || []).find((entry) => entry._id === id);
        if (!found) setError("This dish could not be found.");
        else setItem(found);
      })
      .catch((err) => setError(err.response?.data?.message || "Could not load this dish."));
  }, [id]);

  if (error) return <div className="min-h-screen bg-[#f5f7f3]"><PublicNavbar /><div className="max-w-4xl mx-auto p-10 text-center"><p className="text-[#8e3525]">{error}</p><Link to="/menu" className="inline-block mt-6 underline">Back to menu</Link></div></div>;
  if (!item) return <div className="min-h-screen bg-[#f5f7f3]"><PublicNavbar /><div className="py-24 text-center text-[#756b60]">Preparing the dish…</div></div>;

  return (
    <div className="min-h-screen bg-[#f5f7f3] text-[#24322a]">
      <PublicNavbar />
      <main className="max-w-6xl mx-auto px-5 lg:px-8 py-10 sm:py-16">
        <Link to="/menu" className="text-sm font-semibold text-[#756b60] hover:text-[#2f6b4f]">← Back to menu</Link>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-8 items-center">
          <div className="rounded-2xl overflow-hidden aspect-square bg-[#ded2c1]">
            {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full grid place-items-center text-8xl">🍛</div>}
          </div>
          <div>
            <p className="text-[#2f6b4f] text-xs uppercase tracking-[.25em] font-bold">{item.category}</p>
            <h1 className="font-serif text-5xl sm:text-6xl leading-none mt-3">{item.name}</h1>
            <div className="flex items-center gap-5 mt-7">
              <span className="text-2xl font-bold">₹{item.price}</span>
              <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full ${item.availability ? "bg-[#dce8d7] text-[#31532e]" : "bg-[#ead7d2] text-[#8e3525]"}`}>
                {item.availability ? "Available today" : "Currently unavailable"}
              </span>
            </div>
            <div className="h-px bg-[#d8cebf] my-8" />
            <p className="text-[#625950] text-lg leading-8">{item.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MenuDetails;
