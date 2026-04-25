export const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const datas = await res.json();

  const categories = datas.data.news_category;
  return categories;
};


export const getNewsByCategory = async (catergory_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catergory_id}`,
  );

  const datas = await res.json();
  const data = datas.data;
  return data;
};