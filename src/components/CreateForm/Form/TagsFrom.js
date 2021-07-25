import React from "react";
import { Field, Form, Formik } from "formik";
import { Input, Select, Button } from "@material-ui/core";
const usersSearchFormValidate = () => {
  const errors = {};
  return errors;
};

function TagsFrom() {
  const submit = (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(false);
  };
  return (
    <div>
        <label>Tags</label>
      <Formik
        initialValues={{ tag: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            
            <Field type="text" name="tag" as={Input} />

            <Button type="submit" disabled={isSubmitting}>
              Find
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TagsFrom;
