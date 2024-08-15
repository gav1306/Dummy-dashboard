import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import ManageWidgetDialog from "./ManageWidgetDialog";
import WidgetList from "./WidgetList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { CategoryWidgetContext } from "../provider/categoryWidget";

const Category = (props) => {
  const { name, id, widgets } = props;
  const { deleteCategory } = useContext(CategoryWidgetContext);

  return (
    <section className="w-full p-4 max-w-screen-2xl m-auto border rounded-md">
      <div className="flex flex-row justify-between items-center">
        <SectionHeading>{name}</SectionHeading>
        <div className="flex items-center gap-2">
          <ManageWidgetDialog
            categoryName={name}
            categoryId={id}
            widgets={widgets}
          >
            <Button variant="outline" size="sm" className="mx-4">
              Manage Widgets
            </Button>
          </ManageWidgetDialog>
          <Button
            variant="destructive"
            size="icon"
            className="h-8 w-8"
            onClick={deleteCategory.bind(null, id)}
          >
            <Cross1Icon />
          </Button>
        </div>
      </div>
      <WidgetList categoryId={id} widgets={widgets} />
    </section>
  );
};

export default Category;
