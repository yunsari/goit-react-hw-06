import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required("required")
    .min(3, "At least 3 characters")
    .max(30, "Maximum 50 characters"),
  number: Yup.string()
    .required("required")
    .min(9, "At least 9 characters")
    .max(9, "Maximum 9 characters"),
});

const ContactForm = ({ onAdd }) => {
  return (
    <div className={styles.frame}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const contact = {
            id: nanoid(),
            name: values.name.trim(),
            number: values.number.trim(),
          };
          const ok = onAdd(contact);
          setSubmitting(false);
          if (ok) resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <label>
              Name:
              <Field name="name" />
              <ErrorMessage
                name="name"
                component="div"
              />
            </label>

            <label>
              Number: 
              <Field name="number" />
              <ErrorMessage
                name="number"
                component="div"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;