import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Brightness2, WbSunny } from "@material-ui/icons";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex"
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: "#1C3F34",
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none"
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedC: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    localStorage.theme === 'dark' ? localStorage.setItem('theme', "dark") : localStorage.setItem('theme', "dark");
  };


  return (
    <FormGroup  className="self-center">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <Brightness2 />
          </Grid>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          </Grid>
          <Grid item>
            <WbSunny style={{ color: "#FFF" }}/>
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}
