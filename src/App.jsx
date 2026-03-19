import { useState } from "react"; // Changed this line

import PersonalData from "./Components/PersonalData.jsx";
import PersonalDataDisplay from "./Components/PersonalDataDisplay.jsx";
import Education from "./Components/Education.jsx";
import EducationDisplay from "./Components/EducationDisplay.jsx";
import Experience from "./Components/Experience.jsx";
import ExperienceDisplay from "./Components/ExperienceDisplay.jsx";


import "./App.css";

function App() {
  const [personalDataFormScreen, setPersonalDataFormScreen] = useState(true);
  const [EducationScreen, setEducationScreen] = useState(true);
  const [ExperienceScreen, setExperienceScreen] = useState(true);

  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState({
    instituteName: "",
    degree: "",
    fromDate: null,
    toDate: null,
  });
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    fromDate: null,
    toDate: null,
  });

  const handleChangeForPersonalData = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const handleChangeForEducation = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeForExperience = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };
  return (
    <>
      {personalDataFormScreen == true ? (
        <PersonalData
          personalData={personalData}
          handleChange={handleChangeForPersonalData}
          setPersonalDataFormScreen={setPersonalDataFormScreen}
        />
      ) : (
        <PersonalDataDisplay
          personalData={personalData}
          setPersonalDataFormScreen={setPersonalDataFormScreen}
        />
      )}
      {EducationScreen == true ? (
        <Education
          education={education}
          setEducationScreen={setEducationScreen}
          handleChange={handleChangeForEducation}
        />
      ) : (
        <EducationDisplay
          education={education}
          setEducationScreen={setEducationScreen}
        />
      )}
      {ExperienceScreen == true ? (
        <Experience
          experience={experience}
          setExperienceScreen={setExperienceScreen}
          handleChange={handleChangeForExperience}
        />
      ) : (
        <ExperienceDisplay
          experience={experience}
          setExperienceScreen={setExperienceScreen}
        />
      )}
    </>
  );
}
export default App;
