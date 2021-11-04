import React from "react";
import classNames from "classnames";
import { Field, Form, Formik } from "formik";
import { SIGNUP_SCHEME } from "../../../validation/validationSchemas";
import MyInput from "../MyInput";
import TurquoiseButton from "components/Buttons/TurquoiseButton";
import SignGoogle from "components/Buttons/SignWithGoogle";
import styles from "./RegisterForm.module.sass";

const initialValues = {
  firstname: "",
  lastname: "",
  displayname: "",
  email: "",
  password: "",
  confPassword: "",
  picked: "",
  checked: "",
};

export default function RegisterForm(props) {
  const userSpecializations = classNames([styles.userSpec]);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm();
        console.log(values);
      }}
      validationSchema={SIGNUP_SCHEME}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className={styles.registerForm}>
              <div className={styles.signupInfo}>
                <h1>CREATE AN ACCOUNT</h1>
                <h4>We always keep your name and email address private.</h4>
              </div>
              <div className={styles.regForm}>
                <div className={styles.fildsLength}>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="First name"
                      type="text"
                      name="firstname"
                      id="left"
                      {...formikProps}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="Last name"
                      type="text"
                      name="lastname"
                      id="right"
                      {...formikProps}
                    />
                  </div>
                </div>
                <div className={styles.fildsLength}>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="Display name"
                      type="text"
                      name="displayname"
                      id="left"
                      {...formikProps}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="Email Address"
                      type="text"
                      name="email"
                      id="right"
                      {...formikProps}
                    />
                  </div>
                </div>
                <div className={styles.fildsLength}>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="left"
                      {...formikProps}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <MyInput
                      placeholder="Password Confirmation"
                      type="password"
                      name="confPassword"
                      id="right"
                      {...formikProps}
                    />
                  </div>
                </div>
              </div>

              <label className={userSpecializations}>
                <Field type="radio" name="picked" value="Buyer" />
                Join As a Buyer
                <p className={styles.choiceInfo}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </p>
              </label>

              <label className={userSpecializations}>
                <Field type="radio" name="picked" value="Seller" />
                Join As a Creative or Marketplace Seller
                <p className={styles.choiceInfo}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Mailing" />
                Allow Squadhelp to send marketing/promotional offers from time
                to time
              </label>

              <TurquoiseButton
                title={<h3>Create account</h3>}
                type={"submit"}
              />
              <div>
                <p className={styles.terms}>
                  By clicking this button, you agree to our{" "}
                  <span>
                    <a
                      className={styles.termsLink}
                      href="https://www.squadhelp.com/Terms&Conditions"
                    >
                      Terms of Service
                    </a>
                  </span>
                </p>
              </div>
              <SignGoogle title={"Sign up with Google"} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
