import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Container from "@/components/ui/container";

const page = () => {
  return (
    <Container>
      <About />
      <Skills />
      <Projects />
    </Container>
  );
};

export default page;
