import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getInputs } from "../../services/API.js";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EnterCode = ({ value, onClick, onChange, events }) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <TextField
        variant="outlined"
        required
        label="Code du faire-part"
        style={{
          minWidth: "250px",
          width: "100%",
          backgroundColor: "white",
          paddingBottom: "10px",
        }}
        onChange={(e) => {
          const newValue = e.target.value;
          onChange(newValue);
        }}
      ></TextField>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            try {
              const code = await getInputs(value);
              onClick(code);
            } catch (err) {
              setErrorMessage("Mauvais code, réessayez");
            }
          }}
        >
          Valider
        </Button>
      </div>
    </>
  );
};

export default EnterCode;
