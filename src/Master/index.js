import { Divider } from "@mui/material";
import React from "react";
import ContactMe from "../Components/ContactMe";
import Hobby from "../Components/Hobby";
import Introduction from "../Components/Introduction";
import Project from "../Components/Project";
import Skills from "../Components/Skill";
import MyTimeline from "../Components/Timeline";

const Master = () => {
  return (
    <>
      <Introduction />
      <Divider light />
      <MyTimeline />
      <Divider light />
      <Skills />
      <Divider light />
      <Project />
      <Divider light />
      <Hobby />
      <Divider light />
      <ContactMe />
    </>
  );
};

export default Master;
