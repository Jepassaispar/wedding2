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
  const [nombreDenfants, setNombreDenfants] = useState(0);
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
          <TextField {...params} label="Je serai..." variant="outlined" />
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
            inputProps={{ min: "0", max: "5", step: "1" }}
            onChange={(e) => {
              const newValue = value;
              newValue.requiredInfos.enfants = [];
              for (let i = 0; i <= Number(e.target.value); i++) {
                newValue.requiredInfos.enfants.push({
                  nom: "",
                  prénom: "",
                  age: 0,
                });
              }
              onChange(newValue);
              setNombreDenfants(e.target.value);
            }}
          ></Input>
          {/* //NOMBRE D'ENFANTS */}
          {nombreDenfants >= 1 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Nom enfant 1"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[0].nom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label="Prénom enfant 1"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[0].prénom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
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
                placeholder="Age enfant 1"
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[0].age =
                    Number(e.target.value) || 0;
                  onChange(newValue);
                }}
              ></Input>
            </>
          )}
          {nombreDenfants >= 2 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Nom enfant 2"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[1].nom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label="Prénom enfant 2"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[1].prénom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
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
                placeholder="Age enfant 2"
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[1].age =
                    Number(e.target.value) || 0;
                  onChange(newValue);
                }}
              ></Input>
            </>
          )}
          {nombreDenfants >= 3 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Nom enfant 3"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[2].nom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label="Prénom enfant 3"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[2].prénom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
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
                placeholder="Age enfant 3"
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[2].age =
                    Number(e.target.value) || 0;
                  onChange(newValue);
                }}
              ></Input>
            </>
          )}
          {nombreDenfants >= 4 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Nom enfant 4"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[3].nom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label="Prénom enfant 4"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[3].prénom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
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
                placeholder="Age enfant 4"
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[3].age =
                    Number(e.target.value) || 0;
                  onChange(newValue);
                }}
              ></Input>
            </>
          )}
          {nombreDenfants >= 5 && (
            <>
              <TextField
                variant="outlined"
                required
                label="Nom enfant 5"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[4].nom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label="Prénom enfant 5"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  paddingBottom: "10px",
                }}
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[4].prénom = e.target.value;
                  onChange(newValue);
                }}
              ></TextField>
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
                placeholder="Age enfant 5"
                onChange={(e) => {
                  const newValue = value;
                  newValue.requiredInfos.enfants[4].age =
                    Number(e.target.value) || 0;
                  onChange(newValue);
                }}
              ></Input>
            </>
          )}
        </>
      )}
    </>
  );
}
