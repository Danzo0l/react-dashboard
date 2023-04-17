// import npm libs
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import local libs
import { DashboardProps } from "./types";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
// import styles
import "./Dashboard.scss";
import { useTheme } from "./hooks/useTheme";

const Dashboard = (props: DashboardProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    window.localStorage.setItem("data-theme", theme);
  });

  return (
    <div className="root">
      <BrowserRouter>{props.children}</BrowserRouter>
    </div>
  );
};

export default Dashboard;
export { Sidebar, Toolbar, Content };
