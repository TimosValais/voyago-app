import { Box, Typography } from "@mui/material";
import { useDefaultTypographySx } from "../styles/defaultStyles";

const AboutUs = () => {
  const defaultTypographySx = useDefaultTypographySx();

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ ...defaultTypographySx, mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={defaultTypographySx}>
        We are a group of students from Goldsmiths, University of London, who
        came together to develop Voyago, an app designed to make trip planning
        and coordination easier for everyone. With Voyago, you can manage all
        aspects of your travels, from assigning tasks like booking tickets to
        organizing accommodations, and collaborating with friends and family to
        ensure a smooth and enjoyable experience.
      </Typography>
      <Typography variant="body1" sx={{ ...defaultTypographySx, mt: 2 }}>
        Developing Voyago was not just a project for us—it was an exciting
        journey that allowed us to learn, grow, and have a lot of fun along the
        way. We hope that you find Voyago as helpful and enjoyable to use as we
        did creating it. Thank you for being a part of our adventure!
      </Typography>
    </Box>
  );
};

export default AboutUs;
