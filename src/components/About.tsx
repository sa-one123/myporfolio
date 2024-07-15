const About = () => {
    return (
      <section className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img src="/myProfile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full object-cover border border-gray-200 shadow-md" /> {/* Added border and shadow */}
          <div className="text-left md:text-xl">
            <p className="text-gray-700 mb-4 leading-relaxed">
              I am a passionate software developer with experience in creating dynamic and responsive web applications. I specialize in JavaScript, React, and Node.js, and I enjoy learning new technologies and improving my skills. My goal is to build applications that not only meet user needs but also provide an engaging and seamless user experience.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Php</li>
              <li>Laravel</li>
              <li>Vue</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  