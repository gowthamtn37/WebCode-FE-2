import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./Api";
import "./css/AskQuestions.css";
import { useNavigate } from "react-router-dom";

export function AskQuestions() {
  const navigate = useNavigate();
  const formvalidationSchema = yup.object({
    title: yup.string().required(),
    problem: yup.string().required(),
    try: yup.string().required(),
    tag: yup.string().required(),
  });
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { title: "", problem: "", try: "", tag: "" },
      validationSchema: formvalidationSchema,
      onSubmit: async (value) => {
        console.log(value);
        const data = await fetch(`${API}/data/askquestions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(value),
        });
        if (data.status === 200) {
          navigate("/questions");
        } else if (data.status === 401) {
          alert("login required");
          localStorage.clear("token");
          navigate("/login");
        }
      },
    });

  return (
    <div className="screen-container">
      <div className="heading">
        <h1>Ask a public question</h1>
      </div>

      <form onSubmit={handleSubmit} className="questions-container">
        <OutlinedInput
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          error={touched.title && errors.title}
          placeholder="Title"
        />
        <OutlinedInput
          name="problem"
          value={values.problem}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          error={touched.problem && errors.problem}
          placeholder="problem details"
        />
        <OutlinedInput
          name="try"
          value={values.try}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          error={touched.try && errors.try}
          placeholder=" what did u Try & expecting"
        />
        <OutlinedInput
          name="tag"
          value={values.tag}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          error={touched.tag && errors.tag}
          placeholder="Tags"
        />
        <div className="submit-btn">
          <Button type="submit" variant="contained">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
