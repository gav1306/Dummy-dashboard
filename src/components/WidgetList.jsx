import WidgetCard from "./WidgetCard";
import AddWidgetCard from "./AddWidgetCard";

const WidgetList = ({ widgets, categoryId }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 p-3 rounded-lg">
      {!!widgets.length &&
        widgets.map((widget) => {
          if (!widget.isVisible) {
            return null;
          }
          return (
            <WidgetCard key={widget.id} {...widget} categoryId={categoryId} />
          );
        })}
      <AddWidgetCard categoryId={categoryId} />
    </div>
  );
};

export default WidgetList;
