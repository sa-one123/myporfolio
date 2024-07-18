"use client"
import content from '../../content.json'
const About = () => {
  const { aboutTextContent,aboutMe } = content
    return (
        <section data-testid="about" id="about" className="mb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:h-screen">
            <div className="mb-10 lg:mb-0 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
                <h2 className="font-mono text-2xl text-orange lg:text-4xl">{aboutMe.title}</h2>
                <span className="mb-6 ml-2 h-1 w-10 bg-orange block"></span>
                <p className="text-justify text-black dark:text-white mt-4 max-w-lg">
                    {aboutMe.content}
                </p>
            </div>
            <div className="lg:w-1/2 lg:h-full flex flex-col items-center justify-start">
              { aboutTextContent.map((item) => (
                <div className="mb-8 lg:mb-10 max-w-lg" key={item.title}>
                    <h3 className="font-mono text-xl text-orange lg:text-2xl">{item.title}</h3>
                    <p className="text-justify text-black dark:text-white mt-4">
                      {item.content}
                    </p>
                </div>
              )) }  
            </div>
        </section>
    );
};

export default About;
