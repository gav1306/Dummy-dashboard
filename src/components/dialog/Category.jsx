import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCategoryForm from "../forms/AddCategory";
import { useState } from "react";

const CategoryDialog = ({ children }) => {
  const [open, setOpen] = useState(false);

  const closeDialogHandler = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
          <DialogDescription>Please enter category details</DialogDescription>
        </DialogHeader>
        <AddCategoryForm onClose={closeDialogHandler} />
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
