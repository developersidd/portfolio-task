import Button from "@/components/common/Button";
import Icon from "@/components/common/Icons";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="relative flex flex-col items-center justify-between gap-8 pt-20 pb-32 md:flex-row md:gap-16">
      <div className="absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  top-0 -left-80 filter blur-[30px]"></div>
      <div className="order-2 md:order-1 w-2/4">
        <h3 className="text-[56px] leading-[67px] mb-6 text-white font-syne font-bold">
          Let&apos;s get know <br /> about me closer
        </h3>
        <p className="text-light-gray text-lg leading-7 tracking-[5.5%] mb-8 font-rubik md:w-[80%]">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters and web design.
        </p>
        <Button
          txtClass="text-gray-50"
          btnText="discover more about me"
          btnClass="text-base font-semibold capitalize gap-4 bg-primary-orange px-8 py-4"
        />
      </div>
      <div className="order-1 md:order-2 relative">
        <Icon
          name="reactangle.svg"
          alt="reactangle"
          className="absolute -top-5 right-2 w-[110px] h-[35px]"
        />
        <Image
          src="/assets/images/about-me.png"
          alt="about-me w-[455px]"
          width={500}
          height={500}
        />
        <Icon
          name="reactangle.svg"
          alt="reactangle"
          className="absolute rotate-90 -left-20 bottom-12 
          w-[150px] h-[178px]"
        />
      </div>
    </section>
  );
};

export default AboutMe;
