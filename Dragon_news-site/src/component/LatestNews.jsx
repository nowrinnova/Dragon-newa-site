import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function LatestNews() {
  return (
    <div className="flex gap-4 justify-center items-center bg-gray-200 my-4 p-2">
      <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to={"/"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum optio
          doloremque quia. Quas unde qui illum quidem ipsam, pariatur quibusdam.
        </Link>
        <Link to={"/"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum optio
          doloremque quia. Quas unde qui illum quidem ipsam, pariatur quibusdam.
        </Link>
        <Link to={"/"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum optio
          doloremque quia. Quas unde qui illum quidem ipsam, pariatur quibusdam.
        </Link>
      </Marquee>
    </div>
  );
}
