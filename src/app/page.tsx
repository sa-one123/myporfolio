import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
