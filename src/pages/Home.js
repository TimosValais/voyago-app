import React from "react";
import MuiTypography from "../components/MuiTypography";
import AppButton from "../components/AppButton";

const Home = () => {
  const testFunc = (e, text) => {
    console.log("the event", e);
    console.log("fucn was called with text : ", text);
  };
  return (
    <>
      <MuiTypography variant="h1" text="This is the home screen" />
      <AppButton
        onClick={testFunc}
        variant="outlined"
        text="test button"
        color="primary"
      />
    </>
  );
};

export default Home;
