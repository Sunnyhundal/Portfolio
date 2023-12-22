import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-wrap justify-center pt-32">
      <Intro />
      <About />
    </main>
  );
}
