import React from "react";
import { Link } from "react-router-dom";
import styles from "../Buttons.module.sass";
import classNames from "classnames";

export default function SignLogin(props) {
  
  const headerButt = classNames([styles.border], [styles.linkStyle])
  return <Link className={headerButt} to={props.way}>{props.linkBody}</Link>;
}
