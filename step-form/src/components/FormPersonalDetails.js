import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Grid from "@material-ui/core/Grid";

const FormPersonalDetails = props => {
  const continueToNextStep = e => {
    e.preventDefault();
    props.nextStep();
  };

  const backToPrevStep = e => {
    e.preventDefault();
    props.prevStep();
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
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            name="occupation"
            onChange={handleChange}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your Location"
            floatingLabelText="City"
            name="city"
            onChange={handleChange}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            name="bio"
            onChange={handleChange}
            defaultValue={values.bio}
          />
          <br />
          <div display="flex">
            <RaisedButton
              label="Back"
              style={styles.button}
              onClick={backToPrevStep}
            />
            <RaisedButton
              label="Continue"
              primary
              style={styles.button}
              onClick={continueToNextStep}
            />
          </div>
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

export default FormPersonalDetails;
