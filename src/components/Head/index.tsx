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
    <div className={props.left? styles.head : styles.head + ' ' + styles.reverse}>
      {props.logo ? (
        !props.compact ? (
          <img src={theme === 'dark' ? logoDark : logoLight} alt="btn-icon" />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      <button
        onClick={() => props.setCurrentState(!props.currentState)}
        className={props.compact? styles.btnToogle + ' ' + styles.compact: styles.btnToogle}
      >
        {props.left ? (
          <BarOpen className={styles.svgBtn} />
        ) : (
          <BarOpen className={styles.svgBtn + ' ' + styles.svgBtnLeft} />
        )}
      </button>
    </div>
  );
};

export default Head;

