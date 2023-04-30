// import npm libs
// import local libs
import { useTheme } from '../../hooks/useTheme';
import { logoLight, logoDark } from '../../config';
import { HeadProps } from '../../types';
// import styles
import styles from './Head.module.scss';
import { ReactComponent as BarOpen } from '../../assets/img/barOpen.svg';
import { ReactComponent as BarClosed } from '../../assets/img/barClosed.svg';

const Head = (props: HeadProps) => {
  const { theme } = useTheme();

  return (
    <div className={props.left ? styles.head : styles.head + ' ' + styles.reverse}>
      {props.logo ? (
        <img src={theme === 'dark' ? logoDark : logoLight} alt="btn-icon" />
      ) : null}
      <button
        onClick={() => props.setCurrentState(!props.currentState)}
        className={styles.btnToogle}
      >
        {/* {props.left ? (
          props.currentState ? (
            <BarOpen className={styles.svgBtn} />
          ) : (
            <BarClosed className={styles.svgBtn} />
          )
        ) : props.currentState ? (
          <BarOpen className={styles.svgBtn + ' ' + styles.svgBtnLeft} />
        ) : (
          <BarClosed className={styles.svgBtn + ' ' + styles.svgBtnLeft} />
        )} */}
      </button>
    </div>
  );
};

export default Head;
