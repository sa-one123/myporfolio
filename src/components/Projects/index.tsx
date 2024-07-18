"use client";
import Image from "next/image";
const Projects: React.FC = () => {
    return (
        <section data-testid="projects" id="projects" className="mb-10 flex flex-col items-center justify-center md:mb-0 md:h-screen">
        <h2 className="font-mono text-2xl text-orange lg:text-4xl">Projects</h2>
        <span className="mb-10 h-1 w-10 bg-orange block"></span> {/* Changed to block to display correctly */}
        <div className="mb-10 flex w-full flex-col md:flex-row items-center justify-center">
          <section className="w-full p-4 md:w-1/2 lg:w-1/3">
            <article data-testid="card" className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl">
              <a href="#" aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image alt="project image alt text" width={400} height={400} src="/project.png" loading="eager" decoding="async" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl text-orange lg:text-2xl">Project title</h3>
                  <p className="text-black text-sm">Project description</p> {/* Changed text-s to text-sm for Tailwind compatibility */}
                  <div className="mt-2 flex w-2/3 flex-row flex-wrap justify-between">
                    <span className="inline-block rounded py-2 text-xs text-black lg:py-1">#React</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#CSS</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#Typescript</span>
                  </div>
                </div>
              </a>
            </article>
          </section>
          <section className="w-full p-4 md:w-1/2 lg:w-1/3">
            <article data-testid="card" className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl">
              <a href="#" aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image alt="project image alt text" width={400} height={400} src="/project.png" loading="eager" decoding="async" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl text-orange lg:text-2xl">Project title</h3>
                  <p className="text-black text-sm">Project description</p> {/* Changed text-s to text-sm for Tailwind compatibility */}
                  <div className="mt-2 flex w-2/3 flex-row flex-wrap justify-between">
                    <span className="inline-block rounded py-2 text-xs text-black lg:py-1">#React</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#CSS</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#Typescript</span>
                  </div>
                </div>
              </a>
            </article>
          </section>
          <section className="w-full p-4 md:w-1/2 lg:w-1/3">
            <article data-testid="card" className="rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl">
              <a href="#" aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image alt="project image alt text" width={400} height={400} src="/project.png" loading="eager" decoding="async" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl text-orange lg:text-2xl">Project title</h3>
                  <p className="text-black text-sm">Project description</p> {/* Changed text-s to text-sm for Tailwind compatibility */}
                  <div className="mt-2 flex w-2/3 flex-row flex-wrap justify-between">
                    <span className="inline-block rounded py-2 text-xs text-black lg:py-1">#React</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#CSS</span><span className="inline-block rounded py-2 text-xs text-black lg:py-1">#Typescript</span>
                  </div>
                </div>
              </a>
            </article>
          </section>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex flex-row text-black hover:text-orange dark:text-white dark:hover:text-orange" aria-label="link to repository">
          View full private projects archive
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1 h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </a>
      </section>
    );
};

export default Projects;
