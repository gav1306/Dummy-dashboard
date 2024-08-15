import { createContext, useEffect, useState } from "react";
import { generateId } from "../utils/helper";
import {
  getCategoriesFromLocal,
  saveCategoriesToLocal,
} from "../utils/storage";

export const CategoryWidgetContext = createContext({
  categories: null,
  addCategory: () => {},
  addWidget: () => {},
  toggleWidget: () => {},
  updateWidgets: () => {},
  deleteCategory: () => {},
});

export default function CategoryWidgetContextProvider({ children }) {
  const [categories, setCategories] = useState(null);

  const addCategoryHandler = (data) => {
    const { name } = data;
    const category = {
      name,
      id: generateId(),
      widgets: [],
    };
    setCategories((prevCategories) => {
      return [...prevCategories, category];
    });
  };

  const addWidgetHandler = (data, categoryId) => {
    const { name, description } = data;
    const widget = {
      name,
      description,
      id: generateId(),
      isVisible: true,
    };

    const updatedCategories = [...categories];

    const selectedCategory = updatedCategories.find((category) => {
      return category.id === categoryId;
    });

    selectedCategory?.widgets?.push(widget);
    setCategories(updatedCategories);
  };

  const toggleWidgetHandler = ({ categoryId, id }) => {
    const updatedCategories = [...categories];

    const selectedCategory = updatedCategories.find((category) => {
      return category.id === categoryId;
    });

    const selectedWidget = selectedCategory.widgets.find((widget) => {
      return widget.id === id;
    });
    selectedWidget.isVisible = !selectedWidget.isVisible;
    setCategories(updatedCategories);
  };

  const updateWidgetsHandler = (widgetList, categoryId) => {
    const updatedCategories = [...categories];

    const selectedCategory = updatedCategories.find((category) => {
      return category.id === categoryId;
    });

    selectedCategory.widgets = widgetList;
    setCategories(updatedCategories);
  };

  const deleteCategoryHandler = (categoryId) => {
    let updatedCategories = [...categories];

    updatedCategories = updatedCategories.filter((category) => {
      return category.id !== categoryId;
    });
    setCategories(updatedCategories);
  };

  useEffect(() => {
    if (categories) {
      saveCategoriesToLocal(categories);
    }
  }, [categories]);

  useEffect(() => {
    setCategories(getCategoriesFromLocal());
  }, []);

  const ctxValue = {
    categories,
    addCategory: addCategoryHandler,
    addWidget: addWidgetHandler,
    toggleWidget: toggleWidgetHandler,
    updateWidgets: updateWidgetsHandler,
    deleteCategory: deleteCategoryHandler,
  };

  return (
    <CategoryWidgetContext.Provider value={ctxValue}>
      {children}
    </CategoryWidgetContext.Provider>
  );
}
