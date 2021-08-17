import React from "react";
import BodyCard from "./BodyCard";
import { Grid } from "@material-ui/core";

function Content(props) {
  return (
    <Grid container spacing={2}>
      {props.tasks.map((task) => (
        <Grid item xs={4}>
          <BodyCard task={task.name} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Content;
