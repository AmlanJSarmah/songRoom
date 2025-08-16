import { useState } from "react";

export function Form({ handleSubmit }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    if (event.target.id === "username") {
      setFormData({ ...formData, username: event.target.value });
    } else {
      setFormData({ ...formData, password: event.target.value });
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UserName"
          id="username"
          onChange={handleChange}
          value={formData.username}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
