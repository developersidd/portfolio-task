import Image from "next/image";

const Button = ({
  btnText,
  imgPath,
  btnClass,
  txtClass,
  imgClass,
}: {
  btnText: string;
  imgPath?: string;
  btnClass?: string;
  txtClass?: string;
  imgClass?: string;
}) => {
  return (
    <button
      className={`${btnClass} uppercase font-rubik flex items-center gap-2  rounded-full `}
    >
      <span className={`text-white ${txtClass}`}> {btnText} </span>
      {imgPath && (
        <Image
          className={`size-[15px] md:size-5 ${imgClass}`}
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
