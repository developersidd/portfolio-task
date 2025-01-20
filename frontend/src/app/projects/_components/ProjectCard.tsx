import { Project } from "@/app/_components/ProjectsHighlight";
import Icon from "@/components/common/Icons";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, client, works, days, description, thumbnail } = project || {};
  return (
    <div className="mb-10">
      <div className="mb-6">
        <Link href={`/projects/${name}`}>
          <Image
            src={thumbnail.url}
            alt={name}
            className="h-[620px] w-[560px] object-cover rounded-lg"
            width={600}
            height={700}
          />
        </Link>
      </div>
      <div className="font-rubik">
        <div className="flex items-start">
          <h3 className="text-[24px] text-white font-bold font-syne mb-6">
            <Link href={`/projects/${name}`}>{name}</Link>
          </h3>
          <Icon alt="line" name="line.svg" className="w-[48px] mt-4 ml-10" />
        </div>
        <p className="text-sm text-white capitalize">
          <span className="text-stone-gray mr-5 ">Client:</span>
          {client}
        </p>

        <p className="text-sm mt-2 font-rubik flex items-center">
          <span className="text-stone-gray">Work:</span>
          <div className="ml-7 space-x-4">
            {works.map((work, index) => (
              <span key={index} className="text-white capitalize">
                {work}
              </span>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
