export default function ExperienceDisplay({ experience, setExperienceScreen}) {
  return (
    <div className="display-container">
      <h1>Experience</h1>

      <div className="display-row">
        <h3 className="display-label">Company Name*: </h3>
        <h3 className="display-value">{experience.companyName}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">Position Title*:</h3>
        <h3 className="display-value">{experience.positionTitle}</h3>
      </div>
      <div className="display-row">
        <h3 className="display-label">Main Responsibilities*:</h3>
        <h3 className="display-value">{experience.mainResponsibilities}</h3>
      </div>
      <div className="display-row">
        <h3 className="display-label">from*::</h3>
        <h3 className="display-value">{experience.fromDate}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">to*::</h3>
        <h3 className="display-value">{experience.toDate}</h3>
      </div>

      <div className="button-group" style={{ display: "flex" }}>
        <button type="button" onClick={() => {setExperienceScreen(true)}}>edit</button>
      </div>
    </div>
  );
}
