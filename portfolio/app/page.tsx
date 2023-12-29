import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/project";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-32">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
