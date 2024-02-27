import React from "react";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Recipe Maker",
      details:
        "A website provide a wide range of recipes categorized by difficulty and time, Just put the ingrediemts that you have and he will suggest different recipes you can choose from.",
      tags: ["#React", "#Redux", "#Firebase", "#Bootstrap"],
      btns: [
        {
          href: "https://github.com/AmanySirajAl-Din/Wasfity-RecipeMaker",
          title: "Github",
          icon: <i class="bx bxl-github"></i>,
        },
        { href: "/#", title: "Preview", icon: <i class="bx bx-exit"></i> },
      ],
    },
    {
      id: 2,
      title: "AXW Movies",
      details:
        "A website provide a wide range of movies categorized by release date, IMDB rating, and movie type. Also provide watching online and download.",
      tags: ["#React", "#Redux", "#Movies Api", "#Native CSS"],
      btns: [
        {
          href: "https://github.com/yousefomar724/movies",
          title: "Github",
          icon: <i class="bx bxl-github"></i>,
        },
        { href: "/#", title: "Preview", icon: <i class="bx bx-exit"></i> },
      ],
    },
  ];

  return (
    <section className="min-h-[calc(100vh-21.7px)] flex items-center justify-center gap-10 flex-wrap px-2 py-20">
      {projects.map((item) => (
        <div
          className="bg-[#333] rounded-full p-12 w-[350px] h-[350px] overflow-hidden"
          key={item.id}
        >
          <div className="flex flex-col justify-between items-center gap-2 h-full">
            <div className="flex flex-col items-center text-center">
              <h4 className="mb-2 text-2xl">{item.title}</h4>
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
