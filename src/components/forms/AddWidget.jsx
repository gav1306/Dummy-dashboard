import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { widgetSchema } from "./schema";
import { CategoryWidgetContext } from "../../provider/categoryWidget";
import { useContext } from "react";

const AddWidgetForm = ({ onClose, categoryId }) => {
  const { addWidget } = useContext(CategoryWidgetContext);

  const form = useForm({
    resolver: zodResolver(widgetSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(data) {
    addWidget(data, categoryId);
    form.reset();
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="widget name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="widget description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3">
          <Button type="button" variant="destructive">
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
};

export default AddWidgetForm;
