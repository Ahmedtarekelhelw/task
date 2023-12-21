const Button = ({ isActive, handleClick, text }) => {
  return (
    <button
      className={`block md:hidden py-2 px-4 w-[130px] text-sm sm:text-md cursor-pointer ${
        isActive ? "bg-[#0C1F39] text-white" : "bg-gray-200"
      } rounded-lg transition-all capitalize`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
