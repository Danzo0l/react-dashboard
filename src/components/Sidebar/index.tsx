// import npm libs
import React from 'react';
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
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {
    (mobileSidebar || absSidebar) && setSidebarActive(false);
  }, [absSidebar, mobileSidebar]);

  return sidebarActive ? (
    <aside className={styles.sidebar + ' ' + styles.sidebarActive}>
      <Head
        logo={true}
        currentState={sidebarActive}
        setCurrentState={setSidebarActive}
        left={true}
        compact={false}
      />
      {props.children}
    </aside>
  ) : mobileSidebar ? (
    <nav className={styles.sidebarMobile}>
      <Head
        logo={true}
        currentState={sidebarActive}
        setCurrentState={setSidebarActive}
        left={true}
        compact={false}
      />
    </nav>
  ) : (
    <aside className={styles.sidebarDisable}>
      <Head
        logo={true}
        currentState={sidebarActive}
        setCurrentState={setSidebarActive}
        left={true}
        compact={true}
      />
      {props.children}
    </aside>
  );
};

export default Sidebar;

