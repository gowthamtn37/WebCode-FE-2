import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./css/user.css";

export function Users({ user }) {
  return (
    <div className="user">
      {user.map((usr, index) => (
        <UsersList key={index} user={usr} />
      ))}
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
