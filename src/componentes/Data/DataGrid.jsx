import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { formateado } from "../../utlis/format";
import axios from "axios";
import { Link, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderRight: "1px solid",
    borderRightColor: "rgba(81, 81, 81, 1);",
  },
}));

const columns = [
  { field: "marca", headerName: "Marca", width: 90 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 300,

    renderCell: (params) => (
      <Link
        underline="hover"
        component={RouterLink}
        to={`/product/${params.row.sku}`}
      >
        {params.value}
      </Link>
    ),
  },
  {
    field: "sku",
    headerName: "sku",
    width: 90,
  },

  {
    field: "amperaje",
    headerName: "Amperaje (Ah)",
    width: 150,
    valueGetter: (value, row) => `12x${row.amperaje}`,
  },
  {
    field: "placas",
    headerName: "Placas",
    width: 90,
  },
  {
    field: "alto",
    headerName: "Alto (mm)",
    width: 110,
  },
  {
    field: "ancho",
    headerName: "Ancho (mm)",
    width: 110,
  },
  {
    field: "largo",
    headerName: "Largo (mm)",
    width: 110,
  },
  {
    field: "peso",
    headerName: "Peso (kg)",
    width: 90,
  },
  {
    field: "hca",
    headerName: "HCA (A)",
    width: 90,
  },
  {
    field: "cca18",
    headerName: "CCA -18ºC (A)",
    width: 90,
  },
  {
    field: "cca0",
    headerName: "CCA 0ºC (A)",
    width: 90,
  },
  {
    field: "c20",
    headerName: "Capacidad (Ah)",
    width: 90,
  },
  {
    field: "reserva",
    headerName: "Reserva (Ah)",
    width: 100,
  },
  {
    field: "precio",
    headerName: "Precio",
    width: 140,
    valueGetter: (value, row) => `${formateado.format(row.precio)}`,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 60,
  },
];

export default function Data() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response;
      try {
        response = await axios.get(
          `http://localhost:8080/api/baterias/filtrado/`
        );

        const array = response.data.payload;
        setRows(array);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
        }}
      >
        <Typography
          sx={{ color: "primary.main" }}
          variant="h2"
          component={"h1"}
          textAlign="center"
        >
          Todas las baterías
        </Typography>
      </Paper>
      <Box sx={{ width: { xs: 1, md: 0.9 }, mx: "auto" }}>
        <StyledDataGrid
          sx={{ backgroundColor: "background.paper" }}
          getRowId={(row) => row.sku}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
        />
      </Box>
    </Box>
  );
}
