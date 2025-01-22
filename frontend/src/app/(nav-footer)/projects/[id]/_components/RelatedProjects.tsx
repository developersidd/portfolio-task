import Image from "next/image";

const projects = [
  {
    description:
      "Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills",
    story:
      "The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/work.jpeg",
    },

    images: [
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
    ],

    title: "Orvillebury",
    tags: ["Photography", "Design", "Art"],
    theme: "Green",
  },
  {
    description:
      "Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills",
    story:
      "The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/work.jpeg",
    },

    images: [
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
    ],

    title: "Rempelshire",
    tags: ["Photography", "Design", "Art"],
    theme: "Blue",
  },
  {
    title: "West Lavada",
    tags: ["Photography", "Design", "Art"],
    theme: "Yellow",
    description:
      "Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills",
    story:
      "The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.",
    thumbnail: {
      public_id: "14f4dfdf",
      url: "/assets/images/work.jpeg",
    },

    images: [
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
      {
        public_id: "14f4dfdf",
        url: "/assets/images/project-3.png",
      },
    ],
  },
];

const RelatedProjects = () => {
  return (
    <div className="py-6 md:py-8 lg:py-12 xl:py-16">
      <h2 className="text-[64px] font-syne text-white font-bold leading-[76.8px] mb-5 md:mb-7 lg:mb-16 xl:mb-20 text-center">
        Other Projects
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {projects.map((project) => (
            <div key={project.title} className="relative">
              <div className="relative">
                <Image
                  width={500}
                  height={600}
                  src={project.thumbnail.url}
                  alt={project.title}
                  className="w-full lg:w-[360px] xl:w-[480px] h-[300px] lg:h-[465px] xl:h-[500px] object-cover object-center mb-5 rounded-xl"
                />
                <div className="ml-5">
                  <h3 className="text-[24px] font-syne font-semibold mb-2 leading-[28.8px]">
                    {project.title}
                  </h3>
                  <p className="text-lg text-medium-gray font-rubik font-normal leading-[21.33px]">
                    {project.tags[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
