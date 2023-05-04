import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./css/user.css";
import { useEffect, useState } from "react";
import { API } from "./Api";

export function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`${API}/users/userdata`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="user">
      {userData.map((user, _id) => (
        <UsersList user={user} key={_id} />
      ))}{" "}
    </div>
  );
}

function UsersList({ user }) {
  return (
    <div>
      <Card sx={{ maxWidth: 300, margin: 5 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={user.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.company}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
