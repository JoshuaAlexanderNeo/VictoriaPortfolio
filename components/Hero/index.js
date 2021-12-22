import Image from "next/image"
import Typography from "@mui/material/Typography";
import { Button, Stack, Grid, Box } from "@mui/material";
import Link from "next/link";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import creative_illustration from "../../public/creative_illustration.svg"

const Hero = ({title, subtitle }) => {

    return (

        <Grid
            component="section"
            container
            className="hero-component gradient"
            sx={{
                position: `relative`,
                width: `100%`,
                overflow: `hidden`,
                mt: -8
            }}
        >
            <Grid
                container
                sx={{
                    position: "absolute",
                    inset: 0,
                }}

            >
                <Grid item xs={1}></Grid>
                <Grid 
                    xs={6}
                    container
                    item
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            color: "common.white",
                            fontWeight: 400,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        component="p"
                        variant="h3"
                        color="common.white"
                        sx={{
                            ml: 1,
                            mb: 5,
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Image src={creative_illustration} alt="creative_illustration" width={800} sx={{mb: 20 }}/>
                </Grid>
                
            </Grid>
            
        </Grid>
    )
}


export default Hero