import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiSquareAlert } from "react-icons/ci";

const Card = ({ info }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="imgContainer w-full h-[300px] aspect-square relative flex-1">
        <Image
          src={info.image}
          layout="fill"
          alt=""
          className="object-cover rounded-md"
        />
      </div>
      <div className="card-info flex flex-col gap-2 bg-white rounded-xl shadow-md p-3 absolute bottom-[-10px] w-full">
        <span className="price font-bold">
          {info.price.toLocaleString()} EGP / mo
        </span>
        <div className="location  flex gap-3 items-center text-[#6D7888]">
          <CiLocationOn />
          <span>{info.address}</span>
        </div>
        <div className="card-details flex justify-between text-[#6D7888]">
          <div className="br flex gap-2 items-center">
            <IoBedOutline />
            <span>{info.bedrooms_no} BR(s)</span>
          </div>
          <div className="bath flex gap-2 items-center">
            <LuBath />
            <span>{info.bathrooms_no} Bath(s)</span>
          </div>
          <div className="sqm flex gap-2 items-center">
            <CiSquareAlert />
            <span>{info.area} sqm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
