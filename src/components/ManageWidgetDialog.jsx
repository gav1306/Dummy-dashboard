import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { CategoryWidgetContext } from "../provider/categoryWidget";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ManageWidgetDialog = ({
  children,
  categoryName,
  categoryId,
  widgets,
}) => {
  const { updateWidgets } = useContext(CategoryWidgetContext);
  const [widgetList, setWidgetList] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const updateWidgetVisibilityHandler = (widgetId) => {
    const updatedWidgets = [...widgetList];
    const selectedWidget = updatedWidgets.find((widget) => {
      return widget.id === widgetId;
    });
    selectedWidget.isVisible = !selectedWidget.isVisible;

    setWidgetList(updatedWidgets);
  };

  const saveHandler = () => {
    updateWidgets(widgetList, categoryId);
    setOpen(false);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (open) {
      setSearch("");
      setWidgetList(structuredClone(widgets));
    }
  }, [open, widgets]);

  const filteredWidgets = widgetList.filter((widget) => {
    return widget.name.toLowerCase().startsWith(search.toLowerCase());
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-[400px] h-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="capitalize">{categoryName}</SheetTitle>
          <Input placeholder="search your widgets" onChange={searchHandler} />
          <SheetDescription>Your widgets:</SheetDescription>
        </SheetHeader>
        <div className="flex-1">
          <div className="grid gap-4 py-4">
            {filteredWidgets.length ? (
              filteredWidgets.map((widget) => {
                return (
                  <div className="flex items-center space-x-2" key={widget.id}>
                    <Checkbox
                      id={widget.id}
                      onCheckedChange={updateWidgetVisibilityHandler.bind(
                        null,
                        widget.id
                      )}
                      checked={widget.isVisible}
                    />
                    <label
                      htmlFor={widget.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      {widget.name}
                    </label>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col justify-center items-center">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>no widgets found</span>
              </div>
            )}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive">Cancel</Button>
          </SheetClose>
          <Button onClick={saveHandler}>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ManageWidgetDialog;
