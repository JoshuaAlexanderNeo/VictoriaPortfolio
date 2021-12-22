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
            <Image src={hero} alt="hero" quality={100} layout="fill" objectFit="cover" />
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
                            ml: 6,
                            mb: 5,
                            textTransform: "uppercase"
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Grid container flexDirection="row">
                        <Grid item xs={1.7}></Grid>
                        <Grid item xs={9} container justifyContent="center">
                            <Link
                                href="/projects"
                                as="/projects"
                                passHref
                            >
                                <Button variant="contained" color="secondary" size="large"  sx={{justifyContent: 'center', alignItems: 'center' }}>
                                    View Projects
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={1.7}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



export default Hero