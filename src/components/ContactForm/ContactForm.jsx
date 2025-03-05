import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';
import { useId } from 'react';

export default function ContactForm() {
  const fieldId = useId();

  return (
    <Formik>
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={fieldId + 'name'}>
            Name
          </label>
          <Field
            className={styles.input}
            type="text"
            name="name"
            id={fieldId + 'name'}
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={fieldId + 'number'}>
            Number
          </label>
          <Field
            className={styles.input}
            type="number"
            name="number"
            id={fieldId + 'number'}
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
