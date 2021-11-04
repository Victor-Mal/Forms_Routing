import React from "react";
import { Link } from "react-router-dom";
import styles from "../PageStyle.module.sass";
import SignLogin from "components/Buttons/SignLogin";

import LoginForm from "components/forms/LoginForm";

export default function SignInPage() {
  return (
    <div className={styles.pageStyle}>
      <div className={styles.header}>
        <Link to="/">
          <img src="/images/logo.png" alt="LOGO" className={styles.logo} />
        </Link>
        <SignLogin way={"/signup"} linkBody={"Signup"} />
      </div>

      <LoginForm />
    </div>
  );
}
