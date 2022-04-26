import React from "react";
import HealthCard from "./HealthCard";

function PlayerCard({ playerHealth }) {
  let username = window.sessionStorage.getItem("username");

  return (
    <>
      <HealthCard name={username} currentHealth={playerHealth} />
    </>
  );
}

export default PlayerCard;
