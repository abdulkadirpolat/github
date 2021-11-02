import React from "react";
import styles from "./error.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
function Error() {
  const { setUserName } = useUser();
  return (
    <div className={styles.error}>
      <div className={styles.error404}>404</div>
      <div className={styles.error_info}>Page Not Found</div>
      <NavLink
        activeClassName={styles.error_back}
        to="/"
        onClick={() => {
          setUserName("");
        }}
      >
        Back To HomePage
      </NavLink>
    </div>
  );
}

export default Error;
