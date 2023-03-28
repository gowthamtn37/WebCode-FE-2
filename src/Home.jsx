import "./css/Home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Home({ user }) {
  return (
    <div className="Home">
      {user.map((usr, index) => (
        <HomeList key={index} user={usr} />
      ))}
    </div>
  );
}

function HomeList({ user }) {
  return (
    <div>
      <Card sx={{ Width: 1000, margin: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.question}
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
