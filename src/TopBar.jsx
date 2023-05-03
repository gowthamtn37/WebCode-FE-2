import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

import "./css/Topbar.css";

export function TopBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="topBar">
        <div className="orange-line"></div>
        <div className="top-btn">
          <button className="home-btn" onClick={() => navigate("/")}>
            <div className="home">
              <img
                className="stack-icon"
                src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
                alt="stack overflow img"
              />
              <p>
                stack <b>overflow</b>
              </p>
            </div>
          </button>
          <button className="about-btn" onClick={() => navigate("/about")}>
            About
          </button>
          <button className="product-btn" onClick={() => navigate("/product")}>
            Product
          </button>
          <button className="teams-btn" onClick={() => navigate("/teams")}>
            For Teams
          </button>
          <input
            className="search"
            placeholder="Search"
            onChange={() => {}}
          ></input>
          <Button
            sx={{ width: "75px", height: "75%" }}
            variant="outlined"
            size="small"
            fontSize="inherit"
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            sx={{ width: "90px", height: "75%" }}
            fontSize="inherit"
            size="small"
            variant="contained"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
