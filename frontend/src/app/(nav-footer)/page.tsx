import AboutMe from "../_components/AboutMe";
import HeroSection from "../_components/HeroSection";
import ProjectsHighlight from "../_components/ProjectsHighlight";

const HomePage = () => {
  return (
    <main className="container mx-auto px-14">
      <HeroSection />
      <AboutMe />
      <ProjectsHighlight />
    </main>
  );
};

export default HomePage;
