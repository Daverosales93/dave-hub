'use client';
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Typewriter } from 'react-simple-typewriter';
import ProjectCard from "@/components/ProjectCard";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isLoading, setIsLoading] = useState(false);
  const toggleLang = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLang(prev => (prev === "en" ? "es" : "en"));
      setIsLoading(false);
    }, 500); // simulate a small delay
  };

  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true
      });
    })();
  }, []);


  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur text-white z-50 shadow">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-dev.png"
                alt="Davehub Logo"
                width={48}
                height={48}
                className="bg-white/10 p-1 rounded-md shadow-md"
              />
              <span className="text-xl font-bold">davehub.dev</span>
            </div>
          </h1>
          <ul className="flex gap-6 text-sm sm:text-base">
            <li><a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a></li>
            <li><a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre mí</a></li>
            <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main
        className="relative min-h-screen pt-16 p-10 text-white"
        style={{
          backgroundImage: "url('/code-bg.gif')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <div className="text-right mt-12 mb-6 flex justify-end items-center gap-4">
            {isLoading && (
              <FaSpinner className="animate-spin text-white text-xl" />
            )}
            <button
              onClick={toggleLang}
              className="bg-white/10 px-4 py-2 rounded-full text-sm text-white hover:bg-white/20 transition"
              disabled={isLoading}
            >
              {lang === "en" ? "Cambiar a Español 🇲🇽" : "Switch to English 🇺🇸"}
            </button>
          </div>
      <h1
        data-aos="fade-down"
        className="text-5xl font-extrabold text-center mb-16 text-white"
      >
        <Typewriter
          key={`typewriter-${lang}`}
          words={
            lang === "en"
              ? ["Hi, welcome to my presentation page"]
              : ["Hola, bienvenidos a mi página de presentación"]
          }
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </h1>
     
        <section id="sobre-mi" data-aos="fade-right" className="max-w-4xl mx-auto mt-20 text-center mb-24">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
            <span key={`section-title-about-${lang}`}>
              👤 {lang === "en" ? "About Me" : "Sobre mí"}
            </span>
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <img
              src="/dave.jpg"
              alt="Foto de Dave"
              className="w-48 h-64 object-cover object-[center_48%] mx-auto mb-6 rounded-xl shadow-2xl ring-4 ring-purple-600 transition-transform duration-500 hover:scale-105"
            />
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              {lang === "en" ? (
                <>
                  I'm <span className="font-semibold text-white">Dave</span>, a full-stack developer in training with a <span className="text-blue-400">deep passion</span> for technology, elegant design, and turning ideas into meaningful experiences.<br />
                  I love to <span className="italic text-blue-300">learn, experiment, and build</span> visually attractive and functional products that make an impact.
                </>
              ) : (
                <>
                  Soy <span className="font-semibold text-white">Dave</span>, desarrollador full stack en formación con una <span className="text-blue-400">pasión inmensa</span> por la tecnología, el diseño elegante y las soluciones que transforman ideas en experiencias útiles.<br />
                  Me encanta <span className="italic text-blue-300">aprender, experimentar y construir</span> productos visualmente atractivos y funcionales que marquen la diferencia.
                </>
              )}
            </p>
          </div>
        </section>

        <section id="logros" data-aos="fade-up" className="max-w-4xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
            <span key={`section-title-achievements-${lang}`}>
              🏆 {lang === "en" ? "Achievements & Certifications" : "Logros y Certificaciones"}
            </span>
          </h2>
          <ul className="space-y-4 text-gray-300 text-left max-w-2xl mx-auto">
            <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:shadow-lg transition">
              ✅ {lang === "en" ? "Full Stack Web Development Certificate - EBAC (2025)" : "Certificado en Desarrollo Web Full Stack - EBAC (2025)"}
            </li>
            <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:shadow-lg transition">
              🧠 {lang === "en" ? "Outstanding participant in Data Science Intro Course - Platzi" : "Participante destacado en curso de Introducción a la Ciencia de Datos - Platzi"}
            </li>
            <li className="bg-white/5 p-4 rounded-lg border border-white/10 hover:shadow-lg transition">
              🚀 {lang === "en" ? "Advanced React Bootcamp with TypeScript - Coderhouse" : "Bootcamp de React Avanzado con TypeScript - Coderhouse"}
            </li>
          </ul>
          <div className="mt-10 mb-16">
            <a
              href="/CV_Dave.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg font-semibold tracking-wide"
            >
              {lang === "en" ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        </section>

        <h2
          data-aos="zoom-in-up"
          className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500"
        >
          <span key={`section-title-featured-${lang}`}>
            💻 {lang === "en" ? "Featured Projects" : "Mis proyectos destacados"}
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm italic" data-aos="fade-up">
          {lang === "en"
            ? "Explore my most important developments, each crafted with dedication."
            : "Explora mis desarrollos más importantes, cada uno hecho con dedicación."}
        </p>
        <section
          id="proyectos"
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8"
        >
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <ProjectCard
              title={lang === "en" ? "Personal Portfolio" : "Portfolio Personal"}
              description={
                lang === "en"
                  ? "A professional website to showcase my projects, built with Next.js and TailwindCSS."
                  : "Sitio web profesional para mostrar mis proyectos, hecho con Next.js y Tailwind."
              }
              link="https://github.com/Daverosales93/my-portfolio"
            />
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <ProjectCard
              title={lang === "en" ? "Ticket Hero" : "Ticket Hero"}
              description={
                lang === "en"
                  ? "Ticket and issue tracking platform designed for operational efficiency and clear traceability."
                  : "Plataforma para gestión de tickets y seguimiento de incidencias en equipos de soporte técnico. Diseñada para eficiencia operativa y trazabilidad clara."
              }
              link="https://github.com/Daverosales93/ticket-hero"
              tech={["Next.js", "TypeScript", "MongoDB"]}
            />
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <ProjectCard
              title={lang === "en" ? "Ticket Hero" : "Ticket Hero"}
              description={
                lang === "en"
                  ? "Ticket and issue tracking platform designed for operational efficiency and clear traceability."
                  : "Plataforma para gestión de tickets y seguimiento de incidencias en equipos de soporte técnico. Diseñada para eficiencia operativa y trazabilidad clara."
              }
              link="https://github.com/Daverosales93/ticket-hero"
              tech={["Next.js", "TypeScript", "MongoDB"]}
            />
          </div>
        </section>

        <section
          id="habilidades"
          data-aos="zoom-in"
          className="max-w-5xl mx-auto mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
            <span key={`section-title-skills-${lang}`}>
              🛠️ {lang === "en" ? "Skills" : "Habilidades"}
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            {lang === "en"
              ? "These are some of the tools and technologies I work with and enjoy building with."
              : "Estas son algunas de las herramientas y tecnologías con las que trabajo y disfruto desarrollar."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {[
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 80 },
              { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
              { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 75 },
              { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 70 },
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
              { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 90 }
            ].map(({ name, icon, level }) => (
              <div key={name} className="flex flex-col items-center relative transform transition-transform duration-300 hover:scale-115 hover:drop-shadow-[0_0_16px_#60a5fa] hover:brightness-125 hover:contrast-125">
                <svg className="w-28 h-28">
                  <circle cx="56" cy="56" r="50" stroke="#1f2937" strokeWidth="6" fill="none" />
                  <circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="#60a5fa"
                    strokeWidth="6"
                    strokeDasharray="314.16"
                    strokeDashoffset={314.16 - (314.16 * level) / 100}
                    fill="none"
                    transform="rotate(-90 56 56)"
                    style={{ transition: "stroke-dashoffset 1s ease-out" }}
                  />
                  <image href={icon} x="28" y="28" width="56" height="56" />
                  <text x="56" y="90" textAnchor="middle" fill="#ccc" fontSize="10">{`${level}%`}</text>
                </svg>
                <span className="mt-2 text-gray-300 text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="servicios"
          data-aos="fade-up"
          className="max-w-5xl mx-auto mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <span key={`section-title-services-${lang}`}>
              🚀 {lang === "en" ? "What I can do for you" : "¿Qué puedo hacer por ti?"}
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
            {lang === "en"
              ? "As a full stack developer in training, here are some ways I can add value to your ideas and projects:"
              : "Como desarrollador full stack en formación, estas son algunas formas en las que puedo aportar valor a tus ideas y proyectos:"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">🎨 {lang === "en" ? "Modern Interfaces" : "Interfaces modernas"}</h3>
              <p className="text-gray-300 text-sm">{lang === "en" ? "Design and development of visually attractive and functional interfaces, adapted to modern devices." : "Diseño y desarrollo de interfaces visualmente atractivas y funcionales, adaptadas a dispositivos modernos."}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-2 text-green-400">⚙️ {lang === "en" ? "Process Automation" : "Automatización de procesos"}</h3>
              <p className="text-gray-300 text-sm">{lang === "en" ? "Implementation of efficient solutions that save time and resources by automating repetitive tasks." : "Implementación de soluciones eficientes que ahorran tiempo y recursos al automatizar tareas repetitivas."}</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:shadow-xl transition text-left">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">📊 {lang === "en" ? "Interactive Dashboards" : "Dashboards interactivos"}</h3>
              <p className="text-gray-300 text-sm">{lang === "en" ? "Real-time data visualization with intuitive panels accessible from any device." : "Visualización de datos en tiempo real con paneles intuitivos y accesibles desde cualquier dispositivo."}</p>
            </div>
          </div>
        </section>

        <section id="contacto" data-aos="fade-left" className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
            <span key={`section-title-contact-${lang}`}>
              📬 {lang === "en" ? "Contact" : "Contacto"}
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            {lang === "en"
              ? "Would you like to collaborate on an exciting project, share ideas, or simply connect? I'm just one message away!"
              : "¿Te gustaría colaborar en un proyecto emocionante, compartir ideas o simplemente conectar? ¡Estoy a un mensaje de distancia!"}
          </p>
          <a
            href="mailto:davealvarrez93@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {lang === "en" ? "Send me an email" : "Envíame un correo"}
          </a>
        </section>

        <footer className="mt-20 py-8 text-center text-gray-500 text-sm border-t border-gray-700">
          © 2025 davehub.dev ·{" "}
          <a href="https://github.com/Daverosales93" target="_blank" className="text-blue-400 hover:underline">
            GitHub
          </a>{" "}
          ·{" "}
          <a href="https://www.linkedin.com/in/dave-rossales" target="_blank" className="text-blue-400 hover:underline">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href="mailto:davealvarrez93@gmail.com" className="text-blue-400 hover:underline">
            {lang === "en" ? "Contact" : "Contacto"}
          </a>
        </footer>
        </div>
      </main>
    </>
  );
}