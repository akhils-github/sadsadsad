import { coreHeading, coreTeam } from "@/constants/dummy-data/history/data";
import Image from "next/image";

export default function CoreTeam() {
  return (
    <section className="w-full my-5 relative">
      <div className="container mx-auto px-4">
        <h2 className="subpage-heading  mb-6 ">{coreHeading?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTeam.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-64 overflow-hidden">
                <Image
                  width={336}
                  height={336}
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="subpage-subheading font-bold mt-4 text-left">
                {member?.name}
              </h3>
              <p className="primary-paragraph font-normal text-left">
                {member?.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
