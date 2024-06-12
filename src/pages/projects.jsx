function Projects() {
  const projects = [
    {
      id: 1,
      title: "Alef menu | ألـــف منيو",
      details:
        "Sass project (07/2023 - Present) - My role was to build the landing page with Next.js for the SEO, Performance, and social media sharing, the e-menu, and control panels, and wrap things up from the front end part.",
      tags: [
        "React",
        "vite",
        "Firebase",
        "Tailwind CSS",
        "Fastapi",
        "NodeJS",
        "Next.js",
      ],
      btns: [
        {
          href: "https://github.com/Elshater6498/juicy-restaurant",
          title: "Github",
          icon: <i class="bx bxl-github"></i>,
        },
        {
          href: "https://restaurant.alefmenu.com/",
          title: "Preview",
          icon: <i class="bx bx-exit"></i>,
        },
      ],
    },
    {
      id: 2,
      title: "Safary landing page",
      details:
        "My role was to build the landing page with React.js for the SEO, Performance, and social media sharing, and control panels, and wrap things up from the front end part.",
      tags: ["React", "vite", "Tailwind CSS", "Fastapi"],
      btns: [
        {
          href: "https://github.com/Elshater6498/Safery",
          title: "Github",
          icon: <i class="bx bxl-github"></i>,
        },
        {
          href: "https://safery.vercel.app/",
          title: "Preview",
          icon: <i class="bx bx-exit"></i>,
        },
      ],
    },
    {
      id: 3,
      title: "Movies website",
      details:
        "My role was to build the landing page The site is about adding a series of films and watching them, and custom films can be added to the list of favorite films.",
      tags: ["Html", "Tailwind CSS", "Java Scrip"],
      btns: [
        {
          href: "https://github.com/Elshater6498/movie-tailwind",
          title: "Github",
          icon: <i class="bx bxl-github"></i>,
        },
        {
          href: "https://movie-tailwind-topaz.vercel.app/",
          title: "Preview",
          icon: <i class="bx bx-exit"></i>,
        },
      ],
    },
  ];
  return (
    <section className="min-h-[calc(100vh-21.7px)] flex items-center justify-center gap-10 flex-wrap px-2 py-20 text-body-color">
      {projects.map((item) => (
        <div
          className="bg-[#333] rounded-full p-12 w-[350px] h-[350px] overflow-hidden"
          key={item.id}
        >
          <div className="flex flex-col justify-between items-center gap-2 h-full">
            <div className="flex flex-col items-center text-center">
              <h4 className="mb-2 text-2xl border-b whitespace-nowrap pb-2 px-4">
                {item.title}
              </h4>
              <p className="text-sm">{item.details}</p>
            </div>
            <div className="flex border-t pt-2 w-full justify-center flex-wrap">
              {item.tags.map((tag, i) => (
                <span key={i} className="p-1 m-1 border rounded-md text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              {item.btns.map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  target="_blank"
                  className=""
                  title={btn.title}
                >
                  {btn.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
