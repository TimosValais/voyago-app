import { Box, Typography } from "@mui/material";
import { defaultTypographySx } from "../styles/defaultStyles";

const AboutUs = () => {
  return (
    <Box>
      <Typography variant="h1" sx={defaultTypographySx}>
        This is the About us page
      </Typography>
    </Box>
  );
};
export default AboutUs;
