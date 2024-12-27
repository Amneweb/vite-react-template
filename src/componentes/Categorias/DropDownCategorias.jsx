import { Autocomplete, TextField, Box } from "@mui/material";

const DropDownCategorias = ({ arrayCategorias }) => {
  const options = arrayCategorias.map((cate) => cate.category);
  return (
    <Autocomplete
      id="selector-categorias-mobile"
      sx={{ m: 4 }}
      options={options}
      autoHighlight
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
          label="Categorías"
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

export default DropDownCategorias;
