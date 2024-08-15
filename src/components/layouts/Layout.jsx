import Header from "./Header";
import { ThemeProvider } from "../../provider/theme";
import CategoryWidgetContextProvider from "../../provider/categoryWidget";

const Layout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <CategoryWidgetContextProvider>
        <Header />
        <main className="p-10 grid gap-6">{children}</main>
      </CategoryWidgetContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
