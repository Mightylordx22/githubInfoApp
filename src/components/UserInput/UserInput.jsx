import React from "react";
import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

import fetch from "node-fetch";

const fetchGithubData = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
};

export const UserInput = ({ setData }) => {
  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Please enter a string"),
      })}
      onSubmit={(values) => {
        fetchGithubData(values.username).then(async (data) => {
          setData(JSON.stringify(data));
        });
      }}
    >
      {({ dirty, isValid, isSubmitting, submitForm, values }) => (
        <Form className={"form"}>
          <Field
            id="username"
            name="username"
            className={"contact-field"}
            placeholder="Github Username"
          />
        </Form>
      )}
    </Formik>
  );
};
