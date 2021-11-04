import React from "react";
import { Field, Form, Formik } from "formik";
import { LOGIN_SCHEME } from "validation/validationSchemas";
import MyInput from "../MyInput";
import styles from "./LoginForm.module.sass";
import SignGoogle from "components/Buttons/SignWithGoogle";
import TurquoiseButton from "components/Buttons/TurquoiseButton";

const initialValues = {
  email: "",
  password: "",
  checked: "",
};

export default function LoginForm(props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm();
        console.log(values);
      }}
      validationSchema={LOGIN_SCHEME}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className={styles.loginForm}>
              <h1>LOGIN TO YOUR ACCOUNT</h1>

              <div>
                <div className={styles.inputContainer}>
                  <MyInput
                    type="text"
                    name="email"
                    id="left"
                    placeholder="Email address"
                    {...formikProps}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <MyInput
                    type="password"
                    name="password"
                    id="left"
                    placeholder="Password"
                    {...formikProps}
                  />
                </div>
              </div>
              <div className={styles.rememFogot}>
                <label>
                  <Field type="checkbox" name="checked" value="RememberMe" />
                  Remember Me
                </label>
                <a
                  className={styles.linkStyle}
                  href="https://www.squadhelp.com/forgot_password.php"
                >
                  Forgot Password
                </a>
              </div>
              <TurquoiseButton title={<h3>LOGIN</h3>} type={"submit"} />
              <SignGoogle title={"Sign in with Google"} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
