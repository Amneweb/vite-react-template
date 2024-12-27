import { Avatar, Tooltip } from "@mui/material";

const ApplicationAvatar = ({ aplicacion }) => {
  return (
    <Tooltip
      title={aplicacion}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
    >
      <Avatar
        alt={aplicacion}
        src={`/assets/images/${aplicacion.split(" ")[0]}.png`}
        sx={{
          width: 50,
          height: 50,
          bgColor: "rgba(255,255,255,0.3)",
          padding: "0.2rem",
        }}
      />
    </Tooltip>
  );
};

export default ApplicationAvatar;
