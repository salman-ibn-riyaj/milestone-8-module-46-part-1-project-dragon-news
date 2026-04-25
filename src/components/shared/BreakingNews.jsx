import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    id: 1,
    title:
      "Dragon Strikes Again: Massive Wildfire Spreads Across Three Districts, Thousands Evacuated",
  },
  {
    id: 2,
    title:
      "Exclusive: Government Announces Emergency Budget Plan Amid Rising Inflation Crisis",
  },
  {
    id: 3,
    title:
      "BREAKING: Earthquake of 6.8 Magnitude Hits Coastal Region, Tsunami Warning Issued",
  },
];
const BreakingNews = () => {


  return <Marquee>

    {
        breakingNews.map(news => <span className="mr-10" key={news.id} news={news}>{news.title}</span>)
    }
  </Marquee>;
};

export default BreakingNews;
