import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Grid from "@material-ui/core/Grid";

const FormUserDetails = props => {
  const continueToNextStep = e => {
    e.preventDefault();
    props.nextStep();
  };

  const renderFields = () => {
    const { values, handleChange } = props;

    return (
      <MuiThemeProvider>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            name="firstName"
            onChange={handleChange}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            name="lastName"
            onChange={handleChange}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            name="email"
            onChange={handleChange}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary
            style={styles.button}
            onClick={continueToNextStep}
          />
        </Grid>
      </MuiThemeProvider>
    );
  };

  return <div>{renderFields()}</div>;
};

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
