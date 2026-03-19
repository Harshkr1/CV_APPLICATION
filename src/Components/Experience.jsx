export default function Experience({
  experience,
  handleChange,
  setExperienceScreen,
}) {
  return (
    <>
      <form>
        <div style={{ display: "flex" }}>
          <h1>Experience</h1>
          <h3>Company Name*: </h3>
          <input
            type="text"
            placeholder="abc pvt Limited"
            value={experience.companyName}
            onChange={handleChange}
            name="companyName"
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Position Title*: </h3>
          <input
            type="text"
            placeholder="Software Engineer"
            name="positionTitle"
            value={experience.positionTitle}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Main Responsibilities*: </h3>
          <input
            type="text"
            placeholder="Tech Stack"
            name="positionTitle"
            value={experience.mainResponsibilities}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>from*: </h3>
          <input
            value={experience.fromDate}
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
            value={experience.toDate}
            onChange={handleChange}
          />
        </div>
        <div className="button-group" style={{ display: "flex" }}>
          <button type="button">add</button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setExperienceScreen(false);
            }}
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
}
