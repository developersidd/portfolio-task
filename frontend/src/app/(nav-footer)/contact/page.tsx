import Image from "next/image";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <section className="lg:container mx-auto px-4 md:px-10 ">
      <div className="relative pt-28">
        <div className=" absolute -z-20 w-[800px] h-[700px] bg-[url('/assets/icons/dark-theme-vector.svg')] bg-[length:600px_500px] bg-no-repeat  -top-12 -left-96 filter blur-[30px]"></div>
        <div>
          <h2 className="text-[72px] font-syne text-white font-bold leading-[86.4px] mb-2">
            Contact Me
          </h2>
          <h4 className="text-[18px] font-syne text-medium-gray font-medium  leading-[21.33px]">
            For Any Project Knock Us
          </h4>
        </div>
        <hr className="bg-medium-gray  mx-auto mt-20" />
      </div>
      {/* Contact Form */}
      <div className="md:flex items-start justify-between max-md:text-center max-md:space-y-7 py-8 md:py-10 lg:py-14 xl:py-28">
        <div className="md:w-[45%] xl:w-[35%]">
          <h2 className="text-[64px] font-syne text-white font-bold leading-[76px]">
            Get in Touch With Us
          </h2>
        </div>
        <div className="md:w-[50%] xl:w-[45%]">
          <ContactForm />
        </div>
      </div>
      <div className="pb-28">
        <Image
          src="/assets/images/laptop.png"
          alt="contact-map"
          className="xl:h-[650px] rounded-xl object-cover"
          width={1920}
          height={800}
          //layout="responsive"
        />
        <ul className="text-white lg:w-[70%] mx-auto flex items-center justify-between text-[24px] font-syne font-bold mt-20 leading-[28.8px]">
          <li>Street Avenue 21, CA</li>
          <li>+9 0283353</li>
          <li>info@aaronn.com</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactPage;
