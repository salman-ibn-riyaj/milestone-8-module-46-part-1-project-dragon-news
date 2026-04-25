import Link from "next/link";

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
      <h2 className="font-semibold mb-4">All Categories</h2>

      <ul className="flex flex-col gap-2 text-gray-500">
        {categories.map((category) => (
          <li
            className={`${activeId===category.category_id && 'bg-slate-200'} rounded-md text-center`}
            category={category}
            key={category.category_id}
            
          >
            <Link className="p-2 block" href={`/category/${category.category_id}`}>{category.category_name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
