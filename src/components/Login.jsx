import React from "react";

function Login() {
  return (
    <div class="input-group">
      <span class="input-group-text">First and last name</span>
      <input type="text" aria-label="First name" class="form-control" />
      <input type="text" aria-label="Last name" class="form-control" />
      <button type="button" class="btn btn-primary">Add</button>
    </div>
  );
}

export default Login;
