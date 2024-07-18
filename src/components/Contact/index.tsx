"use client";
const Contact = () => {
  return (
    <section
      data-testid="contact"
      id="contact"
      className="flex flex-col flex-wrap items-center justify-center gap-8 text-black dark:text-white lg:mb-0 lg:h-screen"
    >
      <button
        name="Contact"
        className="rounded-xl text-center transition focus:ring-2 ring-offset-2 ring-orange px-6 py-3 bg-black text-white hover:bg-orange border-2 border-transparent"
      >
        Say hello!
      </button>
      <hr className="w-1/2" />
      <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:gap-20">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 hover:text-orange dark:hover:text-orange md:h-12"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.865-.012-1.699-2.782.605-3.37-1.337-3.37-1.337-.454-1.153-1.11-1.46-1.11-1.46-.908-.621.069-.609.069-.609 1.005.07 1.532 1.03 1.532 1.03.893 1.527 2.345 1.086 2.915.828.092-.645.35-1.085.635-1.335-2.22-.253-4.555-1.11-4.555-4.94 0-1.09.39-1.984 1.032-2.68-.103-.255-.448-1.27.098-2.647 0 0 .84-.268 2.75 1.025.8-.223 1.654-.334 2.504-.338.848.004 1.705.115 2.504.338 1.91-1.293 2.748-1.025 2.748-1.025.548 1.377.202 2.392.1 2.647.64.696 1.03 1.59 1.03 2.68 0 3.838-2.339 4.684-4.567 4.933.36.308.678.916.678 1.846 0 1.332-.012 2.408-.012 2.737 0 .267.18.578.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
        <a
          href="mailto:savanmukati739@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 hover:text-orange dark:hover:text-orange md:h-12"
            fill="currentColor"
          >
            <path d="M22 4H2c-.553 0-1 .448-1 1v14c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V5c0-.552-.447-1-1-1zm-1 2.377l-7 6.174-7-6.174H21zM2 18V8.505l7 6.174 7-6.174V18H2z" />
          </svg>
        </a>
        
      </div>
      
    </section>
  );
};

export default Contact;
