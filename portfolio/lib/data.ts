import { exportTraceState } from "next/dist/trace";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
    {
      name: "HTML",
      simpleicon: "html5",
      area: "Frontend",
    },
    {
      name: "CSS",
      simpleicon: "css3",
      area: "Frontend",
    },
    {
      name: "JavaScript",
      simpleicon: "javascript",
      area: "Frontend",
    },
    {
      name: "TypeScript",
      simpleicon: "typescript",
      area: "Frontend",
    },
    {
      name: "React",
      simpleicon: "react",
      area: "Frontend",
    },
    {
      name: "Next.js",
      simpleicon: "nextdotjs",
      area: "Frontend",
    },
    {
      name: "Node.js",
      simpleicon: "nextdotjs",
      area: "Backend",
    },
    {
      name: "Express",
      simpleicon: "express",
      area: "Backend",
    },
    {
      name: "MongoDB",
      simpleicon: "mongodb",
      area: "Backend",
    },
    {
      name: "Git",
      simpleicon: "git",
      area: "Tools",
    },
    {
      name: "GitHub",
      simpleicon: "github",
      area: "Tools",
    },
    {
      name: "VSCode",
      simpleicon: "visualstudiocode",
      area: "Tools",
    },
    {
      name: "PostgreSQL",
      simpleicon: "postgresql",
      area: "Backend",
    },

] as const;

export const projects = [
    {
      name: "Portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices risus sit amet sem convallis, consectetur pretium mi aliquam. Proin cursus tempus lorem, id viverra velit rhoncus et. Nunc posuere elementum est, sed maximus nisl lobortis ac. Nam dignissim diam.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },
    {
      name: "Blanc Canvas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices risus sit amet sem convallis, consectetur pretium mi aliquam. Proin cursus tempus lorem, id viverra velit rhoncus et. Nunc posuere elementum est, sed maximus nisl lobortis ac. Nam dignissim diam.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },
    {
      name: "PhotoLabs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices risus sit amet sem convallis, consectetur pretium mi aliquam. Proin cursus tempus lorem, id viverra velit rhoncus et. Nunc posuere elementum est, sed maximus nisl lobortis ac. Nam dignissim diam.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },
    {
      name: "Bargin Bazzar",
      description: "A Marketplace application designed to help connect buyers and sellers.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },
    {
      name: "Tweeter",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices risus sit amet sem convallis, consectetur pretium mi aliquam. Proin cursus tempus lorem, id viverra velit rhoncus et. Nunc posuere elementum est, sed maximus nisl lobortis ac. Nam dignissim diam.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },
    {
      name: "TinyApp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices risus sit amet sem convallis, consectetur pretium mi aliquam. Proin cursus tempus lorem, id viverra velit rhoncus et. Nunc posuere elementum est, sed maximus nisl lobortis ac. Nam dignissim diam.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/test.png",
      link: "",
      github: "",
    },


] as const;
