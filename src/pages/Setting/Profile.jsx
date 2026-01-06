import { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
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

    alert(`Profile Saved!\nEmail: ${form.email}`);
  }

  return (
    <div className="settings-form-section">
      <div className="settings-form-image">
        <img
          src="/icons/header-image.jpg"
          className="settings-main-image"
        ></img>
        <img
          src="/icons/setting_person_join.png"
          className="settings-pencil-icon"
        ></img>
      </div>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form">
            <label htmlFor="name">Your name</label>
            <input
              name="name"
              placeholder="Charlene Reed"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="u-name">Username</label>
            <input
              name="username"
              placeholder="charlene01"
              value={form.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <label htmlFor="name">Email</label>
            <input
              name="email"
              type="text"
              placeholder="charlenereed@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="u-name">Password</label>
            <input
              name="password"
              type="text"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <label htmlFor="name">Date of Birth</label>
            <input
              name="dob"
              type="text"
              placeholder="25 January 1990"
              value={form.dob}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form">
            <label htmlFor="u-name">Present Address</label>
            <input
              name="presentAddress"
              type="text"
              placeholder="San Jose, California, USA"
              value={form.presentAddress}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <label htmlFor="name">Permanent Address</label>
            <input
              name="permanentAddress"
              type="text"
              placeholder="San Jose, California, USA"
              value={form.permanentAddress}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form">
            <label htmlFor="u-name">City</label>
            <input
              name="city"
              type="text"
              placeholder="San Jose"
              value={form.city}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <label htmlFor="name">Postal Code</label>
            <input
              name="postalCode"
              type="text"
              placeholder="45962"
              value={form.postalCode}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form">
            <label htmlFor="u-name">Country</label>
            <input
              name="country"
              type="text"
              placeholder="USA"
              value={form.country}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="form-submit" type="submit">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
