import { retrieveProject } from "@/api/api.project";
import EditProjectForm from "./_components/EditProjectForm";

const EditProjectPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log("id:", id);
  const { data } = await retrieveProject(id);
  return (
    <div>
      <EditProjectForm
        id={id}
        data={{
          theme: data?.theme,
          title: data?.title,
          description: data?.description,
          story: data?.story,
        }}
      />
    </div>
  );
};

export default EditProjectPage;
