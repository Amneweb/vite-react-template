import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import TipsGarantia from "./TipsGarantia";
import TipsPagos from "./TipsPagos";

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

export default function TipTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          <Tab label="Garantías" {...TipTabsProps(0)} />
          <Tab label="Formas de pago" {...TipTabsProps(1)} />
          <Tab label="Reciclado de baterías" {...TipTabsProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TipsGarantia />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TipsPagos />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Reciclaje LE RECORDAMOS QUE EL PRECIO ES ENTREGANDO BATERIA VIEJA EN
        DESUSO , O DE LO CONTRARIO DEBERIA ABONAR UN ADICIONAL DE $10.000 EN
        CASO DE NO PODER O NO QUERER ENTREGAR LA BATERIA EN DESUSO. MODO DE
        ENTREGA DE BATERIA VIEJA EN DESUSO / BATERIA REEMPLAZADA. ENVIOS
        REALIZADOS POR NUESTRA PROPIO TRANSPORTE: UNA VEZ INSTALADA O ENTREGADA
        LA BATERIA DEBERA ENTREGARSELA AL CADETE ENCARGADO DE SU ENTREGA Y/O
        INSTALACION. LA BATERIA REEMPLAZADA TENDRA QUE SER ENTREGADA, PARA SU
        CORRECTO RECICLAJE DEL FABRICANTE. (SEGÚN EL DECRETO 373/73 PARA EL
        DEBIDO TRATAMIENTO DE RESIDUOS). LAS BATERIAS SON NUEVAS. LAS BATERIA
        ENTREGADAS A MODO PLAN CANJE SON ENTREGADAS AL FABRICANTE EL CUAL
        RECICLA LA MATERIA PRIMA DE LAS MISMAS. Recuerde que realizamos envíos
        en el día , tenga en cuenta que es por orden de compra , siendo posible
        que el envió sea despachado al día siguiente de su compra. -CONSULTE POR
        LOCALIDADES CON "ENVIOS E INSTALACION EN EL DIA" -LOS ENVIOS A DOMICILIO
        CON O SIN ISTALACION QUE NO SEAN POR ENCOMIENDA O MENSAJERIA SE REALIZAN
        DE 9:30 A 17:00 HS- -ENVIOS FLEX CON ENTREGA EN EL DIA : SE ENTREGAN DE
        LUNES A VIERNES DE 8:00 A 21:00HS SABADOS DE 9:00 A 21:00HS -Tener en
        cuenta que una vez llegada la batería si quiere devolver la compra por
        algun motivo, usted deberá abonar el costo de envío. SOLO ES GRATIS EL
        ENVIO DE LA COMPRA. OFERTA HASTA AGOTAR STOCK
      </CustomTabPanel>
    </Box>
  );
}
