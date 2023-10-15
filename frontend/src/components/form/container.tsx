import { ReactNode } from 'react';
import { FormikHelpers, FormikValues, useFormik } from 'formik';

import { createContext as createContextSelector, useContextSelector } from 'use-context-selector';

type ContextData = {
  formik: any;
};

type Props = {
  initialValues?: FormikValues;
  onSubmit: (values: any, formikHelpers?: FormikHelpers<any>) => void | Promise<any>;
  children: ReactNode;
  className?: string;
};

const FormikContext = createContextSelector({} as ContextData);

function FormContainer(props: Props) {
  const formik = useFormik({
    initialValues: props.initialValues || {},
    onSubmit: props.onSubmit,
  });

  return (
    <FormikContext.Provider value={{ formik }}>
      <form className={props.className} onSubmit={formik.handleSubmit}>
        {props.children}
      </form>
    </FormikContext.Provider>
  );
}

export function useForm() {
  const formik = useContextSelector(FormikContext, (context) => context.formik);

  return {
    formik
  };
}

export { FormContainer };
