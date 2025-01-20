import Button from "@/components/common/Button";
import ProjectCard from "../projects/_components/ProjectCard";

export type Project = {
  name: string;
  description: string;
  story: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  client: string;
  works: string[];
  days: {
    day: string;
    text: string;
    images: {
      public_id: string;
      url: string;
    }[];
  }[];
};

const projects: Project[] = [
  {
    name: "Brand Journey Improvements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/project.png",
    },
    client: "Google",
    works: ["UI/UX Design", "Web Development"],
    // also they provide with some text and some images what they have done for each day , so i need to show that as well by looping through the array
    days: [
      {
        day: "Day 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
      {
        day: "Day 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
    ],
  },
  //  create more 3 objects like this remain images same for all
  {
    name: "Brand Journey Improvements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/project.png",
    },
    client: "Google",
    works: ["UI/UX Design", "Web Development"],
    // also they provide with some text and some images what they have done for each day , so i need to show that as well by looping through the array
    days: [
      {
        day: "Day 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
      {
        day: "Day 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
    ],
  },
  {
    name: "Brand Journey Improvements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/project.png",
    },
    client: "Google",
    works: ["UI/UX Design", "Web Development"],
    // also they provide with some text and some images what they have done for each day , so i need to show that as well by looping through the array
    days: [
      {
        day: "Day 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
      {
        day: "Day 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
    ],
  },
  {
    name: "Brand Journey Improvements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/project.png",
    },
    client: "Google",
    works: ["UI/UX Design", "Web Development"],
    // also they provide with some text and some images what they have done for each day , so i need to show that as well by looping through the array
    days: [
      {
        day: "Day 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
      {
        day: "Day 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tempus purus. Sed et metus nec urna ultricies.",
        images: [
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
          {
            public_id: "14f4dfdf",
            url: "/assets/images/project.png",
          },
        ],
      },
    ],
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
