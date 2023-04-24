// import npm libs
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import local libs
import { AccountListProps } from '../../types';
// import styles
import styles from './AccountList.module.scss';

const AccountList = () => {
  const [listVisible, setListVisible] = useState<boolean>(true);

  return (
    <>
      <section>
        <span className={styles.title}>Account</span>
        <button
          onClick={() => setListVisible(!listVisible)}
          className={listVisible ? styles.toggled : ''}
        >
          1
        </button>
      </section>
      <ul className={styles.list}>
        {listVisible ? (
          <>
            <li key="Home">
              <Link className={styles.liInner} to={'/'}>
                Home
              </Link>
            </li>
            <li key="View profile">
              <Link className={styles.liInner} to={'/account/view'}>
                View profile
              </Link>
            </li>
            <li key="Edit account">
              <Link className={styles.liInner} to={'/account/edit'}>
                Edit account
              </Link>
            </li>
            <li key="Settings">
              <Link className={styles.liInner} to={'/account/settings'}>
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

