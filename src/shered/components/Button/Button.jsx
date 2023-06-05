import styles from "./button.module.scss";

const Button = ({ onClick, children, isActive }) => {
  return (
    <button
      className={
        !isActive ? `${styles.button}` : `${styles.button} ${styles.active}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
