import Icon from "@/components/common/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const ResponsiveNavLinks = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          isOpen
            ? {
                transition: { delay: 0.5, ease: "easeIn" },
                opacity: 1,
                display: "block",
              }
            : {
                opacity: 0,
                display: "none",
              }
        }
        onClick={onClose}
        className={`w-[40vw] md:w-[60vw] h-screen bg-black/40 fixed top-0 left-0 z-20 !lg:hidden`}
      />
      <motion.header
        className={`${isOpen ? "h-auto" : "h-0 opacity-0"} xl:hidden `}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Nav Links */}
        <nav className="">
          <motion.ul
            className="w-[60vw] md:w-[40vw] shadow-md px-5 h-[100dvh] rounded-t-x fixed right-0 bottom-0 bg-white text-primary-green py-10 pl-6 font-medium  space-y-3  z-30"
            variants={{
              open: {
                transition: {
                  duration: 0.7,
                  ease: "easeInOut",
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                },
                x: 0,
              },
              closed: {
                x: "150%",
              },
            }}
          >
            {[
              "হোম",
              "দোয়া ক্যাটাগরি",
              "সকল দোয়া",
              "রুকিয়া",
              "মেমোরাইজ",
              "কালেকশন",
              "অন্যান্য",
            ].map((route) => (
              <motion.li key={route} variants={itemVariants}>
                <Link className="capitalize hover:underline" href={`/${route}`}>
                  {" "}
                  {route}{" "}
                </Link>
              </motion.li>
            ))}
            <motion.div
              onClick={onClose}
              className="absolute text-xl top-1 sm:top-5 right-7 z-50"
            >
              <Icon alt="cross" name="cross.svg" classes="size-4 md:size-5" />
            </motion.div>
          </motion.ul>
        </nav>
      </motion.header>
    </>
  );
};

export default ResponsiveNavLinks;
