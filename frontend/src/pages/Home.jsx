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
                                Hot • Spicy • Straight From The Handi
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-5">
                                Har Dawat Mein
                                <span className="text-orange-600"> Shahi </span>
                                Biryani
                            </h1>

                            <p className="text-gray-600 text-lg mt-5 max-w-xl mx-auto lg:mx-0">
                                Dum pe pakaya hua, mehek se bhara har niwala — aapke ghar tak.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                                <Link
                                    to="/menu"
                                    className="bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                                >
                                    Explore Menu
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
                        <p className="text-orange-600 font-semibold">HUMEIN KYU CHUNEIN?</p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                            Swaad Bhi, Vishwaas Bhi
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Behtareen zayka, shuddh saamagri, aur order karna bilkul aasaan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {/* Card 1 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                🍗
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Zaayka Jo Yaad Rahe
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Har dish pyaar se banayi gayi, har niwale mein bharpoor swaad.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                🌿
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Shuddh Saamagri
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Taaza aur badhiya saamagri se hi asli zayka aata hai.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-7 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-50 rounded-full text-3xl">
                                ❤️
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Dil Se Banaya Gaya
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Har thali mein mehnat aur apnapan dono shaamil hai.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-orange-600">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold">Bhookh Lag Rahi Hai?</h2>

                    <p className="mt-3 text-orange-50">
                        Hamara menu dekhein aur kuch lazzat-daar chunein.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block mt-7 bg-white text-orange-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Explore Menu
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
                    
                </div>
            </footer>
        </div>
    );
}

export default Home;