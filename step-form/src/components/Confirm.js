import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
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
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = props;

    return (
      <MuiThemeProvider>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email Name" secondaryText={email} />
            <ListItem
              primaryText="Occupation Name"
              secondaryText={occupation}
            />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          <div display="flex">
            <RaisedButton
              label="Back"
              style={styles.button}
              onClick={backToPrevStep}
            />
            <RaisedButton
              label="Confirm"
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
