import Button from "@/components/common/Button";
import ProjectCard from "../projects/_components/ProjectCard";

export type Project = {
  name: string;
  thumbnail: string;
  client: string;
  works: string[];
};

const projects: Project[] = [
  {
    name: "Brand Journey Improvements",
    thumbnail: "/assets/images/project-1.png",

    client: "Google",
    works: ["UI/UX Design", "Web Development"],
  },

  {
    name: "Brand Journey Improvements",

    thumbnail: "/assets/images/project-2.png",

    client: "Google",
    works: ["UI/UX Design", "Web Development"],
  },
  {
    name: "Brand Journey Improvements",

    thumbnail: "/assets/images/project-3.png",

    client: "Google",
    works: ["UI/UX Design", "Web Development"],
  },
  {
    name: "Brand Journey Improvements",
    thumbnail: "/assets/images/project-4.png",
    client: "Google",
    works: ["UI/UX Design", "Web Development"],
  },
];

const ProjectsHighlight = () => {
  return (
    <section className="">
      <div className="w-full mx-auto relative flex flex-col justify-center h-[400px]">
        <div className="absolute -z-20 w-full h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  bg-right-top -top-14 right-52  filter blur-[30px]"></div>

        <h3 className="text-[64px] font-syne text-white font-bold mb-10 text-center leading-[76.8px]">
          My Projects Highlight
        </h3>
        <Button
          txtClass="text-gray-50"
          btnText="Explore More"
          imgPath="right-arrow"
          btnClass="text-[13px] mx-auto text-center font-bold gap-4 tracking-[1.63px] border-primary-orange border px-8 py-5"
        />
      </div>
      {/*  Projects List */}
      <div
        className="grid w-full mx-auto grid-cols-1 md:grid-cols-2  
      gap-10 mt-6  place-items-center "
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsHighlight;
