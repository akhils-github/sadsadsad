const WhatWeCard = ({ item, IconComponent }) => {
  return (
    <div className="grid grid-cols-12 h-full gap-x-5 w-full">
      <div className="col-span-1 flex flex-col items-center gap-y-2">
        <div className="size-6 relative">
          <div className="bg-[#FFE761] rounded-full size-full absolute -top-2 left-2 -z-50"></div>
          {IconComponent && <IconComponent className="h-full w-full z-10" />}
        </div>
        <div className="w-0.5 h-full bg-[#D0D1D1]" />
      </div>
      <div className="flex flex-col col-span-11 gap-y-3">
        <p className="subpage-subheading font-medium leading-[1.2]">{item.title}</p>
        <p className="primary-paragraph font-normal">{item.description}</p>
        <div className="rounded-full my-auto view-btn flex items-center h-10 w-fit px-5 primary-paragraph font-semibold">
          View Projects
        </div>
      </div>
    </div>
  );
};

export default WhatWeCard;
