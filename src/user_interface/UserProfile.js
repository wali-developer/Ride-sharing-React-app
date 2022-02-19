import React from "react";

const UserProfile = () => {
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2>Profile</h2>
        <form className="user-Details">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              User Name
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 mt-4">
            <label>User type</label>
            <select
              className="mb-4 form-select"
              aria-label="Default select example"
              placeholder="User type"
              name="usertype"
            >
              <option value="Passenger">Passenger</option>
              <option value="Driver">Driver</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
