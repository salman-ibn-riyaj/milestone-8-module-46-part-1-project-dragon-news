import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image src={news.image_url} alt="" width={500} height={400}></Image>
        </figure>

        <p className="line-clamp-3">{news.details}</p>

        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FaStar /> {news.rating.number}
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              {news.total_view}
            </div>
          </div>

          <Link href={`/news/${news._id}`}><button className="btn">Read More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
