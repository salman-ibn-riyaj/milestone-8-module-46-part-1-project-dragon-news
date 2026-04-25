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
        <h2 className="font-semibold mb-4">All Categories</h2>

        <ul className="flex flex-col gap-2 text-gray-500">
          {categories.map(category => <li className="bg-slate-200 p-2 rounded-md text-center" category={category} key={category.category_id}>{category.category_name}</li>)}
        </ul>
      </div>

      {/* Dragon News Home  */}
      <div className="col-span-6">
        <h2 className="font-semibold">Dragon News Home</h2>
      </div>

      {/* Log in with  */}
      <div className="col-span-3">
        <h2 className="font-semibold">Login With</h2>
      </div>
    </div>
  );
}
