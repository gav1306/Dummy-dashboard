import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import WidgetDialog from "./dialog/Widget";

const AddWidget = ({ categoryId }) => {
  return (
    <WidgetDialog categoryId={categoryId}>
      <Button
        className="w-[350px] h-[200px] border rounded-lg border-dashed border-slate-300 flex gap-2 justify-center items-center"
        variant="ghost"
      >
        <PlusCircledIcon className="text-slate-600" />
        <span className="text-slate-600">Add Widget</span>
      </Button>
    </WidgetDialog>
  );
};

export default AddWidget;
