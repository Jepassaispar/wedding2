import React, { useState } from "react";
import "../../styles/arInfo.scss";
import bgImage from "../../public/Aliz-Rémi-mountains.jpg";
import drawing from "../../public/drawing.PNG";
import localisation from "../../public/localisation.PNG";
import Paper from "@material-ui/core/Paper";
import { Button, Input, TextareaAutosize } from "@material-ui/core";
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
      enfants: [],
      email: "",
      téléphone: "",
    },
    menus: {
      adultes: 0,
      végétariens: 0,
      enfants: 0,
    },
    "cérémonie&cocktail": false,
    réception: false,
    brunch: false,
    commentaires: "",
  });

  return (
    <div
      style={{ background: `center url(${bgImage}), backgroundColor: white` }}
    >
      <Paper className="headerInfoContainer" elevation={3}>
        Rémi et Alizée vous invitent à leur mariage le 8 juillet 2021
      </Paper>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <img
            className="drawing"
            style={{ width: "100%" }}
            src={localisation}
            alt="localisation"
          ></img>
        </div>
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <img
            className="drawing"
            src={drawing}
            style={{ width: "100%" }}
            alt="drawing"
          ></img>
        </div>
      </div>
      <div
        className="arInfoContainer"
        style={{
          background: `center url(${bgImage})`,
          backgroundPosition: "52%",
          height: "285vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginTop: "1100px",
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
            {events.length ? (
              <div style={{ marginBottom: "10px" }}>
                Bienvenue ! Vous pouvez retrouver plus d'infos en bas de la page
              </div>
            ) : (
              ""
            )}
            {!events.length && (
              <EnterCode
                value={code}
                onClick={(e) => setEvents(e)}
                onChange={(e) => setCode(e)}
                events={events}
              />
            )}
            {events.length > 0 && !successMessage && (
              <RequiredInfos value={infos} onChange={(e) => setInfos(e)} />
            )}
            {events.length > 0 && !successMessage && (
              <span style={{ marginTop: "15px" }}>Je confirme ma présence</span>
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
            {events.length > 1 && !successMessage && (
              <>
                <span style={{ marginTop: "35px" }}>Nombre de menus</span>
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
                  placeholder="adultes"
                  inputProps={{ min: "0", max: "5", step: "1" }}
                  onChange={(e) => {
                    const newValue = infos;
                    newValue.menus.adultes = e.target.value;
                    setInfos(newValue);
                  }}
                ></Input>
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
                  placeholder="végétariens"
                  inputProps={{ min: "0", max: "5", step: "1" }}
                  onChange={(e) => {
                    const newValue = infos;
                    newValue.menus.végétariens = e.target.value;
                    setInfos(newValue);
                  }}
                ></Input>
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
                  placeholder="enfants"
                  inputProps={{ min: "0", max: "5", step: "1" }}
                  onChange={(e) => {
                    const newValue = infos;
                    newValue.menus.enfants = e.target.value;
                    setInfos(newValue);
                  }}
                ></Input>
              </>
            )}

            {events.length !== 0 && !successMessage && (
              <TextareaAutosize
                style={{
                  minWidth: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  minHeight: "45px",
                  marginBottom: "8px",
                  padding: "10px",
                }}
                placeholder="Commentaires"
                onChange={(e) => {
                  const newValue = infos;
                  newValue.commentaires = e.target.value;
                  setInfos(newValue);
                }}
              ></TextareaAutosize>
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
                  style={{
                    fontFamily: "Raleway",
                  }}
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
      {events.length ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 5%",
          }}
        >
          <h2>Quelques précisions</h2>
          <span className="precisions">
            Revenez prochainement pour connaître le lieu et l'heure de la
            cérémonie religieuse. Nous avons hâte de vous y retrouver ! En ce
            qui concerne {events.length === 1 && "le cocktail"}
            {events.length === 2 && "la réception"}
            {events.length === 3 && "la réception et le brunch"}, l'adresse vous
            sera communiquée à la fin de la cérémonie… Suprise !
          </span>
        </Paper>
      ) : (
        ""
      )}
      {events.length === 1 ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 5%",
          }}
        >
          <h2>Foire aux questions</h2>
          <h3>1. Pourquoi ne sait-on pas où aura lieu le cocktail ?</h3>
          <span className="precisions">
            En visitant la propriété, nous avons eu envie de vous faire la
            surprise. Ce n'est pas un château, pas un moulin, pas une ferme :
            c'est un lieu unique en France ! Si vous êtes vraiment curieux,
            quelques indices se trouvent sur le faire-part...{" "}
          </span>
          <h3>2. Y a-t-il une cérémonie civile ?</h3>
          <span className="precisions">
            Oui, mais celle-ci se fera en très petit comité au mois de juin.{" "}
          </span>

          <h3>3. Y a-t-il une liste de mariage ?</h3>
          <span className="precisions">
            Non, pas de liste ! Cela dit, un semi-remorque sera mis à votre
            disposition le jour J afin de réceptionner vos nombreux chèques.{" "}
          </span>

          <h3>4. Dois-je respecter un dresscode ?</h3>
          <span className="precisions">
            Non, pas de dresscode alors venez comme vous êtes !
          </span>
        </Paper>
      ) : (
        ""
      )}
      {events.length === 2 ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 5%",
          }}
        >
          <h2>Foire aux questions</h2>
          <h3>1. Pourquoi ne sait-on pas où aura lieu la réception ?</h3>
          <span className="precisions">
            En visitant la propriété, nous avons eu envie de vous faire la
            surprise. Ce n'est pas un château, pas un moulin, pas une ferme :
            c'est un lieu unique en France ! Si vous êtes vraiment curieux,
            quelques indices se trouvent sur le faire-part...{" "}
          </span>

          <h3>2. Mais comment réserver mon hébergement ?</h3>
          <span className="precisions">
            Une carte se trouve au verso du fairepart pour vous aider à situer
            la réception.
            <br /> Voici quelques hébergements aux alentours :<br /> - hôtel
            Ibis, 19 bd de Sully, 78201 Mantes La Jolie (>45€)
            <br /> - gîte La Ferme des Vallées, 20 bis rue Henri Duverdin, 78200
            Soindres (>60€)
            <br /> - chambre d'hôtes Les Hauts de Vaucouleurs, chemin Ste Jeanne
            d'Arc, 78930 Auffreville Brasseuil (>65€)
            <br /> - hôtel La Ruche, 2 rte nationale, 78270 Rolleboise (>75€)
            <br /> - chambre d'hôtes Le Havre de Breval, 1 bis rue des bateaux,
            hameau des bossus, 78980 Bréval (>90€)
          </span>

          <h3>3. Y a-t-il une cérémonie civile ?</h3>
          <span className="precisions">
            Oui, mais celle-ci se fera en très petit comité au mois de juin.{" "}
          </span>

          <h3>4. Y a-t-il une liste de mariage ?</h3>
          <span className="precisions">
            Non, pas de liste ! Cela dit, un semi-remorque sera mis à votre
            disposition le jour J afin de réceptionner vos nombreux chèques.{" "}
          </span>

          <h3>5. Dois-je respecter un dresscode ?</h3>
          <span className="precisions">
            Non, pas de dresscode alors venez comme vous êtes !
          </span>
        </Paper>
      ) : (
        ""
      )}
      {events.length === 3 ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 5%",
          }}
        >
          <h2>Foire aux questions</h2>
          <h3>1. Pourquoi ne sait-on pas où aura lieu la réception ?</h3>
          <span className="precisions">
            En visitant la propriété, nous avons eu envie de vous faire la
            surprise. Ce n'est pas un château, pas un moulin, pas une ferme :
            c'est un lieu unique en France ! Si vous êtes vraiment curieux,
            quelques indices se trouvent sur le faire-part...{" "}
          </span>

          <h3>2. Mais comment réserver mon hébergement ?</h3>
          <span className="precisions">
            Vous pouvez nous contacter directement aux coordonnées présentes
            dans le fairepart pour que nous vous aidions.
          </span>
          <h3>3. Y a-t-il une cérémonie civile ?</h3>
          <span className="precisions">
            Oui, mais celle-ci se fera en très petit comité au mois de juin.{" "}
          </span>

          <h3>4. Y a-t-il une liste de mariage ?</h3>
          <span className="precisions">
            Non, pas de liste ! Cela dit, un semi-remorque sera mis à votre
            disposition le jour J afin de réceptionner vos nombreux chèques.{" "}
          </span>

          <h3>5. Dois-je respecter un dresscode ?</h3>
          <span className="precisions">
            Non, pas de dresscode alors venez comme vous êtes !
          </span>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoContainer;
