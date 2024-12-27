import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function OppositeContentTimeline() {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
          color: "primary.main",
        }}
      >
        <Typography variant="h2" component={"h1"} textAlign={"center"}>
          Nuestra hisoria
        </Typography>
      </Paper>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            1988
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack>
              <Typography variant="body2">
                Alejandro comienza a trabajar en un taller....
              </Typography>
              <Box component="image">
                <img className="timeline" src="/assets/images/anaqueles.jpg" />
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            1998
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>se pone por su cuenta</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2014
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Bla Bla Bla</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Pandemia</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
