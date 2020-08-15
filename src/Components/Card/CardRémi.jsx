import React from "react";

const CardRémi = ({ animalImage, profileImage }) => {
  return (
    <div className="card mainBgColor reverse-row">
      <div className="leftHalf column">
        <div
          className="animalContainer"
        >
          <img className="animal" src={animalImage} alt="animal"></img>
        </div>
        <p className="infoText">
          Alcoolique notoire, il/elle a vécu son enfance dans les pmus
        </p>
      </div>
      <div className="rightHalf">
        <div className="profileContainer">
          <img
            className="profile flex-start"
            src={profileImage}
            alt="profile"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CardRémi;
