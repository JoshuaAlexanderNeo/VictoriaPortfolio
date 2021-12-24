import Image from "next/image"
import Typography from "@mui/material/Typography";
import { Button, Stack, Grid, Box } from "@mui/material";
import Link from "next/link";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import creative_illustration from "../../public/creative_illustration.svg"
import hero from "../../public/hero-architecture.png"

const Hero = ({title, subtitle }) => {

    return (

        <Grid
            component="section"
            container
            className="hero-component"
            sx={{
                position: `relative`,
                width: `100%`,
                overflow: `hidden`,
                mt: -8
            }}
        >
            <Image priority src={hero} alt="hero" quality={100} layout="fill" objectFit="cover" placeholder="blur" />
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
                        variant="h2"
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
                        variant="h4"
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