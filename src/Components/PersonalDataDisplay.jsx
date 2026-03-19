export default function PersonalDataDisplay({ personalData, setPersonalDataFormScreen }) {
  return (
    <div className="display-container">
      <h1>Personal Details</h1>

      <div className="display-row">
        <h3 className="display-label">Full Name:</h3>
        <h3 className="display-value">{personalData.fullName}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">Email:</h3>
        <h3 className="display-value">{personalData.email}</h3>
      </div>

      <div className="display-row">
        <h3 className="display-label">Ph No.:</h3>
        <h3 className="display-value">{personalData.phoneNumber}</h3>
      </div>

      <div className="button-group" style={{ display: "flex" }}>
        <button type="button" onClick={() => {setPersonalDataFormScreen(true)}}>edit</button>
      </div>
    </div>
  );
}
