import Icon from "@/components/common/Icons";
import Image from "next/image";
import Link from "next/link";

const AboutMePage = () => {
  return (
    <section className="lg:container mx-auto px-4 md:px-10 ">
      <div className="relative pt-28">
        <div className=" absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  -top-12 -left-96 filter blur-[30px]"></div>
        <div>
          <h2 className="text-[72px] font-syne text-white font-bold leading-[86.4px] mb-2">
            About Me
          </h2>
          <h4 className="text-[18px] font-syne text-medium-gray font-medium  leading-[21.33px]">
            Little Brief About Myself
          </h4>
        </div>
        <hr className="bg-medium-gray  mx-auto mt-20" />
      </div>
      {/* Something About Me */}
      <div className="md:flex items-start justify-between max-md:text-center max-md:space-y-7 py-8 md:py-10 lg:py-14 xl:py-20">
        <div className="md:w-[45%] xl:w-[35%]">
          <h1 className="text-[80px] font-syne text-white font-bold leading-[84px] -tracking-[2.5px]">
            My mission is to make design easier.
          </h1>
        </div>
        <div className="md:w-[50%] xl:w-[45%]">
          <p className=" text-[21px] font-syne text-medium-gray font-semibold leading-[39px] tracking-[0.66px]">
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without porbolem.
          </p>
        </div>
      </div>
      {/* My Photos */}
      <div className="md:flex gap-6 pb-8 md:pb-10 lg:pb-16 xl:pb-24">
        <div className="relative md:w-[50%] lg:w-[35%] xl:w-[35%]">
          <Icon
            name="reactangle.svg"
            alt="reactangle"
            className="absolute rotate-90 top-0 -left-[14.5%] w-[150px] h-[178px]"
          />
          <Image
            src="/assets/images/about-me.png"
            alt="about-me"
            className="rounded-xl h-[350px] md:h-[400px] lg:h-[515px] w-full"
            width={500}
            height={700}
          />
        </div>
        <div className="relative md:w-[50%] lg:w-[65%] xl:w-[65%]">
          <Icon
            name="reactangle.svg"
            alt="reactangle"
            className="absolute -bottom-[17%] right-2 w-[150px] h-[178px]"
          />
          <Image
            src="/assets/images/me.png"
            alt="about-me"
            className="rounded-xl h-[350px] md:h-[400px] lg:h-[515px]   w-full"
            width={1200}
            height={700}
          />
        </div>
      </div>
      {/* Social Medias */}
      <div className="pb-20">
        <h2 className="text-[48px] font-syne text-white font-bold -tracking-[0.5px] leading-[79.99px] mb-5">
        Follow me on:
        </h2>
        <ul className="flex gap-4 justify-between *:text-[32px] font-inter text-medium-gray font-bold *:leading-[38.73px] *:tracking-[4.06px]">
          <li>
            <Link href=""> dribble</Link>
          </li>
          <li>
            <Link href=""> twitter</Link>
          </li>
          <li>
            <Link href="">facebook</Link>
          </li>
          <li>
            <Link href="">instagram</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMePage;
