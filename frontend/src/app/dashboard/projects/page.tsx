import { retrieveProjects } from "@/api/api.project";
import Button from "@/components/common/Button";
import Link from "next/link";
import DashboardProjectList from "./_components/DashboardProjectList";
import SearchProject from "./_components/SearchProject";

const ProjectPage = async () => {
  const { data } = await retrieveProjects();
  console.log("data:", data);

  return (
    <div className="p-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Search Projects */}
        <div className="flex justify-between items-center py-5">
          <SearchProject />
          <Link href="/dashboard/projects/create" className="">
            <Button
              btnText="Create "
              btnClass="bg-primary-orange px-4 py-2 rounded-xl"
            />
          </Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-deep-dark  dark">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Theme
              </th>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <DashboardProjectList data={data} />
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
