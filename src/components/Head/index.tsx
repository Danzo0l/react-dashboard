// import npm libs
// import local libs
import { useTheme } from "../../hooks/useTheme";
import { logoLight, logoDark } from "../../config";
import { HeadProps } from "../../types";
// import styles
import styles from "./Head.module.scss";

const list = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 17.25C3.75 16.8358 4.08579 16.5 4.5 16.5H19.5C19.9142 16.5 20.25 16.8358 20.25 17.25C20.25 17.6642 19.9142 18 19.5 18H4.5C4.08579 18 3.75 17.6642 3.75 17.25Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 11.25C3.75 10.8358 4.08579 10.5 4.5 10.5H19.5C19.9142 10.5 20.25 10.8358 20.25 11.25C20.25 11.6642 19.9142 12 19.5 12H4.5C4.08579 12 3.75 11.6642 3.75 11.25Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5.25C3.75 4.83579 4.08579 4.5 4.5 4.5H19.5C19.9142 4.5 20.25 4.83579 20.25 5.25C20.25 5.66421 19.9142 6 19.5 6H4.5C4.08579 6 3.75 5.66421 3.75 5.25Z"
    />
  </svg>
);

const layers = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.3529 2.33824C12.1324 2.22059 11.8676 2.22059 11.6471 2.33824L0.397059 8.33824C0.152661 8.46858 0 8.72302 0 9C0 9.27698 0.152661 9.53142 0.397059 9.66176L4.78125 12L0.397059 14.3382C0.152661 14.4686 0 14.723 0 15C0 15.277 0.152661 15.5314 0.397059 15.6618L11.6471 21.6618C11.8676 21.7794 12.1324 21.7794 12.3529 21.6618L23.6029 15.6618C23.8473 15.5314 24 15.277 24 15C24 14.723 23.8473 14.4686 23.6029 14.3382L19.2188 12L23.6029 9.66176C23.8473 9.53142 24 9.27698 24 9C24 8.72302 23.8473 8.46858 23.6029 8.33824L12.3529 2.33824ZM17.625 12.85L21.6562 15L12 20.15L2.34375 15L6.375 12.85L11.6471 15.6618C11.8676 15.7794 12.1324 15.7794 12.3529 15.6618L17.625 12.85ZM12 14.15L2.34375 9L12 3.85L21.6562 9L12 14.15Z" />
  </svg>
);

const Head = (props: HeadProps) => {
  const { theme } = useTheme();

  return (
    <div className={styles.head}>
      {props.logo ? (
        <img src={theme === "dark" ? logoDark : logoLight} alt="btn-icon" />
      ) : (
        <></>
      )}
      <button
        onClick={() => props.setCurrentState(!props.currentState)}
        className={styles.btnToogleSidebar}
      >
        {props.icon ? list : layers}
      </button>
    </div>
  );
};

export default Head;
