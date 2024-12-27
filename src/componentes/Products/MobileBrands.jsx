import { Autocomplete, TextField, Box } from "@mui/material";

const MobileBrands = ({ arrayMarcas }) => {
  return (
    <Autocomplete
      id="selector-marcas-mobile"
      sx={{ m: 4 }}
      options={arrayMarcas}
      autoHighlight
      getOptionLabel={(option) => option.nombre}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              src={`assets/images/avatar${option.nombre}.png`}
              alt=""
            />
            {option.nombre}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nuestras marcas"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  );
};

export default MobileBrands;
