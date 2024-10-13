import { BsGithub } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";

export const projects = [
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
        icon: <BsGithub />,
      },
      {
        href: "https://restaurant.alefmenu.com/",
        title: "Preview",
        icon: <IoMdExit />,
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
        icon: <BsGithub />,
      },
      {
        href: "https://safery.vercel.app/",
        title: "Preview",
        icon: <IoMdExit />,
      },
    ],
  },
  {
    id: 4,
    title: "jouf Media website",
    details:
      "My role was to build the landing page, and the control panel, The site is about adding a series of courses and news of eljouf area in Saudi Arabia , and publish the activities of the area.",
    tags: ["reactjs", "Tailwind CSS", "type Scrip", "Fastapi", "react query"],
    btns: [
      {
        href: "https://github.com/yousefomar724/jouf-media",
        title: "Github",
        icon: <BsGithub />,
      },
      {
        href: "https://www.jma.sa/",
        title: "Preview",
        icon: <IoMdExit />,
      },
    ],
  },
  {
    id: 5,
    title: "Movies website",
    details:
      "My role was to build the landing page The site is about adding a series of films and watching them, and custom films can be added to the list of favorite films.",
    tags: ["Html", "Tailwind CSS", "Java Scrip"],
    btns: [
      {
        href: "https://github.com/Elshater6498/movie-tailwind",
        title: "Github",
        icon: <BsGithub />,
      },
      {
        href: "https://movie-tailwind-topaz.vercel.app/",
        title: "Preview",
        icon: <IoMdExit />,
      },
    ],
  },
];
