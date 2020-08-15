import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const presence = ["oui", "non"];

const Event2 = ({ value, onChange }) => {
  return (
    <Autocomplete
      className="bigInput"
      style={{
          width: "100%",
          minWidth: "200px",
          zIndex: 0,
          marginTop: "10px",
        }}
      getOptionLabel={(option) => option}
      getOptionSelected={(option, { value }) => option === value}
      options={presence}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          label="Je confirme ma présence à la réception qui se tiendra après la cérémonie & le cocktail"
          variant="outlined"
        />
      )}
      renderOption={(option) => option}
      onChange={(e, inputValue) => {
        const newValue = value;
        newValue["réception"] = inputValue === "oui" ? true : false;
        onChange(newValue);
      }}
    />
  );
};

export default Event2;
