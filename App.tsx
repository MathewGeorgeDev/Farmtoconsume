import React from 'react';
import { Sprout, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleConsumerClick = () => {
    window.location.href = 'https://bolt.new/~/sb1-a79i5g7u';
  };

  const handleFarmerClick = () => {
    window.location.href = 'https://lighthearted-cuchufli-be9e09.netlify.app/';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=2940")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Fresh From Farm
                <span className="block text-yellow-400">To Your Table</span>
              </h1>
              <p className="text-2xl text-green-50 mb-8">
                Join our community of local farmers and conscious consumers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Choice Cards Section */}
      <div className="bg-gradient-to-b from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto -mt-32 relative z-10">
            {/* Farmer Card */}
            <div 
              onClick={handleFarmerClick}
              className="flex-1 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=2669" 
                  alt="Farmer in field" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Sprout className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-semibold text-green-800 mb-4">I'm a Farmer</h2>
                <p className="text-green-600 text-lg mb-6">
                  Share your harvest with local consumers and grow your business
                </p>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-full hover:from-green-700 hover:to-green-600 transition-colors duration-300 text-lg font-medium">
                  Start Selling
                </button>
              </div>
            </div>

            {/* Consumer Card */}
            <div 
              onClick={handleConsumerClick}
              className="flex-1 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2574" 
                  alt="Fresh produce" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <ShoppingCart className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-semibold text-green-800 mb-4">I'm a Consumer</h2>
                <p className="text-green-600 text-lg mb-6">
                  Access fresh, local produce directly from farmers near you
                </p>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-full hover:from-green-700 hover:to-green-600 transition-colors duration-300 text-lg font-medium">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?auto=format&fit=crop&q=80&w=2940" 
                  alt="Fresh produce" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Fresh Products</h3>
              <p className="text-green-600 text-lg">Straight from local farms to your table, ensuring maximum freshness</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&q=80&w=2942" 
                  alt="Fair trade" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Fair Prices</h3>
              <p className="text-green-600 text-lg">Support local farmers with fair trade practices and competitive prices</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594761051656-97815b52d9fb?auto=format&fit=crop&q=80&w=2940" 
                  alt="Community" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Community Driven</h3>
              <p className="text-green-600 text-lg">Building sustainable local food systems that benefit everyone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2940")',
        }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking to expand your market or a consumer seeking fresh, local produce, we're here to connect you. <br /> In case of queries contact our community through +918281900468.
          </p>
          <div className="flex gap-6 justify-center">
            <button onClick={handleFarmerClick} className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
              Join as Farmer
            </button>
            <button onClick={handleConsumerClick} className="bg-white text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Join as Consumer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;