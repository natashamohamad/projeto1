import Image from "next/image";

type LogoProps = {
  width?: number,
  height?: number,
};

export default function Logo({
  width,
  height,
}: LogoProps) {
  
  return (
    <Image
      src="/logos/youtube.webp"
      alt="YouTube"
      width={width || 120}
      height={height || 40}
      priority
      className="w-auto h-auto"
    />
  );

};