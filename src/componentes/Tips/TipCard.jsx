import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Icon, Typography } from "@mui/material";

const IconWrapper = styled("div")(({ theme }) => ({
  "& > svg": {
    color: "primary.main",
    fontSize: "5rem",
  },
}));

const TipCard = (props) => {
  return (
    <Card sx={{ flex: 1, minWidth: "30%" }}>
      <CardMedia
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "2rem",
          "& > svg": {
            color: "primary.main",
            fontSize: "5rem",
          },
        }}
      >
        {props.icon}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.contenido}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TipCard;
