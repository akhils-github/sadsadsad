import Link from "next/link";
import Image from "next/image";
const SignatureCard = ({ item }) => {

  return (
    <Link
      className="relative cursor-pointer h-auto block group w-full"
      href={"#"}
    >
      {/* Default Content (Visible by default, hidden on hover) */}
      <dt className="text-base text-black  group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex flex-col gap-2">
         {item?.image && <Image src={item?.image} alt={item?.title} width={40} height={20} />}
          <h3 className="font-semibold small-heading my-1.5 leading-[1.2]">
            {item?.title}
          </h3>
        </div>
        <p className="mt-2 secondary-paragraph ">{item?.description}</p>
      </dt>
      <p className="text-white opacity-0 group-hover:opacity-100 font-anton text-3xl font-bold absolute z-10 inset-0  flex items-center justify-center">
        Know more
      </p>

      {/* Hover Content (Hidden by default, visible on hover) */}
      <div
        style={{ backgroundImage: `url("${item?.bgImage}")` }}
        className="absolute inset-0 w-full rounded-xl bg-cover bg-gray-800 bg-no-repeat opacity-0 group-hover:opacity-100 flex justify-center items-center  scale-90 transition-all duration-700 group-hover:scale-100"
      ></div>
    </Link>
  );
};

export default SignatureCard;
