import Icon from "@/components/common/Icons";

const Testimonial = () => {
  return (
    <div className="h-[600px] flex flex-col justify-center relative">
      <div className="absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  -top-12 -left-96 filter blur-[30px]"></div>
      <div className="flex items-start justify-between pb-14">
        <h3 className="text-[64px] font-syne text-white font-bold  leading-[76.8px]">
          Testimonial
        </h3>
        <Icon name="quotes.svg" alt="line" className="w-[200px] -mt-16" />
      </div>
      <p className="text-light-gray font-normal text-lg leading-[23.33px] mb-8 font-rubik md:w-[60%]">
        “Aaronn was fantastic to work with from start to finish. We were looking
        for a simple, stand-out logo and he delivered. I tried designing the
        logo myself thinking I wouldn’t need to pay the money for a professional
        graphic designer but I was very wrong. Working with Aaronn was worth
        every penny and was surprisingly affordable! I remember him saying
        simplicity is key to a successful logo and boy he was right. I can’t
        thank Aaronn enough for his effort and professionalism. I would
        recommend him to anyone looking for a design!”
      </p>

      <h4 className="text-[24px] font-syne text-white font-bold leading-[28.8px]">
        -Martin lee
      </h4>
    </div>
  );
};

export default Testimonial;
