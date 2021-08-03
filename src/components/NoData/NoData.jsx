import { Typography } from "@material-ui/core";

export const NoData = () => {
  return (
    <Typography
      variant="h3"
      color="error"
      align="center"
      className={"main-content no-data"}
    >
      Please enter a valid name
    </Typography>
  );
};
