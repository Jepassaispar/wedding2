import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const presence = [
  "seul",
  "accompagné",
  "seul avec enfants",
  "accompagné avec enfants",
];

export default function RequiredInfos({ value, onChange }) {
  const [jeserais, setJeserais] = useState("");

  return (
    <>
      <Autocomplete
        style={{
          width: "100%",
          minWidth: "200px",
          zIndex: 0,
          paddingBottom: "10px",
        }}
        size="small"
        getOptionLabel={(option) => option}
        getOptionSelected={(option, { value }) => option === value}
        options={presence}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Je serais" variant="outlined" />
        )}
        renderOption={(option) => option}
        onChange={(e, value) => {
          setJeserais(value);
        }}
      />
      {(jeserais === "seul" || jeserais === "seul avec enfants") && (
        <>
          <TextField
            variant="outlined"
            required
            label="Nom"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte1.nom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            required
            label="Prénom"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte1.prénom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
        </>
      )}

      {(jeserais === "accompagné" ||
        jeserais === "accompagné avec enfants") && (
        <>
          <TextField
            variant="outlined"
            required
            label="Votre Nom"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte1.nom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            required
            label="Votre Prénom"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte1.prénom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            required
            label="Nom de la personne accompagnante"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte2.nom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            required
            label="Prénom de la personne accompagnante"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.adulte2.prénom = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
        </>
      )}
      {jeserais && (
        <>
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.email = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            required
            label="téléphone"
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.téléphone = e.target.value;
              onChange(newValue);
            }}
          ></TextField>
        </>
      )}

      {(jeserais === "accompagné avec enfants" ||
        jeserais === "seul avec enfants") && (
        <>
          <Input
            style={{
              minWidth: "250px",
              width: "100%",
              backgroundColor: "white",
              minHeight: "45px",
              marginBottom: "8px",
            }}
            required
            type="number"
            placeholder="nombre d'enfants"
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.enfants = e.target.value;
              onChange(newValue);
            }}
          ></Input>
        </>
      )}
    </>
  );
}
