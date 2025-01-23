import Link from "next/link";
const link = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
 
  {
    name: "My Works",
    url: "/my-works",
  },
  {
    name: "Contact",
    url: "/contact",
  }
];
const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-8 text-primary-black">
      {link.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="text-sm font-medium relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] uppercase before:bg-primary-orange before:rounded  before:scale-x-0 before:transition-transform before:duration-300 before:origin-right hover:before:scale-x-100  hover:before:origin-left"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
