import Image from "next/image"
import Typography from "@mui/material/Typography";
import { Button, Stack, Grid, Box } from "@mui/material";
import Link from "next/link";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import creative_illustration from "../../public/creative_illustration.svg"
import hero from "../../public/hero-architecture.png"
import {useState, useEffect} from "react";


function getWindowDimensions() {
    if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
    } else {
    return {
      "width": 0,
      "height": 0
    }
    }
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

const Hero = ({title, subtitle }) => {
    const { width=0, height=0 } = useWindowDimensions();


    return (

        <Grid
            component="section"
            container
            className={"hero-component " + (width < 1200 ? "mobileBackground" : null)}
            sx={{
                height: "100vh",
            }}
        >
            {width > 900 ? <Image priority src={hero} alt="hero" quality={100} layout="fill" objectFit="cover" placeholder="blur" /> : null  }
            <Grid
                container
                sx={{
                    position: "absolute",
                    inset: 0,
                }}

            >
                <Grid 
                    xs={7}
                    container
                    item
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="poster"
                        gutterBottom
                        sx={{
                            color: "common.black",
                            fontWeight: 400,
                            textTransform: "uppercase",
                            ml: 5
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        component="p"
                        variant="posterSmall"
                        color="common.black"
                        sx={{
                            ml: 5,
                            mb: 5,
                            textTransform: "uppercase"
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Grid container flexDirection="row">
        
                        <Grid item xs={9} container sx={{ ml:5 }} style={{maxWidth: "100%", flexBasis: "100%"}}>
                            <Link
                                href="/Projects"
                                as="/Projects"
                                passHref
                            >
                                <Button variant="contained" color="primary" size="large"  sx={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography variant="button">View Projects</Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



export default Hero