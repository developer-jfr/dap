import React from "react";
import { Field, Form, Formik } from "formik";
import { Input, Select, Button } from "@material-ui/core";
import {useDispatch} from 'react-redux'

const usersSearchFormValidate = () => {
  const errors = {};
  return errors;
};

function FileForm() {
    
  const submit = (values, { setSubmitting }) => {
    

    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={{ file: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
              <label>File Name</label>
            <Field type="text" name="file" as={Input} />

            <Button type="submit" disabled={isSubmitting}>
              Find
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FileForm;
