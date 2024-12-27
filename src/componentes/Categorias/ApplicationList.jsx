import { Box } from "@mui/material";
import ApplicationAvatar from "./ApplicationAvatar";

const ApplicationList = ({ application }) => {
  console.log("aplicacion en application list", application);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flex: 2,
        justifyContent: "flex-start",
      }}
    >
      {application &&
        application.length > 0 &&
        application.map((element) => (
          <ApplicationAvatar aplicacion={element} />
        ))}
    </Box>
  );
};

export default ApplicationList;
