import { Button } from "@mui/material";
import "./css/Question.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./Api";

export function Questions() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${API}/data/askquestions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(questions);
  return (
    <div className="screen-container-ask">
      <div className="question-head">
        <h1>All Questions </h1>
        <Button
          onClick={() => navigate("/askquestions")}
          sx={{ height: "50px", width: "150px", margin: "10px" }}
          size="small"
          variant="contained"
        >
          Ask Questions
        </Button>
      </div>
      {questions.map((questions) => (
        <div className="question-box">
          <div className="questions">
            <Button variant="text">{questions.title}</Button>
            <p>{questions.problem}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
