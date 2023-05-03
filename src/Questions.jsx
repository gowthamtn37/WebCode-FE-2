import { Button } from "@mui/material";
import "./css/Question.css";
import { useNavigate } from "react-router-dom";
export function Questions() {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
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
    </div>
  );
}
