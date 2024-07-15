const Projects = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:bg-gray-200 transition-all duration-300"> {/* Added hover background change */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Project One</h2>
            <p className="text-gray-700">A brief description of the project. This project was built using React and Node.js and features a responsive design and dynamic content.</p>
          </div>
        </div>
        <div className="group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:bg-gray-200 transition-all duration-300"> {/* Added hover background change */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Project Two</h2>
            <p className="text-gray-700">A brief description of the project. This project was built using Next.js and Tailwind CSS, showcasing modern design patterns and responsive layouts.</p>
          </div>
        </div>
        <div className="group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:bg-gray-200 transition-all duration-300"> {/* Added hover background change */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Project Three</h2>
            <p className="text-gray-700">A brief description of the project. This project demonstrates the use of APIs and state management in React applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
