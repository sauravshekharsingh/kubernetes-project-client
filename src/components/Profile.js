/* --------------------------------- Profile -------------------------------- */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "../actions/search";
import { formatDate } from "../helpers/utils";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PostsList from "./PostsList";

export default function Profile(props) {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search);

  useEffect(() => {
    const { userId } = props.match.params;
    dispatch(fetchUserProfile(userId));
  }, [dispatch, props.match.params]);

  const { user } = search;

  return (
    <div className="profile">
      <Card className={`profile-card`}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Profile
          </Typography>
          <div className="user-info">
            <div className="name">
              <Typography variant="h6">
                <span className="profile-card-label">Name: </span>
                {user.name}
              </Typography>
            </div>
            <div className="username">
              <Typography variant="h6">
                <span className="profile-card-label">Username: </span>
                {user.username}
              </Typography>
            </div>
            <div className="user-id">
              <Typography variant="h6">
                <span className="profile-card-label">UserID: </span>
                {user._id}
              </Typography>
            </div>
            <div className="joined-at">
              <Typography variant="h6">
                <span className="profile-card-label">Joined: </span>
                {formatDate(user.createdAt)}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <PostsList></PostsList>
    </div>
  );
}
