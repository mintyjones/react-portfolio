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

  const toggleMode = () => {
    if(localStorage.theme === undefined){
      localStorage.theme = 'dark';
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleMode();
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
