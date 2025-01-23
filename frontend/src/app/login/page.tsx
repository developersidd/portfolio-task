import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h3 className="text-[56px] leading-[67px] mb-6 text-white font-syne font-bold">
        Login
      </h3>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
