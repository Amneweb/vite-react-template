import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

import InfoGeneral from "./InfoGeneral";
import { Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tip-tabpanel-${index}`}
      aria-labelledby={`tip-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TipTabsProps(index) {
  return {
    id: `tip-tab-${index}`,
    "aria-controls": `tip-tabpanel-${index}`,
  };
}

export default function ComprasTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "primary.main",
          fontWeight: "bold",
          my: "3rem",
        }}
      >
        Condiciones de venta
      </Typography>

      <Box
        sx={{
          width: "90%",
          margin: "auto",
          borderColor: "#10aee3",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "5px",
          backgroundColor: "background.box",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Información extra sobre el negocio y las baterías"
          >
            <Tab label="Información General" {...TipTabsProps(0)} />
            <Tab label="Mayoristas" {...TipTabsProps(1)} />
            <Tab label="Si tenés taller mecánico" {...TipTabsProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <InfoGeneral />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Mayoristas
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Talleristas
        </CustomTabPanel>
      </Box>
    </>
  );
}
