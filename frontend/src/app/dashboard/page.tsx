import { retrieveCurrentUser } from "@/api/user.api";

const DashboardPage = async () => {
  const { data } = await retrieveCurrentUser();
  console.log("data:", data);
  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      <h3 className="text-[25px] lg:text-[56px] leading-[67px] mb-6 text-white font-syne font-bold">
        Welcome to the Dashboard
        <span className=" ml-5 uppercase text-primary-orange">
          {data?.username}
        </span>
      </h3>
    </section>
  );
};

export default DashboardPage;
