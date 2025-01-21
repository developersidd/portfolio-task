import Image from "next/image";
import Link from "next/link";
import Icon from "./common/Icons";
const Footer = () => {
  return (
    <section className="bg-deep-dark">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 xl:px-14 py-20">
        <div className="text-center">
          <h4 className="font-syne text-[24px] leading-7 text-primary-orange font-bold mb-6">
            Get in Touch With Us
          </h4>
          <h2 className="max-w-max mx-auto text-[64px] border-b-4 border-white font-syne text-white font-bold  leading-[65px]">
            {" "}
            info@aaronn.com{" "}
          </h2>
        </div>
        <div className="w-[80%] mx-auto flex items-center justify-between gap-8 mt-32 mb-20">
          <Image
            className="w-[241px] h-[42px]"
            src="/assets/icons/dark-theme-logo.svg"
            width={300}
            height={60}
            alt="logo"
          />

          <div>
            <ul className="text-white font-syne font-bold *:leading-7 *:text-2xl space-y-3">
              <li>Street Avenue 21, CA</li>
              <li>0-8-00-888-000</li>
              <li>0000</li>
            </ul>
          </div>
          <div className="-mt-6">
            <ul className="text-white font-syne font-bold *:leading-7 *:text-2xl space-y-4">
              <li>+9 0283353</li>
              <li className="flex items-center gap-4">
                <Link href="https://www.facebook.com/">
                  <Icon name="facebook.svg" alt="facebook" className="size-7" />
                </Link>
                <Link href="https://www.facebook.com/">
                  <Icon
                    name="instagram.svg"
                    alt="instagram"
                    className="size-7"
                  />
                </Link>
                <Link href="https://www.facebook.com/">
                  <Icon name="twitter.svg" alt="twitter" className="size-7" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  Copyright text */}
        <hr className="text-light-gray w-[80%] mx-auto mb-10" />
        <div>
          <p className="text-white font-syne font-bold leading-7 text-[28px] text-center">
            © {new Date().getFullYear()}. Ideapeel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
