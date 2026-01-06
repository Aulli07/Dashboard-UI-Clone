import { useState } from "react";
import Toggle from "../../components/Toggle";

const Preferences = () => {
  const [form, setForm] = useState({
    currency: "",
    timeZone: "",
  });

  const [toggles, setToggles] = useState({
    currency: false,
    merchantOrder: false,
    recommendations: false,
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Profile Saved!", toggles.currency);
  }

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <div className="form">
          <label>Currency</label>
          <input
            name="currency"
            value={form.currency}
            type="text"
            placeholder="USD"
            onChange={handleChange}
          />
        </div>

        <div className="form">
          <label>Time Zone</label>
          <input
            type="text"
            name="timeZone"
            value={form.timeZone}
            placeholder="(GMT-12:00) International Date Line West"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="notification-section">
        <p>Notification</p>

        <div className="notification-box">
          <div className="notification-toggle">
            <Toggle
              toggleWord="currency"
              value={toggles.currency}
              setToggle={setToggles}
              // onToggle={handleToggle}
            />
            <span>I send or receive digital currency</span>
          </div>

          <div className="notification-toggle">
            <Toggle
              toggleWord="merchantOrder"
              value={toggles.merchantOrder}
              setToggle={setToggles}
            />
            <span>I receive merchant order</span>
          </div>

          <div className="notification-toggle">
            <Toggle
              toggleWord="recommendations"
              value={toggles.recommendations}
              setToggle={setToggles}
            />
            <span>There are recommendations for my account</span>
          </div>
        </div>
      </div>

      <div className="form-submit notification-submit">
        <button type="submit">Save</button>
      </div>

      <ul>
        {Object.entries(toggles)
          .filter(([_, active]) => active)
          .map(([label]) => (
            <li key={label}>{label}</li>
          ))}
      </ul>
    </form>
  );
};


export default Preferences;
