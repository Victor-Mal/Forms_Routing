import React from "react";
import { ErrorMessage, Field } from "formik";
import cn from "classnames";
import styles from "./MyInput.module.sass";

export default function MyInput( { name, id, errors, touched,values,  ...rest }) {
  const classNames = cn(styles.input, {
    [styles.valid]: (touched[name] && !errors[name]),
    [styles.invalid]: touched[name] && errors[name],
  });
  const clNames = cn(styles.errorMsg, {
    [styles.left]:(id ==='left'),
    [styles.right]:(id ==='right')
  })
  
  return (
    false,
    (
      <label className={styles.label}>
        <Field name={name} {...rest} className={classNames} />
        <ErrorMessage component = "span" name={name} className={clNames} />
      </label>
    )
  );
}
