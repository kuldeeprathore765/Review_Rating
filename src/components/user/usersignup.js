import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const AddUser = () => {
  const deafultValue = {
    name: "",
    email: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter email your email"),
  });

  const handleSubmit = (values) => {
    console.log("value :", values);
  };

  return (
    <>
      <div className="container bg-warning">
        <br></br>

        <h2>sign-up page by using formic </h2>
        <br></br>
        <Formik
          initialValues={deafultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="col-md-10">
              <Field
                type="text"
                name="name"
                placeholder="Enter your Name "
                className="Form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="col-md-10">
              <Field
                type="text"
                name="email"
                placeholder="Enter your Email "
                className="Form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
            <button className="btn btn-primary mt-4" text="submit">
              submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default AddUser;
