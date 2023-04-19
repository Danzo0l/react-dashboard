// import npm libs
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import local libs
import { DashboardProps } from "./types";
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
