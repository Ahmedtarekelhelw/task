const Button = ({ isActive, handleClick, text, style = "" }) => {
  return (
    <button
      className={`block ${style} py-2 px-4  text-sm sm:text-md  outline-none cursor-pointer ${
        isActive ? "bg-[#0C1F39] text-white" : "bg-gray-200"
      } rounded-lg transition-all capitalize`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
