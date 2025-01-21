import WorkList from "./_components/WorkList";

export type Work = {
  image: string;
  title: string;
  color: string;
};

const works: Work[] = [
  {
    image: "/assets/images/work.jpeg",
    title: "Orvillebury",
    color: "Green",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "Rempelshire",
    color: "Blue",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "West Lavada",
    color: "Yellow",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  // make more 2 objects wih different colors and titles
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "West Lavada",
    color: "Yellow",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  // make more 2 objects wih different colors and titles
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "West Lavada",
    color: "Yellow",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  // make more 2 objects wih different colors and titles
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
  {
    image: "/assets/images/work.jpeg",
    title: "New Kaitlin",
    color: "aqua",
  },
];

const MyWorksPage = () => {
  return (
    <section className="container mx-auto px-14">
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
