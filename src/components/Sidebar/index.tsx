// import npm libs
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import local libs
import { SidebarProps } from '../../types';
import Head from '../Head';
// import styles and img
import styles from './Sidebar.module.scss';

const Sidebar = (props: SidebarProps) => {
  // You can use other methods of change state
  // use var names: sidebarActive: boolean, setSidebarActive(boolean)
  const mobileSidebar = useMediaQuery({ query: '(max-width: 576px)' });
  const absSidebar = useMediaQuery({ query: '(max-width: 800px)' });
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);

  useEffect(() => {
    (mobileSidebar || absSidebar) && setSidebarActive(false);
  }, [absSidebar, mobileSidebar]);

  return (
    <aside className={sidebarActive ? styles.sidebarActive : styles.sidebarDisable}>
      <Head
        logo={sidebarActive || mobileSidebar}
        currentState={sidebarActive}
        setCurrentState={setSidebarActive}
        left={true}
      />
      {(!sidebarActive && mobileSidebar) || props.children}
    </aside>
  );
};

export default Sidebar;
