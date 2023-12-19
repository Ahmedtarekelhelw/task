import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-5">
      <nav className="flex items-center gap-6 justify-end container">
        <div className="gap-5 hidden sm:flex">
          <Image src="./assets/globe.svg" alt="globe" width={20} height={20} />
          <button className="login ">Log in</button>
          <button className="sign-up font-bold ">Sign up</button>
        </div>
        <div className="burger-icon flex flex-col gap-2 cursor-pointer">
          <span className="w-10 h-1 bg-black"></span>
          <span className="w-10 h-1 bg-black"></span>
          <span className="w-10 h-1 bg-black"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
