import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./css/Sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="SideBar">
      <div className="sideButton">
        <Button
          variant="text"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <div className="public">
          <h4>
            <b>PUBLIC</b>
          </h4>

          <Button
            variant="text"
            onClick={() => {
              navigate("/questions");
            }}
          >
            Questions
          </Button>

          <Button
            variant="text"
            onClick={() => {
              navigate("/tags");
            }}
          >
            Tags
          </Button>

          <Button
            variant="text"
            onClick={() => {
              navigate("/users");
            }}
          >
            Users
          </Button>

          <Button
            variant="text"
            onClick={() => {
              navigate("/companies");
            }}
          >
            Companies
          </Button>
        </div>

        <div className="collectives">
          <h4>
            <b>COLLECTIVES</b>
          </h4>

          <Button
            variant="text"
            onClick={() => {
              navigate("/collectives");
            }}
          >
            Collectives
          </Button>
        </div>

        <div className="teams">
          <h4>
            <b>TEAMS</b>
          </h4>

          <Button
            style={{ padding: "auto" }}
            variant="text"
            onClick={() => {
              navigate("/teams");
            }}
          >
            create free Teams
          </Button>
        </div>
      </div>
    </div>
  );
}
