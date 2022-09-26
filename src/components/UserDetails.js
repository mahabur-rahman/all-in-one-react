import React from "react";
import { useParams, userParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  return <div>UserDetails about user {userId}</div>;
};

export default UserDetails;
