import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategory, getNewsByCategory } from "@/lib/data";

const CategorizedNewsPageDynamic = async ({ params }) => {
  const { id } = await params;

  console.log(id);

  const categories = await getCategory();
  const news = await getNewsByCategory(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      {/* all category  */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>

      {/* Dragon News Home  */}
      <div className="col-span-6">
        <h2 className="font-semibold">Dragon News Home</h2>

        <div className="space-y-2">
          {news.length > 0? news.map((n) => (
            <NewsCard className="border p-2 rounded-md" key={n._id} news={n}>
              {n.title}
            </NewsCard>
          )):<div className="flex justify-center items-center h-[50vh] text-4xl font-bold">No news Found!</div>}
        </div>
      </div>

      {/* Log in with  */}
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default CategorizedNewsPageDynamic;
