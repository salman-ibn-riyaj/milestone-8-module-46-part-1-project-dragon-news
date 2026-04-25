import Image from "next/image";
import NavLinks from "./NavLinks";
import userAvatar from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 container mx-auto">
      <div></div>

      <ul className="flex items-center gap-4 text-gray-700">
        <li>
          <NavLinks href={"/"}>Home</NavLinks>
        </li>
        <li>
          <NavLinks href={"/about-us"}>About</NavLinks>
        </li>
        <li>
          <NavLinks href={"/career"}>Career</NavLinks>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt="user avatar"
          height={30}
          width={30}
        ></Image>

        <button className="p-1 px-3 rounded-md font-semibold bg-black text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
