import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    const confirmation = window.confirm(
      "Are you sure to add this person as admin?"
    );

    if (confirmation) {
      fetch("https://fathomless-bayou-40164.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("added as admin");
            setEmail("");
          }
        });
    }
  };
  return (
    <>
      <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
capitalize"
      >
        <span>Make Admin</span>
      </h3>
      <div className="admin-wrapper">
        <form onSubmit={handleAdminSubmit}>
          <input
            required
            onBlur={handleOnBlur}
            type="email"
            placeholder="Enter Email"
            name="email"
            defaultValue={email}
          />
          <button>Add as Admin</button>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
