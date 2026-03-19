export default function Education({ education, handleChange, setEducationScreen }) {
  return (
    <>
      <form>
        <div style={{ display: "flex" }}>
          <h1>Education</h1>
          <h3>Name of Institution*: </h3>
          <input
            type="text"
            placeholder="ABC College of Engineering"
            value={education.instituteName}
            onChange={handleChange}
            name="instituteName"
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Name of Degree *: </h3>
          <input
            type="text"
            placeholder="Bachelor's"
            name="degree"
            value={education.degree}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>from*: </h3>
          <input
            value={education.fromDate}
            type="date"
            name="fromDate"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>to*: </h3>
          <input
            type="date"
            name="toDate"
            value={education.toDate}
            onChange={handleChange}
          />
        </div>
        <div className="button-group" style={{ display: "flex" }}>
          <button type="button">add</button>
          <button type="submit" onClick={(e) => {
              e.preventDefault();
              setEducationScreen(false);
            }} >submit</button>
        </div>
      </form>
    </>
  );
}
