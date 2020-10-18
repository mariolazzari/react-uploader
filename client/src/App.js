import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import UploadIcon from "@material-ui/icons/Backup";
import Typography from "@material-ui/core/Typography";
import FileUpload from "./components/FileUpload";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: theme.spacing(8),
    marginRight: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <UploadIcon color="primary" className={classes.icon} />
        <Typography variant="h2">Ract file uploader</Typography>
      </Box>
      <FileUpload />
    </Box>
  );
};

export default App;
