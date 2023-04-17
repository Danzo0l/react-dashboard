// import npm libs
import { useState } from "react";
import { Link } from "react-router-dom";
// import local libs
// import styles
import styles from "./AccountList.module.scss";

const AccountList = () => {
  const [listVisible, setListVisible] = useState<boolean>(true);

  return (
    <>
      <section>
        <span className={styles.title}>Account</span>
        <button
          onClick={() => setListVisible(!listVisible)}
          className={listVisible ? styles.toggled : ""}
        >
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.23013 0.225302C0.536971 -0.0751008 1.03446 -0.0751008 1.3413 0.225302L10.7699 9.45607C11.0767 9.75648 11.0767 10.2435 10.7699 10.5439L1.3413 19.7747C1.03446 20.0751 0.536971 20.0751 0.23013 19.7747C-0.0767101 19.4743 -0.0767101 18.9872 0.23013 18.6868L9.10312 10L0.23013 1.31316C-0.0767101 1.01276 -0.0767101 0.525706 0.23013 0.225302Z"
            />
          </svg>
        </button>
      </section>
      <ul className={styles.list}>
        {listVisible ? (
          <>
            <li key="Home">
              <Link className={styles.liInner} to={"/"}>
                Home
              </Link>
            </li>
            <li key="View profile">
              <Link className={styles.liInner} to={"/account/view"}>
                View profile
              </Link>
            </li>
            <li key="Edit account">
              <Link className={styles.liInner} to={"/account/edit"}>
                Edit account
              </Link>
            </li>
            <li key="Settings">
              <Link className={styles.liInner} to={"/account/settings"}>
                Settings
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
};

export default AccountList;
