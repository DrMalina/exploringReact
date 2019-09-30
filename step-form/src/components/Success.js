import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Grid from "@material-ui/core/Grid";

const Success = props => {
  const renderFields = () => {
    return (
      <MuiThemeProvider>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <AppBar title="Success" />
          <h1>Thank You for Submission</h1>
          <p>You will get email with further instructions</p>
        </Grid>
      </MuiThemeProvider>
    );
  };

  return <div>{renderFields()}</div>;
};

export default Success;
