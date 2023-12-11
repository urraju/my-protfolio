const TitleContent = ({ heading, subHeading }) => {
  return (
    <div className="flex items-center mt-10 justify-center gap-y-3">
      <div className="text-center font-poppins">
        <h1 className="text-4xl text-white">{heading}</h1>
        <p className="mt-2 text-gray-400">{subHeading}</p>
      </div>
    </div>
  );
};
export default TitleContent;
