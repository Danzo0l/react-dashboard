// import npm libs
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// import local libs
import { ToolbarProps } from '../../types';
import Head from '../Head';
// import styles
import styles from './Toolbar.module.scss';

const Toolbar = (props: ToolbarProps) => {
  const mobileToolbar = useMediaQuery({ query: '(max-width: 576px)' });
  const absToolbar = useMediaQuery({ query: '(max-width: 800px)' });
  const [toolbarActive, setToolbarActive] = useState<boolean>(true);

  useEffect(() => {
    (mobileToolbar || absToolbar) && setToolbarActive(false);
  }, [absToolbar, mobileToolbar]);

  return (
    <aside className={toolbarActive ? styles.toolbarActive : styles.toolbarDisable}>
      <Head
        logo={false}
        currentState={toolbarActive}
        setCurrentState={setToolbarActive}
        left={false}
      />
      {props.children}
    </aside>
  );
};

export default Toolbar;
