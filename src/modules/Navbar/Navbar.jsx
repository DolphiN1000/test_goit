import { NavLink } from "react-router-dom";
import navItems from "./items";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const elements = navItems.map(({ id, text, link }) => (
    <li key={id} className={styles.list_item}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <div className={styles.navbar}>{elements}</div>;
};

export default Navbar;