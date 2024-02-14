import Image from "next/image";

export const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/logo-mirowithnext.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-1000"
      />
    </div>
  );
};
