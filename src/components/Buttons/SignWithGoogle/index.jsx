import React from "react";
import classNames from "classnames";
import google from "../../../assets/icons/google.svg";
import styles from "../Buttons.module.sass";

export default function SignGoogle(props) {
  const signGoogle = classNames(
    [styles.signGoogle],
    [styles.btn],
    [styles.linkStyle]
  );
  return (
    <a
      className={signGoogle}
      href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=auto&flowName=GeneralOAuthFlow"
    >
      <img src={google} alt="google" />
      {props.title}
    </a>
  );
}
