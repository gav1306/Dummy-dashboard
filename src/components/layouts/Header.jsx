import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import CategoryDialog from "../dialog/Category";

const Header = () => {
  return (
    <header className="sticky w-full top-0 z-50 shadow-md backdrop-blur">
      <nav className="flex items-center justify-between py-6 px-10 max-w-screen-2xl m-auto">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          DashBoard
        </h1>
        <CategoryDialog>
          <Button
            variant="outline"
            className="flex space-x-2 justify-center items-center"
          >
            <PlusCircledIcon />
            <span className="capitalize">add category</span>
          </Button>
        </CategoryDialog>
      </nav>
    </header>
  );
};

export default Header;
