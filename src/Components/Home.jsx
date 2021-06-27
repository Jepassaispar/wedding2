import React from "react";
import "../styles/home.scss";
import Countdown from "react-countdown";
import bgImage from "../public/Aliz-Rémi-Gina-clouds.jpg";
import Paper from "@material-ui/core/Paper";

const Home = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const Completionist = () => <span>Mariage has begun !!!</span>;
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days} jours {hours} heures {minutes} minutes {seconds} secondes
        </span>
      );
    }
  };
  return (
    <>
      <div
        className="homeContainer"
        style={{
          height: "200vh",
          background: `center top url(${bgImage})`,
        }}
      >
        <Paper
          className="saveTheDateContainer mainColor"
          style={{ padding: "25px 5%" }}
        >
          <span className="saveTheDate" elevation={3}>
            Save the <span style={{ display: "inline-block" }}>date :</span>
          </span>
          <br />
          <Countdown date={"2021-07-08"} daysInHours renderer={renderer} />
        </Paper>
        <Paper className="lastInfosContainer mainColor">
          <div>
            Célébration du Mariage à 15h00 en l'Eglise Saint-Germain-l'Auxerrois
            à Fontenay-sous-Bois.
          </div>{" "}
          <span> Cocktail et réception à 18h00 à Mantes-La-Jolie</span>
        </Paper>
      </div>
    </>
  );
};

export default Home;
