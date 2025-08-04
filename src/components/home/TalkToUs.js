const TalkToUs = () => {
  return (
    <div className="w-full mt-10 px-6 py-8 md:p-10 bg-gradient-to-r from-[#fdf8c5] to-[#e8e8e8] text-white flex flex-col md:flex-row items-center justify-between rounded-lg">
      {/* Heading with Gradient Text */}
      <div className="w-[85%] flex flex-col md:flex-row mx-auto items-center justify-between">
        <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold  bg-gradient-to-r from-[#db9d00] to-[#7e3a00] bg-clip-text text-transparent">
          Let’s collaborate & <br className="hidden lg:block" />
          build your dream property with us.
        </h2>

        {/* Talk to Us Button */}
        <button className="bg-white text-gray-950 text-lg font-medium rounded-4xl hover:bg-gray-50 transition duration-300 lg:w-50 lg:h-15">
          Talk to Us
        </button>
      </div>
    </div>
  );
};

export default TalkToUs;
