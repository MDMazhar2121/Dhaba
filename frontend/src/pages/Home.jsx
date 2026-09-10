import { Link } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <PublicNavbar />

            {/* Hero Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                                Hot • Spicy • Slow-Cooked Perfection
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-5">
                                Experience the
                                <span className="text-orange-600"> Royal </span>
                                Biryani
                            </h1>

                            <p className="text-gray-600 text-lg mt-5 max-w-xl mx-auto lg:mx-0">
                                Slow-cooked to perfection with rich aromas and authentic flavours in every bite.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                                <Link
                                    to="/menu"
                                    className="bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                                >
                                    View Our Menu
                                </Link>


                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-lg">
                                <img
                                    src="/biryani.jpg"
                                    alt="Delicious biryani"
                                    className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <div className="text-center">
                        <p className="text-orange-600 font-semibold">WHY CHOOSE US?</p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                            Taste You Can Trust
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Rich flavours, fresh ingredients, and a hassle-free way to order your favourites.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {/* Card 1 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                🍗
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Flavour You'll Remember
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Every dish is crafted with care, packed with flavour in every bite.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                🌿
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Fresh Ingredients
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Only the freshest, finest ingredients go into every meal we serve.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                ❤️
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Made With Heart
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Every plate is prepared with genuine care to leave you satisfied.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-orange-600">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold">Feeling Hungry?</h2>

                    <p className="mt-3 text-orange-50">
                        Browse our menu and pick something delicious to enjoy.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block mt-7 bg-white text-orange-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Browse Menu
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-gray-600 text-sm">
                            © 2026 BiryaniKing. All rights reserved.
                        </p>

                        <p className="text-gray-500 text-sm">
                            Taste that stays with you. 🍗
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
