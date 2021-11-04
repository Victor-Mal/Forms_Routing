import React from "react";
import classNames from "classnames";
import styles from "../Buttons.module.sass";

export default function TurquoiseButton(props) {
  const turButton = classNames([styles.login], [styles.btn], [styles.linkStyle]);
  return (
    <button className={turButton} type={props.type}>
      {props.title}
    </button>
  );
}
