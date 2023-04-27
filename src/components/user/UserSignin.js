import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginUser = () => {
const deafultValue = {
    name: "",
    email: "",
};
const validationSchema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter email "),
});

const handleSubmit = (values) => {
    console.log("value :", values)
};

return (
    <>
        <h1>Hello friends</h1>
        <br></br>
 
<Formik
initialValues={deafultValue}
validationSchema={validationSchema}
onsubmit={handleSubmit}
>
<Form>
    <div>
        <Field type="text" name="name" placeholder="please enter your name"></Field>
    </div>
</Form>
</Formik>
   </>
);
};
export default LoginUser;





