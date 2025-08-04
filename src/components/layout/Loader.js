import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-24 h-24 animate-spin">
        <Image src="/assets/loader/loading.svg" alt="Loading..." width={96} height={96} />
      </div>
    </div>
  );
}
