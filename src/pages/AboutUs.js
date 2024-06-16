import { Box, Typography } from "@mui/material";
import { useDefaultTypographySx } from "../styles/defaultStyles";

const AboutUs = () => {
  const defaultTypographySx = useDefaultTypographySx;
  return (
    <Box>
      <Typography variant="h1" sx={defaultTypographySx}>
        This is the About us page
      </Typography>
    </Box>
  );
};
export default AboutUs;
