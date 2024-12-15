import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_BACKEND}/api/arts`)
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error("Error fetching arts:", error));
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-800 to-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arts.map((art) => (
            <div
              key={art.id}
              className="bg-purple-900 p-4 rounded-lg shadow-lg"
            >
              <img
                src={art.image_url}
                alt={art.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold">{art.title}</h2>
              <p className="mt-2">{art.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
