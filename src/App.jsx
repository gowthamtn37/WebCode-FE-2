import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Collectives } from "./Collectives";
import { Companies } from "./Companies";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { Questions } from "./Questions";
import { Tags } from "./Tags";
import { Teams } from "./Teams";
import { Users } from "./Users";
import { Sidebar } from "./Sidebar";
import React from "react";
import { TopBar } from "./TopBar";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const user = [
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc1",
    company: "xyz1",
    question: "what is react",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc2",
    company: "xyz2",
    question: "what is react uses",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc3",
    company: "xyz3",
    question: "what is react benfits",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc4",
    company: "xyz4",
    question: "what is react features",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc5",
    company: "xyz5",
    question: "what is react components",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc6",
    company: "xyz6",
    question: "what is react context",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc7",
    company: "xyz7",
    question: "what is react useState",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc8",
    company: "xyz8",
    question: "what is react props",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc9",
    company: "xyz9",
    question: "what is react conditional rendering",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc10",
    company: "xyz10",
    question: "what is react useReducer",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc11",
    company: "xyz11",
    question: "what is react useMemo",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc12",
    company: "xyz12",
    question: "what is react virtual dom",
  },
];

function App() {
  return (
    <div className="App">
      <TopBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users user={user} />} />
        <Route path="/companies" element={<Companies user={user} />} />
        <Route path="/collectives" element={<Collectives />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
