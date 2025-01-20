import Image from "next/image";

function Icon({
  name,
  alt,
  className,
}: {
  name: string;
  alt: string;
  className: string;
}) {
  return (
    <Image
      className={`${className} flex items-center justify-center mx-auto`}
      src={`/assets/icons/${name}`}
      alt={alt}
      width="200"
      height="200"
    />
  );
}

export default Icon;
