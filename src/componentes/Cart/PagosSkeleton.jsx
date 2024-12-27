import { Container, Skeleton, Stack } from "@mui/material";

const PagosSkeleton = () => {
  return (
    <Container sx={{ width: "80%" }}>
      <Stack direction="row" spacing={2} sx={{ paddingBottom: "0.5rem" }}>
        <Skeleton variant="rectangle" width="100%" height="7rem" />
        <Skeleton variant="rectangle" width="100%" height="7rem" />
        <Skeleton variant="rectangle" width="100%" height="7rem" />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangle" width="100%" height="2rem" />
        <Skeleton variant="rectangle" width="100%" height="2rem" />
      </Stack>
    </Container>
  );
};

export default PagosSkeleton;
