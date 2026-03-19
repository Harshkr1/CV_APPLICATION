import PersonalDataDisplay from "./PersonalDataDisplay.jsx";

export default function PersonalData({
  personalData,
  handleChange,
  setPersonalDataFormScreen,
}) {
  return (
    <>
      <form>
        <div style={{ display: "flex" }}>
          <h1>Personal Details </h1>
          <h3>Your Full Name*: </h3>
          <input
            type="text"
            placeholder="Your Full Name"
            name="fullName"
            onChange={handleChange}
            value={personalData.fullName}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Email*: </h3>
          <input
            type="Email"
            placeholder="abc123@example.com"
            name="email"
            onChange={handleChange}
            value={personalData.email}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3>Phone Number*: </h3>
          <input
            type="number"
            placeholder="+91-12345678"
            name="phoneNumber"
            onChange={handleChange}
            value={personalData.phoneNumber}
          />
        </div>
        <div className="button-group" style={{ display: "flex" }}>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setPersonalDataFormScreen(false);
            }}
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
}
