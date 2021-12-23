import { Typography, Container, Grid } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../components/TopBar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import avatar from '../../public/open-victoria.png'



export default function Home() {
  return (
    <>
    <TopBar/>
    <Container sx={{mt: 25}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{mt: 11}}>
          <Typography gutterBottom variant="h3">Contact me:</Typography>
          <Link passHref href='https://www.linkedin.com/in/vsukiasova'><Typography className="clickableLink" gutterBottom variant="h5"><LinkedInIcon color="secondary" sx={{ mb: -2, fontSize: "50px"}}/>www.linkedin.com/in/vsukiasova</Typography></Link>
          <Link passHref href='mailto:sukyasova.vika@yandex.ru'><Typography className="clickableLink" variant="h5"><EmailIcon color="secondary" sx={{ mb: -2, fontSize: "50px"}}/>sukyasova.vika@yandex.ru</Typography></Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{justifyContent: "center", display: "flex"}}>
            <Image className="img-flip" src={avatar} alt="avatar" quality={100}  objectFit="cover" sx={{ mb: "20px"}}/>
          </div>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}
