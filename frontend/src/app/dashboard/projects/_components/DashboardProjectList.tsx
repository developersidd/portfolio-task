import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import DeleteProject from "./DeleteProject";
const DashboardProjectList = ({ data }: { data: Project[] }) => {
  return (
    <tbody>
      {data?.length > 0 ? (
        data.map((project) => (
          <tr
            key={project?._id}
            className="bg-white border-b dark:bg-dark-theme dark:border-gray-700 align-middle"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Image
                src={project?.thumbnail?.url}
                alt={project?.title}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </th>

            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {project?.title}
            </th>

            <td className="px-6 py-4"> {project.theme} </td>
            <td className="px-6 py-4"> {project.tags} </td>
            <td className="px-6 py-4 flex items-center gap-4">
              <Link
                href={`/dashboard/projects/edit/${project?._id}`}
                className="font-medium text-primary-orange  hover:underline"
              >
                Edit
              </Link>
              <DeleteProject projectId={project?._id} />
            </td>
          </tr>
        ))
      ) : (
        <tr className="text-gray-500 dark:text-gray-400">
          <p>No projects found</p>
        </tr>
      )}
    </tbody>
  );
};

export default DashboardProjectList;
