import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Local Developer</h2>
          <p className="mb-4">
            Developed custom solutions for local businesses, enhancing digital
            presence and user experience.
          </p>

          <h2 className="text-2xl font-semibold mb-2">UI UX Expert</h2>
          <p className="mb-4">
            Specialized in creating intuitive interfaces for web and mobile
            applications.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Senior Front-End Developer
          </h2>
          <p>
            Led teams in developing scalable front-end applications with
            cutting-edge technologies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
