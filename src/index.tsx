// import npm libs
import { useEffect } from 'react';
// import local libs
import { DashboardProps } from './types';
// import styles
import './Dashboard.scss';
import { useTheme } from './hooks/useTheme';

const Dashboard = (props: DashboardProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    window.localStorage.setItem('data-theme', theme);
  });

  return (
    <div className="root">
      {props.children}
    </div>
  );
};

export default Dashboard;
