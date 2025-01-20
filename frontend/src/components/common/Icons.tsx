import Image from "next/image";

function Icon({
  name,
  alt,
  classes,
}: {
  name: string;
  alt: string;
  classes: string;
}) {
  return (
    <Image
      className={`${classes} flex items-center justify-center mx-auto`}
      src={`/assets/icons/${name}`}
      alt={alt}
      width="64"
      height="64"
    />
  );
}

export default Icon;
