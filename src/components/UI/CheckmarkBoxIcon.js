import { AiOutlineCheck, AiOutlineBorder } from "react-icons/ai";

import styles from "./CheckmarkBoxIcon.module.scss";

function CheckmarkBoxIcon(props) {
  return (
    <i onClick={props.onClick} className={styles.icon}>
      <AiOutlineCheck
        className={`${styles.checkmarkIcon} ${
          props.status ? styles.completed : ""
        }`}
      />
      <AiOutlineBorder
        className={`${styles.boxIcon} ${
          props.status ? styles.completedColor : ""
        }`}
      />
    </i>
  );
}

export default CheckmarkBoxIcon;
