// import npm libs
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import local libs
import { LinkListProps } from '../../types';
// import styles
import styles from './LinkList.module.scss';
import { ReactComponent as ArrorwList } from '../../assets/img/arrow.svg';

const LinkList = (props: LinkListProps) => {
  const [listVisible, setListVisible] = useState<boolean>(false);

  const lis: Array<JSX.Element> = [];

  // eslint-disable-next-line array-callback-return
  props.items.map((elem) => {
    lis.push(
      <li key={elem.path}>
        <Link className={styles.link} to={elem.path}>
          {elem.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <section className={styles.head}>
        <span className={styles.title}>{props.title}</span>
        <button
          aria-label={props.items[0].name}
          onClick={() => setListVisible(!listVisible)}
          className={listVisible ? styles.toggled : ''}
        >
          <ArrorwList className={styles.svgBtn}/>
        </button>
      </section>
      {listVisible? <ul className={styles.list}>{lis}</ul>: null}
    </>
  );
};

export default LinkList;

