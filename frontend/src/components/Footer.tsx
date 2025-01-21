import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="container mx-auto px-3 sm:px-4 md:px-8 xl:px-14">
      <h4>Get in Touch With Us</h4>
      <h2> info@aaronn.com </h2>
      <div>
        <Image
          className="size-[30px] sm:size-[35px] md:size-[100] xl:size-[125px]"
          src="/assets/icons/dark-theme-logo.svg"
          width={80}
          height={60}
          alt="logo"
        />

        <div>
          <ul>
            <li>Street Avenue 21, CA</li>
            <li>0-8-00-888-000</li>
            <li>0000</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>+9 0283353</li>
            <li>
              <Link href="https://www.facebook.com/">
              
              </Link>
              <Link href="https://www.facebook.com/">{/*<Instagram />*/}</Link>
              <Link href="https://www.facebook.com/">{/*<Twitter />*/}</Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  Copyright text */}
      <div>
        <p>© {new Date().getFullYear()}. Ideapeel. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
