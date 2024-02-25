
function Home() {
  return (
    <main className="overflow-hidden">
      <section
        className="h-[calc(100vh-21.7px)] flex items-center justify-center"
        id="home"
      >
        <div className="">
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="">Hi, I am</p>
            <h1 className="text-4xl">Mohamed Elshater</h1>
            <h3 className="text-first-color">Front end Developer</h3>
            {/* CV button */}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17hQnQsdriIDEhk3YA4RcG4DUv0MzKNEw/view?usp=drive_link"
              className=" text-body-color cursor-pointer bg-button-color py-5 px-8 transition duration-200 hover:bg-button-color-alt "
            >
              Download CV
            </a>
            {/* social media */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Elshater6498"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mostafa-elshater-4727111a9/"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
