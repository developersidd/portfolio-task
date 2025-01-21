import AboutMe from "../_components/AboutMe";
import HeroSection from "../_components/HeroSection";
import ProjectsHighlight from "../_components/ProjectsHighlight";
import Testimonial from "../_components/Testimonial";

const HomePage = () => {
  return (
    <main className="container mx-auto px-14">
      <HeroSection />
      <AboutMe />
      <ProjectsHighlight />
      <Testimonial />
    </main>
  );
};

export default HomePage;
