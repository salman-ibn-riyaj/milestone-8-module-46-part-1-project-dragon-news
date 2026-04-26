"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import userAvatar from "../../assets/user.png";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  return (
    <div className="flex justify-between gap-4 container mx-auto my-10">
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
        {user ? (
          <>
            <h2>Hi!{user.name}</h2>
            <Image
              className="rounded-full"
              src={user.image?.startsWith("http") ? user.image : userAvatar}
              alt="user avatar"
              height={30}
              width={30}
            ></Image>
            <button onClick={() => authClient.signOut()} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"}>
              <button className="p-1 px-3 rounded-md font-semibold bg-black text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
