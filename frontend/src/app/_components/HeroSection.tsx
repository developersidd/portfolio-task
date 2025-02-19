import Button from "@/components/common/Button";

const HeroSection = () => {
  return (
    <div className="h-[650px] flex flex-col justify-center items-center ">
      {/* Vector */}
      <div className="absolute -z-20 w-full h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:1000px_550px] bg-no-repeat  bg-right-top top-16 right-44 filter blur-[40px]"></div>
      <h1 className="text-[72px] font-syne text-white font-bold mb-16 text-center leading-[86px]">
        Adaptive Logo Design <br /> for Your Brand{" "}
      </h1>
      <Button
        txtClass="text-gray-50"
        btnText="Explore works"
        imgPath="right-arrow"
        btnClass="text-[13px] font-bold gap-4 tracking-[1.63px] bg-primary-orange px-8 py-5"
      />
    </div>
  );
};

export default HeroSection;
