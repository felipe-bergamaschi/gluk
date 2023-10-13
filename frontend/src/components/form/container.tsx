import { ReactNode } from 'react';
import { Formik, Form, FormikHelpers, FormikValues } from 'formik';

type Props = {
  initialValues?: FormikValues;
  onSubmit: (values: any, formikHelpers?: FormikHelpers<FormikValues>) => void | Promise<any>;
  children: ReactNode;
};

function FormContainer({ initialValues, onSubmit, children }: Props) {
  return (
    <Formik
      initialValues={initialValues ?? {}}
      onSubmit={onSubmit}
    >
      <Form>
        {children}
      </Form>
    </Formik>
  );
}

export { FormContainer };
