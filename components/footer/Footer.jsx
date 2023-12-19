import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0C1F39] text-white py-8">
      <div className="container pl-[50px] py-[50px] flex gap-16 sm:gap-[120px] flex-wrap md:justify-center justify-start items-start font-thin">
        <ul className="">
          <li className="flex flex-col gap-4">
            <Link href="#">Navigate</Link>
            <Link href="#">Home</Link>
            <Link href="#">Properties</Link>
            <Link href="#">Company</Link>
          </li>
        </ul>

        <ul>
          <li className="flex flex-col gap-4">
            <Link href="#">Support</Link>
            <Link href="#">Terms and conditions</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Contact us</Link>
          </li>
        </ul>

        <div className="">
          <h5 className="pb-3">Social</h5>
          <div className="icons flex gap-5">
            <Image
              src="/assets/facebook.png"
              alt="facebook"
              width={10}
              height={10}
            />
            <Image
              src="/assets/instagram.png"
              alt="instagram"
              width={20}
              height={20}
            />
            <Image
              src="/assets/twitter.png"
              alt="twitter"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
