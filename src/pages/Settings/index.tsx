// import npm libs
// import local libs
import { useTheme } from "../../hooks/useTheme";
// import styles
import styles from "./Settings.module.scss";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark"];

  return (
    <div className={styles.Settings}>
      <h3>Settings</h3>
      <button
        style={{ color: "#121212" }}
        onClick={() => setTheme(theme === themes[0] ? themes[1] : themes[0])}
      >
        Toogle theme
      </button>
    </div>
  );
};

export default Settings;
