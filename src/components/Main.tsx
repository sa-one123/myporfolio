// components/Main.tsx
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const Main: React.FC = () => {
  return (
    <main>
      <section
        data-testid="hero"
        className="flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row"
      >
        <div className="mb-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
          <div>
            <h1 className="mb-10 font-mono text-3xl text-black dark:text-white lg:text-5xl">
              Hi! My name is <span className="text-orange">Sawan Mukati</span> and I am a web developer based in Indore.
            </h1>
          </div>
          <div className="mb-10">
            <Button name="learn more">Learn more</Button>
          </div>
        </div>
        <div data-testid="hero-img" className="mb-10 flex w-1/2 items-center justify-center">
          <Image alt="Coding girl" width={600} height={600} src="/boy.webp" loading="eager" decoding="async" />
        </div>
      </section>

      <section data-testid="about" id="about" className="mb-10 flex flex-col items-center justify-center lg:mb-0 lg:h-screen lg:flex-row">
        <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
          <h2 className="font-mono text-2xl text-orange lg:text-4xl">About me</h2>
          <span className="mb-6 ml-2 h-1 w-10 bg-orange block"></span> {/* Changed to block to display correctly */}
        </div>
        <div className="w-full text-justify text-black dark:text-white lg:w-1/2">
          <p className="mb-2">
            Dedicated and skilled software developer with 3 years of experience specializing in PHP, Laravel, Vue.js,React,Next,Type Script and JavaScript. Known for being a quick learner and enthusiastic about acquiring new knowledge. Demonstrates a strong willingness to explore new technologies and adapt to various working environments. Eager to leverage expertise in Laravel and Vue.js development to contribute effectively to a dynamic software development team.
          </p>
        </div>
      </section>

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

      <section data-testid="contact" id="contact" className="flex flex-col flex-wrap items-center justify-center gap-8 text-black dark:text-white lg:mb-0 lg:h-screen">
        <button name="Contact" className="rounded-xl text-center transition focus:ring-2 ring-offset-2 ring-orange px-6 py-3 bg-black text-white hover:bg-orange border-2 border-transparent">Say hello!
        </button>
        <hr className="w-1/2" />
        <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:gap-20">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="github">
            <svg viewBox="0 0 24 24" className="h-8 hover:text-orange dark:hover:text-orange md:h-12" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.865-.012-1.699-2.782.605-3.37-1.337-3.37-1.337-.454-1.153-1.11-1.46-1.11-1.46-.908-.621.069-.609.069-.609 1.005.07 1.532 1.03 1.532 1.03.893 1.527 2.345 1.086 2.915.828.092-.645.35-1.085.635-1.335-2.22-.253-4.555-1.11-4.555-4.94 0-1.09.39-1.984 1.032-2.68-.103-.255-.448-1.27.098-2.647 0 0 .84-.268 2.75 1.025.8-.223 1.654-.334 2.504-.338.848.004 1.705.115 2.504.338 1.91-1.293 2.748-1.025 2.748-1.025.548 1.377.202 2.392.1 2.647.64.696 1.03 1.59 1.03 2.68 0 3.838-2.339 4.684-4.567 4.933.36.308.678.916.678 1.846 0 1.332-.012 2.408-.012 2.737 0 .267.18.578.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="mailto:savanmukati739@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="email">
            <svg viewBox="0 0 24 24" className="h-8 hover:text-orange dark:hover:text-orange md:h-12" fill="currentColor">
              <path d="M22 4H2c-.553 0-1 .448-1 1v14c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V5c0-.552-.447-1-1-1zm-1 2.377l-7 6.174-7-6.174H21zM2 18V8.505l7 6.174 7-6.174V18H2z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
