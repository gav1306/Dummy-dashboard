import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddWidgetForm from "../forms/AddWidget";
import { useState } from "react";

const WidgetDialog = ({ children, categoryId }) => {
  const [open, setOpen] = useState(false);

  const closeDialogHandler = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new widget</DialogTitle>
          <DialogDescription>Please enter widget details</DialogDescription>
        </DialogHeader>
        <AddWidgetForm onClose={closeDialogHandler} categoryId={categoryId} />
      </DialogContent>
    </Dialog>
  );
};

export default WidgetDialog;
