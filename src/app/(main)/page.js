import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const datas = await res.json();

  const categories = datas.data.news_category;
  return categories;
};

export default async function Home() {
  const categories = await getCategory();
  console.log(categories);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      {/* all category  */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>

      {/* Dragon News Home  */}
      <div className="col-span-6">
        <h2 className="font-semibold">Dragon News Home</h2>
      </div>

      {/* Log in with  */}
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
