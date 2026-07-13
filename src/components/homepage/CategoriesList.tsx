import { categories, type Category } from "../../data/categories";
import Tag from "../UI/Tag";

type FilterCategory = "All" | Category;

type CategoriesListProps = {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
};

export default function CategoriesList({ activeCategory, onCategoryChange }: CategoriesListProps) {
  const filterCategories: FilterCategory[] = ["All", ...categories];

  return (
    <div className="flex flex-wrap justify-end gap-(--spacing-xs)">
      {filterCategories.map((category) => {
        const selected = activeCategory === category;

        return (
          <Tag key={category} selected={selected} onSelect={() => onCategoryChange(category)}>
            {category}
          </Tag>
        );
      })}
    </div>
  );
}
