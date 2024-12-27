import {
  Box,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Footer = () => {
  const { categorias, marcas, amperajes, placas } = useContext(DataContext);

  return (
    <Paper
      sx={{
        mt: "5rem",
        py: "5rem",
        px: "3rem",
        background: "#1d1f25",
        "& .MuiPaper-root": {
          background: "#1d1f25",
        },
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 item size={3}>
          <Box sx={{ maxHeight: "60px", width: "auto" }}>
            <img className="logo" src="/assets/images/logoOceanColor.png" />
          </Box>
        </Grid2>
        <Grid2 item size={3}>
          <nav aria-label="categorias">
            <List>
              {categorias.length > 0 &&
                categorias.map((cate) => (
                  <ListItem disablePadding key={cate._id}>
                    <ListItemButton>
                      <ListItemText primary={cate.category} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </nav>
        </Grid2>
        <Grid2 item size={3}></Grid2>
        <Grid2 item size={3}></Grid2>
      </Grid2>
    </Paper>
  );
};

export default Footer;
