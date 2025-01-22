import Image from "next/image";
import ProjectNavigators from "./_components/ProjectNavigators";
import RelatedProjects from "./_components/RelatedProjects";

const SingleProjectPage = () => {
  return (
    <section className="lg:container mx-auto px-4 md:px-10 ">
      <div className="relative pt-28">
        <div className=" absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  -top-12 -left-96 filter blur-[30px]"></div>
        <div>
          <h2 className="text-[72px] font-syne text-white font-bold leading-[86.4px] mb-2">
            Project Detail
          </h2>
          <h5 className="text-[18px] font-syne text-medium-gray font-medium  leading-[21.33px]">
            For Any Project Knock Us
          </h5>
        </div>
        <hr className="bg-medium-gray  mx-auto mt-20" />
      </div>
      {/*  Project Story */}
      <div className="py-8 md:py-12 lg:py-20 xl:py-28">
        <Image
          src="/assets/images/project-1.png"
          alt="contact-map"
          className="h-[350px] lg:h-[500px] xl:h-[700px] w-full object-fill  rounded-xl  mb-6 md:mb-8 lg:mb-12 xl:mb-16"
          width={1500}
          height={800}
        />
        <div className="max-sm:text-center sm:w-[80%] lg:max-w-[800px] mx-auto">
          <h3 className="text-[32px] font-syne text-white font-bold leading-[38.4px] mb-6">
            Project Story
          </h3>
          <p className="text-[16px] font-rubik text-medium-gray font-normal  leading-[27.2px]">
            The fact that photography has different meanings to different people
            is one of the many components of its appeal. Photography is such an
            important part of our life that it is now very difficult to imagine
            the world without it. We cannot imagine a wedding without the
            opportunity to capture it on film, we would not be able to remember
            the growing up of children or the holidays if we did not have
            pictures.
          </p>
        </div>
      </div>

      {/* Project Images & details */}
      <div className=" pb-6 md:pb-8 lg:pb-12 xl:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-5 lg:mb-14 xl:mb-20">
          <div className="md:w-[50%]">
            <Image
              src="/assets/images/project-2.png"
              alt="contact-map"
              className="h-[350px] lg:h-[600px] max-lg:w-[555px] rounded-xl object-fill"
              width={900}
              height={600}
            />
          </div>
          <div className="md:w-[50%]">
            <Image
              src="/assets/images/project-3.png"
              alt="contact-map"
              className="h-[350px] lg:h-[600px] max-lg:w-[555px] rounded-xl object-fill"
              width={900}
              height={600}
            />
          </div>
        </div>
        <p className="max-sm:text-center sm:w-[80%] lg:max-w-[900px] mx-auto text-[16px] font-rubik text-medium-gray font-normal  leading-[27.2px]">
          The fact that photography has different meanings to different people
          is one of the many components of its appeal. Photography is such an
          important part of our life that it is now very difficult to imagine
          the world without it. We cannot imagine a wedding without the
          opportunity to capture it on film, we would not be able to remember
          the growing up of children or the holidays if we did not have
          pictures.
        </p>
      </div>
      {/* Arrows */}
      <ProjectNavigators />
      {/* Related projects */}
      <RelatedProjects />
    </section>
  );
};

export default SingleProjectPage;
