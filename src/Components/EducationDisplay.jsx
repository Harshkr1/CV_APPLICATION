export default function EducationDisplay({ education,setEducationScreen}) {
  return (
    <div className="display-container">
      <h1>Education</h1>

      <div className="display-row">
        <h3 className="display-label">Name of Institution*: </h3>
        <h3 className="display-value">{education.instituteName}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">Name of Degree *:</h3>
        <h3 className="display-value">{education.degree}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">from*::</h3>
        <h3 className="display-value">{education.fromDate}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">to*::</h3>
        <h3 className="display-value">{education.toDate}</h3>
      </div>

      <div className="button-group" style={{ display: "flex" }}>
        <button type="button" onClick={() => {setEducationScreen(true)}}>edit</button>
      </div>
    </div>
  );
}
