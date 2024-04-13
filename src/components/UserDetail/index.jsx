import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDetails = await models.userModel(userId);
      setUser(userDetails);
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      {user && (
        <div>
          <Typography variant="h4">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Description: {user.description}</Typography>
          <Typography variant="body1">Occupation: {user.occupation}</Typography>
          <Button component={Link} to={`/photos/${userId}`} variant="contained" color="primary">
            View Photos
          </Button>
        </div>
      )}
    </>
  );
}

export default UserDetail;
