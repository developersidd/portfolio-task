import MakeAdminForm from "./_components/MakeAdminForm";

const MakeAdminPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3 className="text-[56px] leading-[67px] mb-6 text-white font-syne font-bold">
        Make an Admin
      </h3>
      <MakeAdminForm />
    </div>
  );
};

export default MakeAdminPage;
