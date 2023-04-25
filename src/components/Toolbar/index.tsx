// import npm libs
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import local libs
import { ToolbarProps } from '../../types';
import Head from '../Head';
// import styles
import styles from './Toolbar.module.scss';

const Toolbar = (props: ToolbarProps) => {
  // You can use other methods of change state
  // use var names: toolbarActive: boolean, setToolbarActive(boolean)
  const mobileToolbar = useMediaQuery({ query: '(max-width: 576px)' });
  const absToolbar = useMediaQuery({ query: '(max-width: 800px)' });
  const [toolbarActive, setToolbarActive] = useState<boolean>(true);

  useEffect(() => {
    (mobileToolbar || absToolbar) && setToolbarActive(false);
  }, [absToolbar, mobileToolbar]);

  return toolbarActive ? (
    <aside className={styles.toolbar + ' ' + styles.toolbarActive}>
      <Head
        logo={false}
        currentState={toolbarActive}
        setCurrentState={setToolbarActive}
        left={false}
        compact={false}
      />
      {props.children}
    </aside>
  ) : mobileToolbar ? (
    <nav className={styles.toolbarMobile}>
      <Head
        logo={false}
        currentState={toolbarActive}
        setCurrentState={setToolbarActive}
        left={false}
        compact={false}
      />
    </nav>
  ) : (
    <aside className={styles.toolbarDisable}>
      <Head
        logo={false}
        currentState={toolbarActive}
        setCurrentState={setToolbarActive}
        left={false}
        compact={true}
      />
      {props.children}
    </aside>
  );
};

export default Toolbar;

