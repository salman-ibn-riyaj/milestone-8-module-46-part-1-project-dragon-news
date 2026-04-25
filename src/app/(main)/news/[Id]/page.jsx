import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { Id } = await params;
  console.log(Id);

  const news = await getNewsById(Id);
  console.log(news);

   return {
    title: news.title,
    description: news.details,
  }
};

const NewsDetailsPage = async ({ params }) => {
  const { Id } = await params;
//   console.log(Id, "params id");
  const news = await getNewsById(Id);
//   console.log(news);
  return (
    <div className="card max-w-5xl mx-auto bg-base-100 shadow-sm my-10">
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image src={news.image_url} alt="" width={500} height={400}></Image>
        </figure>

        <p className="">{news.details}</p>

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

          <Link href={`/category/${news.category_id}`}>
            <button className="btn">See all news of this category</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
