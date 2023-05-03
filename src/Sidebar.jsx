import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./Home";
import { Questions } from "./Questions";
import { Tags } from "./Tags";
import { Users } from "./Users";
import { Companies } from "./Companies";
import { Collectives } from "./Collectives";
import { Teams } from "./Teams";
import { PageNotFound } from "./PageNotFound";
import { Login } from "./Login";
import { ForgetPassword } from "./ForgetPassword";
import { VerifyOTP } from "./VerifyOTP";
import { Signup } from "./Signup";

import "./css/Sidebar.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="body-container">
      <div className="SideBar-container">
        <div className="SideBar">
          <ul type="none">
            <ul type="none">
              <li className="li-home" onClick={() => navigate("/")}>
                Home
              </li>
            </ul>

            <ul type="none">
              <li>Public</li>
              <ul type="none">
                <li>
                  <button
                    onClick={() => {
                      navigate("/questions");
                    }}
                  >
                    Questions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/tags");
                    }}
                  >
                    Tags
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/users");
                    }}
                  >
                    Users
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/companies");
                    }}
                  >
                    Companies
                  </button>
                </li>{" "}
              </ul>
            </ul>
            <ul type="none">
              COLLECTIVES
              <ul type="none">
                <li>
                  <button
                    onClick={() => {
                      navigate("/collectives");
                    }}
                  >
                    Explore Collectives
                  </button>
                </li>
              </ul>
            </ul>
            <ul type="none">Teams</ul>
          </ul>
        </div>
      </div>
      <div className="Content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/collectives" element={<Collectives />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/verifyreset" element={<VerifyOTP />} />
        </Routes>
      </div>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
function Product() {
  return <div>Product</div>;
}
