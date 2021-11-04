import React from "react";
import { Link } from "react-router-dom";
import SignLogin from "components/Buttons/SignLogin";
import styles from "../PageStyle.module.sass";
import RegisterForm from "components/forms/RegisterForm";

export default function SignUpPage() {
  return (
    <div className={styles.pageStyle}>
      <div className={styles.header}>
        <Link to="/">
          <img src="/images/logo.png" alt="LOGO" className={styles.logo} />
        </Link>
        <SignLogin way={"/"} linkBody={"Login"} />
      </div>

      <RegisterForm />
    </div>
  );
}
