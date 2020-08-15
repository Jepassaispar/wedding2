import React, { useState } from "react";
import "../../styles/arInfo.scss";
import bgImage from "../../public/Aliz-Rémi-mountains.jpg";
import drawing from "../../public/drawing.PNG";
import localisation from "../../public/localisation.PNG";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { sendData } from "../../services/API";
import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import RequiredInfos from "./RequiredInfos";
import EnterCode from "./EnterCode";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InfoContainer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [code, setCode] = useState("");
  const [events, setEvents] = useState([]);
  const [infos, setInfos] = useState({
    requiredInfos: {
      adulte1: {
        nom: "",
        prénom: "",
      },
      adulte2: {
        nom: "",
        prénom: "",
      },
      enfants: 0,
      email: "",
      téléphone: "",
    },
    "cérémonie&cocktail": false,
    réception: false,
    brunch: false,
  });

  return (
    <div
      style={{ background: `center url(${bgImage}), backgroundColor: white` }}
    >
      <Paper className="headerInfoContainer" elevation={3}>
        Rémi et Alizée vous invitent à leur mariage le 8 juillet 2021
      </Paper>
      <div
        className="drawing_container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          className="drawing"
          style={{ width: "100%", maxWidth: "600px" }}
          src={localisation}
          alt="localisation"
        ></img>
        <img
          className="drawing"
          src={drawing}
          style={{ width: "100%", maxWidth: "600px" }}
          alt="drawing"
        ></img>
      </div>
      <div
        className="arInfoContainer"
        style={{
          background: `center url(${bgImage})`,
          backgroundPosition: "52%",
          height: "270vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginTop: "1000px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            style={{
              width: "100%",
              minWidth: "200px",
              maxWidth: "400px",
              zIndex: 0,
              padding: "20px",
            }}
          >
            {!events.length && (
              <EnterCode
                value={code}
                onClick={(e) => setEvents(e)}
                onChange={(e) => setCode(e)}
              />
            )}
            {events.length > 0 && !successMessage && (
              <RequiredInfos value={infos} onChange={(e) => setInfos(e)} />
            )}
            {events.length > 0 && !successMessage && (
              <Event1 value={infos} onChange={(e) => setInfos(e)} />
            )}
            {events.length > 1 && !successMessage && (
              <Event2 value={infos} onChange={(e) => setInfos(e)} />
            )}
            {events.length > 2 && !successMessage && (
              <Event3 value={infos} onChange={(e) => setInfos(e)} />
            )}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {successMessage && (
              <Alert severity="success">{successMessage}</Alert>
            )}

            {events.length > 0 && !successMessage && (
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
                      const dataToSend = {
                        ...infos,
                      };
                      await sendData(dataToSend);
                      setSuccessMessage(
                        "Vos informations ont bien été enregistrées, à très vite au mariage !"
                      );
                    } catch (err) {
                      setErrorMessage(err);
                    }
                  }}
                >
                  Valider
                </Button>
              </div>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
