import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-6">Chief AI-UI Architect</h1>
        <p className="max-w-2xl text-center leading-relaxed">
          Leading expert in AI-driven design, crafting futuristic interfaces and
          seamless user experiences that redefine digital landscapes.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
