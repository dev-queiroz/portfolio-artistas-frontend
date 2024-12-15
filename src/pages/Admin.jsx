import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [arts, setArts] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [editingArt, setEditingArt] = useState(null);

  // Função para verificar a senha
  const handleLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchArts();
    } else {
      alert("Senha incorreta");
    }
  };

  // Buscar todas as artes
  const fetchArts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/arts`
      );
      const data = await response.json();
      setArts(data);
    } catch (error) {
      console.error("Erro ao buscar artes:", error);
    }
  };

  // Manipular mudanças no formulário
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  // Adicionar ou atualizar arte
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      const url = editingArt
        ? `${import.meta.env.VITE_BACKEND_URL}/api/arts/${editingArt.id}`
        : `${import.meta.env.VITE_BACKEND_URL}/api/arts`;

      const method = editingArt ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) throw new Error("Erro ao salvar arte");

      fetchArts();
      setForm({ title: "", description: "", image: null });
      setEditingArt(null);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Deletar arte
  const handleDelete = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/arts/${id}`, {
        method: "DELETE",
      });
      fetchArts();
    } catch (error) {
      console.error("Erro ao deletar arte:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-800 to-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-10">
        {!isAuthenticated ? (
          <div className="bg-purple-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="p-2 rounded text-black w-64 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

            <form
              onSubmit={handleSubmit}
              className="bg-purple-900 p-6 rounded-lg shadow-lg mb-10"
            >
              <h3 className="text-2xl mb-4">
                {editingArt ? "Edit Art" : "Add New Art"}
              </h3>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="p-2 rounded text-black w-full mb-4"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="p-2 rounded text-black w-full mb-4"
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="mb-4"
              />
              <button
                type="submit"
                className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
              >
                {editingArt ? "Update Art" : "Add Art"}
              </button>
            </form>

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
                  <div className="flex mt-4 space-x-2">
                    <button
                      onClick={() => {
                        setEditingArt(art);
                        setForm({
                          title: art.title,
                          description: art.description,
                          image: null,
                        });
                      }}
                      className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(art.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
