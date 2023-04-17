// import styles and img
import avatar from "../../assets/img/avatar.png";
import styles from "./Account.module.scss";

const Account = () => {
  // console.log("Account --> rendered");
  return (
    <div className={styles.account}>
      <img src={avatar} height="48px" width="48px" alt="avatar" />
      <section>
        <span className={styles.username}>UserNickName</span>
        <span className={styles.mail}>useremail@mail.mail</span>
      </section>
    </div>
  );
};

export default Account;
