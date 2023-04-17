// import npm libs
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import local libs
import { SidebarProps } from "../../types";
import Head from "../Head";
// import styles and img
import styles from "./Sidebar.module.scss";

const Sidebar = (props: SidebarProps) => {
  // You can use other methods of change state
  // use var names: sidebarActive: boolean, setSidebatActive(boolean)
  const mobileSidebar = useMediaQuery({ query: "(max-width: 576px)" });
  const absSidebar = useMediaQuery({ query: "(max-width: 800px)" });
  const [sidebarActive, setSidebatActive] = useState(true);

  useEffect(() => {
    (mobileSidebar || absSidebar) && setSidebatActive(false);
  }, [absSidebar, mobileSidebar]);

  return sidebarActive ? (
    <aside className={styles.sidebar + " " + styles.sidebarActive}>
      <Head
        logo={true}
        icon={true}
        currentState={sidebarActive}
        setCurrentState={setSidebatActive}
      />
      {props.children}
    </aside>
  ) : mobileSidebar ? (
    <nav className={styles.sidebarMobile}>
      <Head
        logo={true}
        icon={true}
        currentState={sidebarActive}
        setCurrentState={setSidebatActive}
      />
    </nav>
  ) : (
    <button
      className={styles.sidebarBtn}
      onClick={() => setSidebatActive(true)}
    >
      <svg
        width="20"
        height="16"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0.75C0.5 0.335786 0.835785 0 1.25 0L13.4998 0C13.914 0 14.2498 0.335786 14.2498 0.75C14.2498 1.16421 13.914 1.5 13.4998 1.5H1.25C0.835785 1.5 0.5 1.16421 0.5 0.75Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 5.25C0.5 4.83579 0.835785 4.5 1.25 4.5H13.4998C13.914 4.5 14.2498 4.83579 14.2498 5.25C14.2498 5.66421 13.914 6 13.4998 6H1.25C0.835785 6 0.5 5.66421 0.5 5.25Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 10C0.5 9.58579 0.835785 9.25 1.25 9.25H13.4998C13.914 9.25 14.2498 9.58579 14.2498 10C14.2498 10.4142 13.914 10.75 13.4998 10.75H1.25C0.835785 10.75 0.5 10.4142 0.5 10Z"
        />
      </svg>
    </button>
  );
};

export default Sidebar;
