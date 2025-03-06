import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';
import { useId } from 'react';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must contain at least 3 characters!')
    .max(50, 'Name must be less than 50 characters!')
    .required('Required field!'),
  number: Yup.string()
    .min(3, 'The phone number must consist of at least 3 digits!')
    .max(50, 'Too long number')
    .required('Required field!'),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const hundleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name.toLowerCase().trim(),
      number: values.number.trim(),
    };

    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hundleSubmit}
      validationSchema={contactSchema}
    >
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
            autoComplete="name"
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor={fieldId + 'number'}>
            Number
          </label>
          <Field
            className={styles.input}
            type="text"
            name="number"
            id={fieldId + 'number'}
            autoComplete="tel"
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
