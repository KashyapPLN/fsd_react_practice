import * as React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";


export function BasicForm() {
  const formValidationSchema=yup.object({
    email:yup.string()
    .email()
    .min(5)
    .required(),
    password:yup.string()
    .min(8)
    .max(12)
    .required()
  });
  const formik=useFormik({
    initialValues:{email:'kashyap',password:'abc'},
    validationSchema: formValidationSchema,
    onSubmit: (values)=>{console.log("onSubmit",values)}
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" placeholder='email'
      name="email" value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} />
      {formik.touched.email && formik.errors.email? formik.errors.email:""}
      <input type="password" placeholder='password'
      name="password" value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.touched.password && formik.errors.password? formik.errors.password:""}
      <button>Submit</button>
    </form>
  );
}
