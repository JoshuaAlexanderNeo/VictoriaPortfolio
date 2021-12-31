import { Typography, Container, Grid } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../components/TopBar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Link from 'next/link';
import avatar from '../../public/open-victoria.png'



export default function Home() {
  return (
    <>
      <TopBar />
      <Container sx={{ mt: 15 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} sx={{ mt: 11, justifyContent: 'center' }}>
            <div style={{ justifyContent: "center", display: "grid"}}>
              <Typography gutterBottom variant="h3">Contact me</Typography>
              <Link passHref href='https://www.linkedin.com/in/vsukiasova'><Typography className="clickableLink" gutterBottom variant="h5"><LinkedInIcon color="secondary" sx={{ mb: -2, fontSize: "50px" }} />www.linkedin.com/in/vsukiasova</Typography></Link>
              <Link passHref href='mailto:v.sukiasova@gmail.com'><Typography className="clickableLink" gutterBottom variant="h5"><EmailIcon color="secondary" sx={{ mb: -2, fontSize: "50px" }} />v.sukiasova@gmail.com</Typography></Link>
            </div>
            <div style={{ justifyContent: "center", display: "flex", marginTop: "30px" }}>
              <Image src={avatar} alt="avatar" quality={100} objectFit="cover" sx={{ mb: "20px" }} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
