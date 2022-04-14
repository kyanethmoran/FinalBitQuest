import React from "react";

function MessageDisplay({ index, setIndex, messages }) {
  let currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
  let {accountDetails} = currentUser;
  let {userName} = accountDetails;
  console.log(accountDetails, "accountDetails");
  const msgArry = [`Welcome, ${userName}`, "BitQuest is a turn based game.....", "KILL JOHN LENNON", "Since this is the last message in the array it needs to render a play button"];

  if (index > msgArry.length - 1 || index < 0) {
    setIndex(0);
  }

  if(index === msgArry.length - 1) {
    return (
      <div className="messageDisplay_finalContainer">
      {msgArry[index]}
      <button>Play</button>
      </div>
    )
  }
  else{
    return(
      <div className="messageDisplay_container">
        {msgArry[index]}
      </div>
    )
  }
}

export default MessageDisplay;
