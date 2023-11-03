import React from "react";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHAT CHAT CHAT</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt=""></img>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
