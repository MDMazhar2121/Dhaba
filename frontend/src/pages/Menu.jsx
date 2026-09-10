import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import { getMenuItems } from "../services/menuService";

function Menu() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = ["All", "Starter", "Main Course", "Dessert", "Beverage"];

  useEffect(() => {
    let ignore = false;
    getMenuItems()
      .then((data) => { if (!ignore) setItems(data.menuItems || []); })
      .catch((err) => { if (!ignore) setError(err.response?.data?.message || "Could not load the menu."); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, []);

  const visible = useMemo(
    () => category === "All" ? items : items.filter((item) => item.category === category),
    [items, category]
  );

  return (
    <div className="min-h-screen bg-[#f5f7f3] text-[#24322a]">
      <PublicNavbar />
      <main className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-10 items-end mb-12">
          <div>
            <p className="text-[#2f6b4f] text-xs font-bold tracking-[.3em] uppercase">OUR MENU</p>
            <h1 className="font-serif text-5xl sm:text-6xl leading-none mt-3">Choose what you like.</h1>
          </div>
          <div className="border-l border-[#cfc4b4] pl-6 max-w-xl">
            <p className="text-[#756b60] text-lg leading-8">Explore our dishes by category. Select a dish to see its details.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-y border-[#d8cebf] py-4 mb-10">
          {categories.map((name) => (
            <button key={name} onClick={() => setCategory(name)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${category === name ? "bg-[#2f6b4f] text-white" : "bg-transparent text-[#6e645a] hover:bg-[#e9e0d3]"}`}>
              {name}
            </button>
          ))}
        </div>

        {error && <div className="mb-8 bg-[#f8dfd8] text-[#8e3525] px-5 py-4 rounded-2xl">{error}</div>}
        {loading ? (
          <div className="py-24 text-center text-[#756b60]">Setting the table…</div>
        ) : visible.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-[#cfc4b4] rounded-3xl">
            <div className="font-serif text-3xl">Nothing on this page yet.</div>
            <p className="text-[#756b60] mt-2">Try another category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-10">
            {visible.map((item, index) => (
              <article key={item._id} className="group card-hover">
                <Link to={`/menu/${item._id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#ddd0bd]">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-7xl">🍛</div>
                    )}
                    <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full ${item.availability ? "bg-[#f5f7f3] text-[#2e542e]" : "bg-[#2f6b4f] text-white"}`}>
                      {item.availability ? "Available" : "Off menu"}
                    </span>
                    <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#f5f7f3] grid place-items-center text-lg opacity-0 group-hover:opacity-100 transition">↗</span>
                  </div>
                </Link>
                <div className="pt-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[.2em] font-bold text-[#2f6b4f]">{item.category}</p>
                      <h2 className="font-serif text-2xl mt-1">{item.name}</h2>
                    </div>
                    <div className="font-bold text-lg">₹{item.price}</div>
                  </div>
                  <p className="text-[#756b60] text-sm leading-6 mt-2 line-clamp-2">{item.description}</p>
                  <div className="mt-4 text-sm font-semibold border-b border-[#b9ad9d] w-fit pb-1">View dish →</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
export default Menu;
