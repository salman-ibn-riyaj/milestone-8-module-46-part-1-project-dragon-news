import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import ClassImg from '../../../assets/class.png'
import Swimming from '../../../assets/swimming.png'
import PlayGround from '../../../assets/playground.png'
import Bg from '../../../assets/bg.png'

const RightSideBar = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Login With</h2>

      <div className="flex flex-col gap-1">
        <button className="btn flex items-center gap-2 text-blue-500">
          {" "}
          <FaFacebookF />
          Log in with Facebook
        </button>

        <button className="btn flex items-center gap-2">
          <FaGithub />
          Log in with Github
        </button>
      </div>

      <h2 className="font-semibold my-4">Find Us On</h2>

      <div>
        <div className="flex items-center gap-2 border border-gray-300 p-2">
          <FaFacebookF className="bg-slate-200 p-1 rounded-md text-blue-500" />{" "}
          <h4 className="text-gray-500">Facebook</h4>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2">
          <FaTwitter className="bg-slate-200 p-1 rounded-md text-blue-300" />
          <h4 className="text-gray-500">Twitter</h4>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2">
          <FaInstagram className="bg-slate-200 p-1 rounded-md text-red-500" />
          <h4 className="text-gray-500">Instagram</h4>
        </div>
      </div>

      {/* Q zone  */}
      <div className="bg-slate-200 p-1 mt-5">
        <h2 className="font-semibold my-4">Q Zone</h2>

        <div>
            <Image src={ClassImg} alt="" width={400} height={400}></Image>
            <Image src={Swimming} alt="" width={400} height={400}></Image>
            <Image src={PlayGround} alt="" width={400} height={400}></Image>
            <Image className="pt-2" src={Bg} alt="" width={400} height={400}></Image>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
