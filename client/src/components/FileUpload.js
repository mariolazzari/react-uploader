import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4, 10),
  },
  button: {
    margin: theme.spacing(3),
  },
}));

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const onChange = e => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setFile({ fileName, filePath });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Selected file"
        type="file"
        onChange={onChange}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        fullWidth
        type="submit"
      >
        Upload
      </Button>

      {file && <img src={file.filePath} alt={file.fileName} />}
    </form>
  );
};

export default FileUpload;
