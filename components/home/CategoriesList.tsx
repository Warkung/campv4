import Link from "next/link";
import { categories } from "../../utils/categories";

function CategoriesList({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) {
  const searchTerm = search ? `?search=${search}` : "";
  return (
    <section className= " flex flex-wrap justify-center mb-5">
      {categories.map((item) => {
        const isActive = category === item.label;
        const className = `flex flex-col items-center cursor-pointer hover:scale-125 duration-100 pb-2 w-16 pt-3 rounded-2xl ${
          isActive ? "text-black bg-amber-700 " : ""
        }`;
        return (
          <Link
            href={`/?category=${item.label}${searchTerm}`}
            key={item.label}
            className={className}
          >
            <item.icon className="w-5 h-5" />
            <p className="text-sm mt-1 capitalize">{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
}
export default CategoriesList;
