import React, { useState } from "react";
import BitQuestHeader from "../Components/BitQuestHeader";
import ClassPreview from "../Components/ClassPreview";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Intro({ classes }) {
  const navigate = useNavigate();
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let username = Object.keys(currentUser)[0];
  if(username === 'accountDetails'){
    username = 'dummyUser';
  }
  console.log(currentUser)
  let { fighterClass, jesterClass, ogreClass, rogueClass, wizardClass } = classes;
  
  let [selectedClass, setSelectedClass] = useState(wizardClass);
  let [activeClass, setActiveClass] = useState("Wizard");
  
  const toInstructions = () => {
    navigate("/Instruction");
  };
  
  const handleNext = (e) => {
    e.preventDefault();
    let saveName = document.getElementsByName("saveName")[0].value;
    if (currentUser.characterSaves === undefined) {
      console.log("no character saves");
      currentUser.characterSaves = {};
    }
    currentUser.characterSaves = {
      ...currentUser.characterSaves,
      [saveName]: selectedClass,
    };
    window.sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(currentUser, "current user");
    document.getElementsByName("saveName")[0].value = "";
    let {characterSaves} = currentUser
    console.log(username)
    
    
    let URL = `https://finalprojectgame-b2bad-default-rtdb.firebaseio.com/accounts/${username}/characterSaves.json`
    axios.patch(URL, characterSaves)
    .then(res => {
      console.log(res, 'datta that was added');
    })
    console.log(characterSaves)

    navigate("/Instruction");
  };

  const handleClassSelection = (e) => {
    switch (e.target.innerHTML) {
      case "Fighter":
        setSelectedClass(fighterClass);
        setActiveClass("Fighter");
        break;
      case "Jester":
        setSelectedClass(jesterClass);
        setActiveClass("Jester");
        break;
      case "Ogre":
        setSelectedClass(ogreClass);
        setActiveClass("Ogre");
        break;
      case "Rouge":
        setSelectedClass(rogueClass);
        setActiveClass("Rouge");
        break;
      case "Wizard":
        setSelectedClass(wizardClass);
        setActiveClass("Wizard");
        break;
      default:
        setSelectedClass(wizardClass);
        setActiveClass("Wizard");
        break;
    }
  };

  return (
    <div className="intro_container">
      <BitQuestHeader />
      <section className="intro_classHeader">
        <h2>Select a class: </h2>
        <ul className="intro_classListContainer">
          <li
            onClick={handleClassSelection}
            className={
              activeClass === "Wizard"
                ? "intro_classListButtonActive"
                : "intro_classListButton"
            }
          >
            Wizard
          </li>
          <li
            onClick={handleClassSelection}
            className={
              activeClass === "Fighter"
                ? "intro_classListButtonActive"
                : "intro_classListButton"
            }
          >
            Fighter
          </li>
          <li
            onClick={handleClassSelection}
            className={
              activeClass === "Rouge"
                ? "intro_classListButtonActive"
                : "intro_classListButton"
            }
          >
            Rouge
          </li>
          <li
            onClick={handleClassSelection}
            className={
              activeClass === "Jester"
                ? "intro_classListButtonActive"
                : "intro_classListButton"
            }
          >
            Jester
          </li>
          <li
            onClick={handleClassSelection}
            className={
              activeClass === "Ogre"
                ? "intro_classListButtonActive"
                : "intro_classListButton"
            }
          >
            Ogre
          </li>
        </ul>
      </section>

      <section className="intro_classInfoContainer">
        <ClassPreview selectedClass={selectedClass} />
      </section>

      {/* temp button to go to instructions so i can work on that */}
      <section>
        <form onSubmit={handleNext}>
          <button>Next</button>
          <input type="text" name="saveName" placeholder="Save Name" required />
        </form>
      </section>
    </div>
  );
}

export default Intro;
