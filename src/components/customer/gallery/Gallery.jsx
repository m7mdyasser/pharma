import { Box, Stack } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const images = [
  {
    url: "/public/image/gallery/img3.jpg",
    title: "Prescription Refills",
    width: "35%",
    description:
      "An effortless way to request refills straight from your smartphone any time day or night.",
  },
  {
    url: "/public/image/gallery/img2.jpg",
    title: "Reminders",
    width: "20%",
    description:
      "A weekly calendar to coordinate medication doses and receive refill reminders.",
  },
  {
    url: "/public/image/gallery/img1.jpg",
    title: "title",
    width: "25%",
    description:
      "A weekly calendar to coordinate medication doses and receive refill reminders.",
  },
  {
    url: "/public/image/gallery/img4.webp",
    title: "Reading list",
    width: "20%",
    description:
      "A weekly calendar to coordinate medication doses and receive refill reminders.",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.1,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.65,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export const Gallery = () => {
  return (
    <Box>
      <div data-aos="fade-right">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              height: "400px",
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Stack>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    width: "60%",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    marginX: "auto",
                    marginBottom: "20px",
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <p>{image.description}</p>
              </Stack>
            </Image>
          </ImageButton>
        ))}
      </Box>
      </div>

    </Box>
  );
};
