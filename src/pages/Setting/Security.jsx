import { useState } from "react";
import Toggle from "../../components/Toggle";

const Security = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [securityToggle, setSecurityToggle] = useState({
    authentication: false,
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data:", form);

    alert(`Profile Saved!\nEmail: ${form.currentPassword}`);
  }

  return (
    <form className="security-section" onSubmit={handleSubmit}>
      <div className="authentication">
        <p>Two-factor Authentication</p>
        <div className="notification-toggle">
          <Toggle
            toggleWord="authentication"
            value={securityToggle.authentication}
            // onToggle={handleToggle}
            setToggle={setSecurityToggle}
          />
          <span>Enable or disable two factor authentication</span>
        </div>
      </div>
      <div className="password-change">
        <div className="password-text">
          <p>Change Password</p>
        </div>
        <div className="password-box">
          <div className="form password-form">
            <label>Current Password</label>
            <input
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              type="text"
              placeholder="********"
            ></input>
          </div>
          <div className="form password-form">
            <label>New Password</label>
            <input
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              type="text"
              placeholder="********"
            ></input>
          </div>
        </div>
      </div>

      <div className="form-submit notification-submit">
        <button type="submit">Save</button>
      </div>

      <ul>
        {Object.entries(securityToggle)
          .filter(([_, active]) => active)
          .map(([label]) => (
            <li key={label}>{label}</li>
          ))}
      </ul>
    </form>
  );
};

export default Security;
