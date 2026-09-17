import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Goal from "@/components/Goal";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Goal/>
        <Projects/>
        <Skills/>
        <Links/>
        <Footer/>
      </main>
    </>
  );
}