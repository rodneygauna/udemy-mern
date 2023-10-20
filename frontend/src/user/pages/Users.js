import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://avatars.githubusercontent.com/u/10000101?s=460&u=1b8e5e3a3d9a3b7b4d5d4d3d2d1d0c9c8c7c6c5c4&v=4",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
