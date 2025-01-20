import Image from "next/image";

const Button = ({
  btnText,
  imgPath,
  btnClass,
  txtClasses,
  imgClasses,
}: {
  btnText: string;
  imgPath?: string;
  btnClass?: string;
  txtClasses?: string;
  imgClasses?: string;
}) => {
  return (
    <button className={`${btnClass} flex items-center gap-2   rounded-full `}>
      <span className={`text-white ${txtClasses}`}> {btnText} </span>
      {imgPath && (
        <Image
          className={`size-[15px] md:size-5 ${imgClasses}`}
          src={`/assets/icons/${imgPath}.svg`}
          width={30}
          height={30}
          alt={imgPath}
        />
      )}
    </button>
  );
};

export default Button;
