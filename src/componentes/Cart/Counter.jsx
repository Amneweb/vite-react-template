import { useEffect, useState } from "react";
import { TextField, Fab, Stack, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& .MuiInputBase-input": {
      textAlign: "center",
      width: "100%",
    },
  },
});

export default function Counter({ qty, item }) {
  const { modificarCantidad } = useContext(CartContext);
  const [count, setCount] = useState(qty);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    modificarCantidad(item, count);
  }, [count]);

  const handleTooltipClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      direction="row"
      sx={{ display: "flex", gap: "0.3rem", width: "100%" }}
    >
      <Fab
        sx={{ borderRadius: "2px", flex: 1 }}
        color="primary"
        aria-label="remove"
        size="small"
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 1}
      >
        <RemoveIcon fontSize="small" />
      </Fab>

      <StyledInput
        size="small"
        sx={{ flex: 1 }}
        value={count}
        slotProps={{ readOnly: true }}
      />

      <Tooltip
        disableFocusListener
        disableTouchListener
        arrow
        open={count === item.item.stock}
        title="No hay más stock"
      >
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          sx={{ borderRadius: "2px", flex: 1 }}
          onClick={() => setCount((prev) => prev + 1)}
          disabled={count === item.item.stock}
        >
          <AddIcon fontSize="small" />
        </Fab>
      </Tooltip>
    </Stack>
  );
}
