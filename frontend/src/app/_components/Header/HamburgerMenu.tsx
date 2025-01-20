import { motion } from "framer-motion";

const HamburgerMenu = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: (val: boolean) => void;
}) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      onClick={() => {
        onToggle(!isOpen);
      }}
      className="size-[32px] md:size-[40px] 2xl:size-[42px] px-[8px]  xl:py-[10px] py-2 rounded-md border-[1.5px] border-primary-light-gray grid place-items-center bg-primary-light-gray space-y-[6px] cursor-pointer"
    >
      <motion.div
        style={{ transformOrigin: "0% 0%" }}
        variants={{
          open: {
            rotate: 41,
            x: 2,
            y: 1,
          },
          closed: {
            rotate: 0,
          },
        }}
        transition={{ duration: 0.3 }}
        className="w-full rounded h-[1.3px] bg-primary-black"
      ></motion.div>
      <motion.div
        variants={{
          open: {
            x: -50,
            opacity: 0,
            display: "none",
          },
          closed: {
            x: 0,
            opacity: 1,
          },
        }}
        className="w-full rounded h-[1.3px] bg-primary-black/30"
      ></motion.div>
      <motion.div
        style={{ transformOrigin: "0% 100%" }}
        variants={{
          open: {
            rotate: -39,
            x: 2,
          },
          closed: {
            rotate: 0,
          },
        }}
        transition={{ duration: 0.3 }}
        className="w-full rounded h-[1.3px] bg-primary-black"
      ></motion.div>
    </motion.div>
  );
};

export default HamburgerMenu;
