"use client";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Work } from "../page";

const WorkList = ({ works }: { works: Work[] }) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isLargeDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  if (window === undefined) {
    return null;
  }

  return (
    <div className="my-20 grid grid-cols-1  md:grid-cols-12 gap-x-6 gap-y-12 place-items-center place-content-between">
      {works.map((work, index) => {
        let spanClass = "";
        if (isTablet) {
          spanClass = index % 3 === 2 ? "col-span-12 " : "col-span-6";
        } else if (isDesktop) {
          spanClass =
            index % 5 === 4 || index % 5 === 3 ? "col-span-6 " : "col-span-4";
        } else if (isLargeDesktop) {
          spanClass =
            index % 7 === 4 || index % 7 === 5 || index % 7 === 6
              ? "col-span-4 "
              : "col-span-3";
        }

        console.log("spanClass:", spanClass);
        return (
          <div key={index} className={`${spanClass} w-full  `}>
            <Link href={`/my-works/${work.title}`}>
              <Image
                src={work.thumbnail.url}
                alt={work.title}
                width={600}
                height={400}
                className={`w-full h-[347px] object-cover rounded-xl mb-7`}
              />
            </Link>
            <div className={`text-center`}>
              <h4 className="font-inter font-bold text-[13px] text-white/90  leading-4 tracking-[1.63px] mb-3">
                {work.theme}
              </h4>
              <h3 className="font-inter font-bold text-[24px] text-white/90 leading-[34px]">
                <Link href={`/my-works/${work.title}`}>{work.title}</Link>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkList;
