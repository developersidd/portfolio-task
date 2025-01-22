import WorkList from "./_components/WorkList";

export type Work = {
  description: string;
  story: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  images: {
    public_id: string;
    url: string;
  }[];
  title: string;
  theme: string;
};
const works: Work[] = [
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
    theme: "Blue",
  },
  {
    title: "West Lavada",
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
  {
    title: "New Kaitlin",
    theme: "aqua",
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
  // make more 2 objects wih different colors and titles
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "West Lavada",
    theme: "Yellow",
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
    title: "New Kaitlin",
    theme: "aqua",
  },
  // make more 2 objects wih different colors and titles
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "West Lavada",
    theme: "Yellow",
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
    title: "New Kaitlin",
    theme: "aqua",
  },
  // make more 2 objects wih different colors and titles
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
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
    title: "New Kaitlin",
    theme: "aqua",
  },
];

const MyWorksPage = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="relative pt-32">
        <div className=" absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  -top-12 -left-96 filter blur-[30px]"></div>

        <div>
          <h2 className="text-[72px] font-syne text-white font-bold leading-[86.4px] mb-2">
            My works
          </h2>
          <h4 className="text-[18px] font-syne text-medium-gray font-medium  leading-[21.33px]">
            Showcase About Works
          </h4>
        </div>
        <hr className="bg-medium-gray  mx-auto mt-20" />
      </div>

      <WorkList works={works} />
    </section>
  );
};

export default MyWorksPage;
