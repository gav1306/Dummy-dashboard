import { dummyCategories } from "../dummy";

export const saveCategoriesToLocal = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));
};

export const getCategoriesFromLocal = () => {
  const categories = localStorage.getItem("categories");
  if (!categories) {
    saveCategoriesToLocal(dummyCategories);
    return dummyCategories;
  }
  return JSON.parse(categories);
};
