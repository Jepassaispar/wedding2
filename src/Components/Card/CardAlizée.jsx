import React from "react";

const CardAlizée = ({ animalImage, profileImage }) => {
  return (
    <div className="card mainBgColor">
      <div className="leftHalf column">

        <p className="infoText">
          Alcoolique notoire, il/elle a vécu son enfance dans les pmus
        </p>
      </div>
      <div className="rightHalf reverse-column">
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

export default CardAlizée;
